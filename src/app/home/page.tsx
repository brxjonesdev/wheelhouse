'use client';
import FeedDisplay from '@/app/home/components/feed-display';
import Notifications from '@/features/notifications/components/notifications';
import { useDefaultTabRedirect } from '@/utils/navigation';
import Menu from './components/menu';

export default function Homepage() {
  useDefaultTabRedirect('feed');

  return (
    <main className="flex-1 flex w-full">
      <section className="w-full max-w-6xl mx-auto space-y-10 flex flex-col min-h-full pb-4 ">
        <div className="flex flex-col md:flex-row flex-1 gap-4 pb-2 w-full p-4 lg:p-0">
          <Menu />
          <FeedDisplay />
        </div>
      </section>
    </main>
  );
}0-9
