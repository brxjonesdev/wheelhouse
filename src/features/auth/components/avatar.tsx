'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/shadcn/avatar';

import { authClient } from '@/lib/auth-client'; // import the auth client
import { Disc2Icon } from 'lucide-react';

export default function UserAvatar() {
  const { data: session, error } = authClient.useSession();

  if (error) {
    return <div className="w-10 h-10 rounded-lg bg-red-200">Error loading avatar</div>; // Error state
  }

  return (
    <Avatar className="w-10 h-10 rounded-lg">
      <AvatarImage src={session?.user.image as string} alt="user" className="w-10 h-10" />
      <AvatarFallback className="w-10 h-10 rounded-lg">
        <Disc2Icon />
      </AvatarFallback>
    </Avatar>
  );
}
