"use client"
import { createContext, useEffect } from 'react'
import { io } from 'socket.io-client'
const socket = io("http://localhost:4000",{upgrade:true,secure:true,autoConnect: false,transports:["websocket","polling"]})
export const GlobalContext = createContext();
const Mycontext = ({children}) => {
  useEffect(() => {
        socket.connect();
        return () => {
          socket.disconnect();
        };
      },[]);
  return (
    <GlobalContext.Provider value={{socket}}>
    {children}
    </GlobalContext.Provider>
  )
}

export default Mycontext