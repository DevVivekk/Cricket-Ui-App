const socketIo = require('socket.io');
const stat = require('./helperfn');

let users = {}; 
module.exports = function(server){
    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join-room', async(userobj) => {
        console.log(userobj);
        if (!users[userobj.teamname]) {
            users[userobj.teamname] = []; //intiate if not exists
        }
        users[userobj.teamname].push({
            id: userobj.id,
            name: userobj.name,
            email: userobj.email,
            teamname:userobj.teamname,
            batting:'batting'===userobj.role?true:false, //either batting or bowling will be true
            bowling:'bowling'===userobj.role?true:false,
            runsgiven:'bowling'===userobj.role?0:null,
            runsmade:'batting'===userobj.role?0:null
        });
        socket.user = users[userobj.teamname].find(user => user.id === userobj.id);
       socket.join(userobj.teamname);
       //update the user score stats if bowling or batting:
       await stat.addNewMatch(userobj.id,userobj.teamname,userobj.role,userobj.role)
       io.to(userobj.teamname).emit("joined",users[userobj.teamname]);
    });
   
    socket.on('run-made', async(data) => {
        console.log(data)
        const user = socket.user;
        //console.log(user);
        if (user) {
            const team = users[user.teamname];
            const batters = team.filter(player => player.batting);
            if (data % 2 !== 0 && data <= 3) {
                await stat.updateRunMade(user.id, user.teamname, data, user.batting);
                if (batters.length === 2) {
                    let [batter1, batter2] = batters;
                    batter1.runsmade = (batter1.runsmade || 0) + data;
                    const batter1Index = team.findIndex(player => player.id === batter1.id);
                    const batter2Index = team.findIndex(player => player.id === batter2.id);
                    if (batter1Index !== -1 && batter2Index !== -1) {
                        // Swapping the positions of the batters
                        [team[batter1Index], team[batter2Index]] = [team[batter2Index], team[batter1Index]];
                    }
                }
                const bowlerIndex = team.findIndex(player => player.bowling);
                if (bowlerIndex !== -1) {
                    const bowler = team[bowlerIndex];
                    bowler.runsgiven += data; // Update the bowler's runsgiven
                }
            }else{
                let [batter1, batter2] = batters;
                batter1.runsmade = (batter1.runsmade || 0) + data;
                const bowlerIndex = team.findIndex(player => player.bowling);
                if (bowlerIndex !== -1) {
                    const bowler = team[bowlerIndex];
                    bowler.runsgiven += data; // Update the bowler's runsgiven
                }
            }
            io.to(user.teamname).emit('joined', team);
        }
    });
    
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        if (socket.user && users[socket.user.teamname]) {
            let data = users[socket.user.teamname];
            data = data.filter((item) => item.id !== socket.user.id);
            users[socket.user.teamname] = data;
            io.to(socket.user.teamname).emit('joined', data);            
            console.log(`This user left userId: ${socket.user.name}`);
        }
    });
    
});
}