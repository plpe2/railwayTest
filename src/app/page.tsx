"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const apiCall = async () =>{
      const response = await fetch('http://localhost:8080/users')

      const data = await response.json();

      console.log(data)
    }
    apiCall();
  }, [])
  return <div>Dashboard</div>;
}
