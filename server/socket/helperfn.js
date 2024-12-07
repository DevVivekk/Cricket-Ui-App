const usermodel= require('../models/user');
async function addNewMatch(userId, matchName, isBatting, isBowling) {
    const matchEntry = {
        matchName: matchName,
        batting: { runsmade: 0 },
        bowling: { runsgiven: 0 }
    };

    try {
        const user = await usermodel.findById(userId);
        if (user) {
            await usermodel.updateOne(
                { _id: userId },
                { $push: { score: matchEntry } }
            );
        }
    } catch (err) {
        console.error("Error adding new match:", err);
    }
}

async function updateRunMade(userId, matchName, runsMade,batting) {
    try {
        const user = await usermodel.findById(userId);
        if (user && batting=='batting') {
            await usermodel.updateOne(
                { _id: userId, 'score.matchName': matchName },
                { $inc: { "score.$.batting.runsmade": runsMade } }
            );
        }else{
            await usermodel.updateOne(
                { _id: userId, 'score.matchName': matchName },
                { $inc: { "score.$.bowling.runsgiven": runsMade } }
            );
        }
    } catch (err) {
        console.error("Error updating runs made:", err);
    }
}
let stat={addNewMatch,updateRunMade}
module.exports = stat;