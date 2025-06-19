import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/shadcn/card';
import { Disc3Icon } from 'lucide-react';
import React from 'react';

export default function UserFeed() {
  const posts = [];
  return (
    <Card className="flex-1 shadow-none w-full pb-0 gap-2">
      <CardHeader className="pb-0">
        <CardTitle>What&apos;s new!</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Your feed of posts, music recommendations, and crate updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 h-full p-2">
        {posts.length === 0 ? (
          <EmptyFeed />
        ) : (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="p-4 border rounded-md">
                {/* Render post content here */}
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function EmptyFeed() {
  return (
    <Card className="shadow-none flex-1 flex items-center justify-center h-full bg-black/5">
      <div className="flex flex-col items-center justify-center text-center">
        <Disc3Icon className="w-14 h-14" />
        <h2 className="text-xl font-semibold mt-4">No posts yet</h2>
        <p className="text-gray-500 max-w-xs text-sm">
          Your feed grows with every follow, music recommendation, and crate update.{' '}
          <br />
          Start exploring !
        </p>
      </div>
    </Card>
  );
}

function LoadingFeed() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-200"></div>
    </div>
  );
}
//
