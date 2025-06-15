import React from 'react'

export default function Collage({ userID }: { userID: string }) {
    console.log('Collage component rendered with userID:', userID);
  return (
    <section className="bg-black/10 min-h-[35vh] relative">
      <p
      className="absolute bottom-0 text-6xl right-0 translate-y-1/3"
      >@ireneRedVelvet</p>
    </section>
  )
}
