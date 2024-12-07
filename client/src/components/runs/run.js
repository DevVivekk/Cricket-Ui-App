'use client';
import React, { useEffect, useState } from 'react'
import './run.css'
import { useContextt } from '@/customHooks/usesocket';
const Run = () => {
  const {socket} = useContextt();
  const [allow,setAllow]= useState(true);
  const handleClick = (data)=>{
    if(!allow){
      alert('You are not on the strike!')
      return;
    }else{
    socket.emit("run-made",data);
    }
  }
  useEffect(()=>{
    socket?.on('joined',(data)=>{
      if(data[0].name===JSON.parse(localStorage.getItem("user")).name){
        setAllow(true);
      }else{
        setAllow(false)
      }
    })
    return ()=>{
      socket?.off('joined',(data)=>{
        if(data[0].name===JSON.parse(localStorage.getItem("user")).name){
          setAllow(true);
        }else{
          setAllow(false)
        }
      })
    }
  },[socket])
  return (
    <div className='run'>
    <div className='run-div-1'>
    <div className='div-1-ver'>
    <section className='green'><span>Ball Start</span></section>
    <section className='orange'><span>Wide</span></section>
    <section className='navy'><span>No Ball</span></section>
    </div>
    <div className='div-hor'>
    <section className='blue' onClick={()=>handleClick(0)}><span>0</span></section>
    <section className='navy' onClick={()=>handleClick(1)}><span>1</span></section>
    <section className='red'><span>Wicket</span></section>
    <section className='lime'  onClick={()=>handleClick(2)}><span>2</span></section>
    <section className='pink' onClick={()=>handleClick(4)}><span>4</span></section>
    <section className='grey' onClick={()=>handleClick(6)}><span>6</span></section>
    </div>
    </div>
    <div className='div-3-hor'>
    <section className='purple'><span>Bowler Stop</span></section>
    <section className='blue'><span>1 or 2</span></section>
    <section className='purple'><span>2 or 4</span></section>
    <section className='orange'><span>4 or 6</span></section>
    <section className='purple'><span>Ball in Air</span></section>
    </div>
    <div className='div-3-hor'>
    <section className='navy'><span>Others</span></section>
    <section className='purple'><span>3</span></section>
    <section className='navy'><span>Boundary Check</span></section>
    <section className='grey'><span>Appeal</span></section>
    <section className='navy'><span>Catch Drop</span></section>
    </div>
    <div className='div-4-hor'>
    <section className='aqua'><span>Leg Bye</span></section>
    <section className='green'><span>Bye</span></section>
    <section className='grey'><span>Third Umpire</span></section>
    <section className='red'><span>Review</span></section>
    </div>
    <div className='div-4-hor'>
    <section className='darkgreen'><span>Done</span></section>
    <section className='navy'><span>Misfield</span></section>
    <section className='purple'><span>Overthrow</span></section>
    <section className='red'><span>Wicket Confirm</span></section>
    </div>
    </div>
  )
}

export default Run