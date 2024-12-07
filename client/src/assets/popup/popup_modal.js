'use client';
import { useEffect, useState } from 'react';
import './popup.css'
import { useContextt } from '@/customHooks/usesocket';
import { redirect } from 'next/navigation';
export default function JoinRoomPopup({ isOpen, onClose }) {
  const [roomname, setRoomname] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(null);
useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("user"));
  if(!data) {
    redirect('/login');
    };
  setEmail(data?.email?data.email:"");
  setName(data?.name?data.name:"");
  setId(data?._id?data._id:"");
},[])
const {socket} = useContextt();
console.log(socket.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ roomname, name, id, email, role });
    socket.emit("join-room",{ teamname:roomname, name, id, email, role }) //payload
    onClose(); // Close the modal after form submission
  };

  return (
    isOpen && (
    <section className='section'>
      <div className="popup-overlay">
        <div className="popup-container">
          <h2>Join a Room</h2>
          <form onSubmit={handleSubmit} className="join-room-form">
            <div className="input-group">
              <label htmlFor="roomname">Room Name</label>
              <input
                type="text"
                id="roomname"
                value={roomname}
                onChange={(e) => setRoomname(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
               readOnly
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="id"
                value={id}
                readOnly
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
               readOnly
                required
              />
            </div>
            <div className="role-selection">
              <label>Role</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="batting"
                    onChange={() => setRole('batting')}
                    checked={role === 'batting'}
                  />
                  Batting
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="bowling"
                    onChange={() => setRole('bowling')}
                    checked={role === 'bowling'}
                  />
                  Bowling
                </label>
              </div>
            </div>
            <div className="button-group">
              <button type="submit" className="submit-btn">Join Room</button>
              <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      </section>
    )
  );
}
