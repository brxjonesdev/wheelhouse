import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/shadcn/avatar';
import { Button } from '@/shared/components/shadcn/button';
import React from 'react'

export default function HomepageLayout({children}: 
    Readonly<{
        children: React.ReactNode;
    }>
) {
  return (
    <main className='font-base h-dvh '>
      <header className="flex flex-row items-center justify-between max-w-6xl mx-auto p-4 rounded-b-xl fixed top-0 left-0 right-0  backdrop-blur-md z-50">
  <div>
    <p className="text-3xl text-center font-inter font-semibold">
      Wheelhouse
    </p>
  </div>
  <div className="flex flex-row items-center gap-4">
    <Avatar className="w-10 h-10 rounded-lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="w-10 h-10" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Button size={"lg"} variant={"outline"}>Your Stage</Button>
  </div>
</header>

        {children}
    </main>
  )
}
