'use client';
import { useContextt } from '@/customHooks/usesocket';
import React, { useEffect, useState } from 'react';
import './livescore.css'
const Livescore = () => {
  const { socket } = useContextt();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    socket?.on('joined', (data) => {
      setTeam(data);
    });
    return ()=>{
      socket.off('joined',(data) => {
      setTeam(data);
    })
  };
  }, [socket]);

  console.log(team);

  return (
    <div className="livescore-container">
      <h1 className="title">Score Board & Match Announcements</h1>
      {team &&
        team
          .filter((item) => item.batting === true)
          .map((item) => (
            <div className="batters" key={item.id}>
              <h2>{item.name}</h2>
              <span>Scored: {item.runsmade}</span>
            </div>
          ))}
      {team &&
        team
          .filter((item) => item.bowling === true)
          .map((item) => (
            <div className="bowling" key={item.id}>
              <h2>{item.name}</h2>
              <span>Runs Given: {item.runsgiven}</span>
            </div>
          ))}
    </div>
  );
};

export default Livescore;
