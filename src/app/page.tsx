"use client"
import { UserDataType } from "@/types/User";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState<UserDataType[]>([])

  useEffect(()=>{
    const apiCall = async () =>{
      const response = await fetch('/api/users')

      const data = await response.json();

      setUserData(data)
    }
    apiCall();
  }, [])

  if(!userData) return <p>Loading ...</p>
  return (<div>
    <ul>
    {userData.map((data : UserDataType) =>{
      return (
        <div key={data.id}>
          <li>{data.name}</li>
          <li>{data.email}</li>
          <li>{data.password}</li>
          <li>{data.status}</li>
        </div>
      )
    })}
    </ul>
  </div>)
}
