'use client';
import { User } from '@supabase/supabase-js';
import React from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function useSupabaseAuth() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const supabase = createClient();

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push('/');
      }
      setUser(user);
      setLoading(false);
    })();
  }, [supabase, router]);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/home',
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    } else {
      setUser(null);
      router.push('/');
    }
  };

  return { user, loading, handleSignIn, handleSignOut };
}
