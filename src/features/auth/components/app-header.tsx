import React from 'react';
import SignInButton from './sign-in-btn';
import { Button } from '@/shared/components/shadcn/button';
import { Link } from 'lucide-react';
import UserAvatar from './avatar';

export default function AppHeader() {
  return (
    <header className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 rounded-b-xl">
      <div>
        <p className="text-3xl text-center font-inter font-semibold font-heading tracking-wider">
          Wheelhouse
        </p>
      </div>
      <div>
        <SignInButton />
      </div>
    </header>
  );
}

const authed = (
  <header className="flex flex-row items-center justify-between max-w-6xl mx-auto p-4 rounded-b-xl fixed top-0 left-0 right-0  backdrop-blur-md z-50">
    <div>
      <p className=" text-2xl lg:text-3xl text-center font-inter font-semibold font-heading">
        Wheelhouse
      </p>
    </div>
    <div className="flex flex-row items-center gap-4">
      <UserAvatar />
      <Link
        className="text-2xl lg:text-3xl text-center font-inter font-semibold font-heading"
        href="/profile/brxjonesdev"
      >
        <Button size={'lg'} variant={'outline'}>
          Your Stage
        </Button>
      </Link>
    </div>
  </header>
);
