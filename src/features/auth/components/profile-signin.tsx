import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/shadcn/avatar';
import { User } from '@supabase/supabase-js';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/shadcn/popover"
import { Button } from '@/shared/components/shadcn/button';
import { UserIcon, Settings, LogOut } from 'lucide-react';
import { Separator } from '@/shared/components/shadcn/separator';
import Link from 'next/link';

export default function WheelhouseAvatar({ user, onSignOut }: { user: User, onSignOut: () => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Avatar className="w-12 h-12 rounded-lg shadow-2xs">
          <AvatarImage src={user.user_metadata.avatar_url || "/placeholder.svg"} alt="User Avatar" className='object-cover' />
          <AvatarFallback>{user.user_metadata.full_name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-fit shadow-2xs p-2" align="center">
        <div className="flex flex-col space-y-1">
          <Link href={'/profile/' + user.id} className='w-full' >  
          <Button variant="ghost" className="justify-start h-8 px-2 w-full" >
            <UserIcon className="mr-1 h-4 w-4" />
            Profile
          </Button>
          </Link>
          <Separator />
          <Link href={'/settings'} className='w-full' > 
          <Button variant="ghost" className="justify-start h-8 px-2" >
            <Settings className="mr-1 h-4 w-4" />
            Settings
          </Button>
          </Link>
          <Separator />
          <Button
            variant="ghost"
            className="justify-start h-8 px-2 text-red-600 hover:text-red-600 hover:bg-red-50"
            onClick={onSignOut}
          >
            <LogOut className="mr-1 h-4 w-2" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
