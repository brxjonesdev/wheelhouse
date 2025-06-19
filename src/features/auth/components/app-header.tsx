'use client';
import React from 'react';
import { Button } from '@/shared/components/shadcn/button';
import useSupabaseAuth from '../use-auth';
import WheelhouseAvatar from './profile-signin';

export default function AppHeader() {
  const { user, loading, handleSignIn, handleSignOut } = useSupabaseAuth();

  return (
    <header className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 rounded-b-xl">
      <div>
        <p className="text-3xl text-center font-inter font-semibold font-heading tracking-wider">
          Wheelhouse
        </p>
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
