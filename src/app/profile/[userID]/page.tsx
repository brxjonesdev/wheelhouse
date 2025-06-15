'use client'
import React from 'react'
import { useParams } from 'next/navigation';

export default function Profile() {
    const params = useParams();
    console.log("User ID:", params.userID);

    
  return (
    <div></div>
  )
}
