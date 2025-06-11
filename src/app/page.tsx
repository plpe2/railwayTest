"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const apiCall = async () =>{
      const response = await fetch('https://railwaytest-production-3732.up.railway.app/users')

      const data = await response.json();

      console.log(data)
    }
    apiCall();
  }, [])
  return <div>Dashboard</div>;
}
