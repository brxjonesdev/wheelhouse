'use client';
import Onboarding from '@/features/onboarding/components/onboarding';
import { useDefaultTabRedirect } from '@/utils/navigation';

export default function Homepage() {
  useDefaultTabRedirect('feed');
  const show = false; 

  return (
    <main className="flex-1 flex w-full">
      <Onboarding show={show}/>
      <p className="hidden md:block w-1/4">
      home page
      </p>
    </main>
  );
}
