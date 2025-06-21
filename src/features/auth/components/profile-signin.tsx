import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/shadcn/avatar';
import { User } from '@supabase/supabase-js';
import { UserIcon, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/shadcn/dropdown-menu";

export default function WheelhouseAvatar({ user, onSignOut }: { user: User, onSignOut: () => void }) {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='cursor-pointer hover:-rotate-[5deg] transition-transform duration-300 ease-in-out'>
    <Avatar className="w-12 h-12 rounded-lg shadow-2xs">
      <AvatarImage src={user.user_metadata.avatar_url || "/placeholder.svg"} alt="User Avatar" className='object-cover' />
      <AvatarFallback>{user.user_metadata.full_name?.charAt(0)}</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='shadow-none mt-1 font-sans tracking-wider' >
    <DropdownMenuLabel className='font-sans tracking-wider text-center'>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
      <Link href="/profile/brxjonesdev" className='flex items-center gap-2 hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer'>
        <UserIcon className='w-4 h-4' />
        Profile
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link href="/settings" className='flex items-center gap-2 hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer'>
        <Settings className='w-4 h-4' />
        Settings
      </Link>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={onSignOut} className='text-red-500 hover:bg-red-100/80 transition-colors duration-150 ease-in-out cursor-pointer'>
      <LogOut className='w-4 h-4' />
      Sign Out
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
  );
}
