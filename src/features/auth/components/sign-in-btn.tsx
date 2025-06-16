'use client';
import React from 'react';
import { Button } from '@/shared/components/shadcn/button';
import { authClient } from '@/lib/auth-client';

export default function SignInButton() {
  async function handleSignIn() {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: 'http://localhost:3000/home',
      errorCallbackURL: 'http://localhost:3000/error',
      newUserCallbackURL: 'http://localhost:3000/home?newUser=true',
      disableRedirect: false,
    });
  }
  return (
    <Button
      className="bg-white text-black hover:bg-gray-100"
      onClick={handleSignIn}
      variant="outline"
      size="sm"
      disabled={false}
    >
      Sign in
    </Button>
  );
}
