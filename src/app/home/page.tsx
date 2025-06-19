'use client';
import Collage from '@/app/home/components/collage';
import FeedDisplay from '@/app/home/components/feed-display';
import Notifications from '@/features/notifications/components/notifications';
import { useDefaultTabRedirect } from '@/utils/navigation';

export default function Homepage() {
  useDefaultTabRedirect('feed');

  return (
    <main className="flex-1 flex w-full">
      <section className="w-full max-w-6xl mx-auto space-y-10 flex flex-col min-h-full pb-4 ">
        <Collage userID={'isee'} />
        <div className="flex flex-col md:flex-row flex-1 gap-4 pb-2 w-full p-4 lg:p-0">
          <Notifications />
          <FeedDisplay />
        </div>
      </section>
    </main>
  );
}
