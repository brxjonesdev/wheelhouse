'use client';
import React from 'react';
import { Button } from '@/shared/components/shadcn/button';
import WheelhouseAvatar from './profile-signin';
import useWheelhouseAuthFlow from '../hooks/useAuthFlow';
import Link from 'next/link';

export default function AppHeader() {
  const { user, loading, handleSignIn, handleSignOut } = useWheelhouseAuthFlow();

  return (
    <header className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 rounded-b-xl">
      <div>
        <Link href={'/home'}>
        <p className="text-3xl text-center savate font-semibold font-heading tracking-wider">
          Wheelhouse
        </p>
        </Link>
      </div>
      {!loading && user ? (
        <WheelhouseAvatar user={user} onSignOut={handleSignOut}/>
      ) : (
        <Button
          onClick={handleSignIn}
          disabled={loading}
          size={'sm'}
          variant={'outline'}
          className="font-semibold tracking-wider shadow-none"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      )}
    </header>
  );
}
