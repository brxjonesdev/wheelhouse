import React from 'react';
import SignInButton from './sign-in-btn';
import { Button } from '@/shared/components/shadcn/button';
import Link from 'next/link';
import UserAvatar from './avatar';
import { authClient } from '@/lib/auth-client';
import { getUser}

export default async function AppHeader() {
  // Replace this with your actual authentication logic
  const { data: session } = await authClient.getSession();
  console.log('Session data:', session);
  const isAuthed = true

  return (
    <header className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 rounded-b-xl">
      <div>
        <p className="text-3xl text-center font-inter font-semibold font-heading tracking-wider">
          Wheelhouse
        </p>
      </div>
      {isAuthed ? (
        <div className="flex flex-row items-center gap-4 font-body">
          <UserAvatar />
          <Link
            className="text-2xl lg:text-3xl text-center font-inter font-semibold "
            href="/profile/brxjonesdev"
          >
            <Button size={'lg'} variant={'outline'}>
              Your Stage
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <SignInButton />
        </div>
      )}
    </header>
  );
}


