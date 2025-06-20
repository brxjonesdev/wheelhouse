'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Collage from './components/menu';
import AboutUser from './components/about-user';
import EditorsPicks from './components/editors-picks';
import Crates from './components/crates';
import Playlists from './components/playlists';

export default function Profile() {
  const params = useParams();
  console.log('User ID:', params.userID);

  return (
    <main className="">
      <section className="px-4 max-w-6xl mx-auto space-y-6">
        <Collage />
        <AboutUser userID={params.userID as string} />
        <EditorsPicks />
        <Crates />
        <Playlists />
      </section>
      <footer className="bg-black mt-10 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center text-gray-500"></div>
      </footer>
    </main>
  );
}
