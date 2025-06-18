import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/shadcn/card';
import React from 'react';

export default function Notifications() {
  const notifications = [];
  return (
    <Card className="shadow-none flex flex-col w-sm p-4 gap-4 max-h-96">
      <CardHeader className="p-0 m-0 gap-0">
        <CardTitle className="text-lg font-medium">Notifications</CardTitle>
        <CardDescription className="text-xs text-gray-500 font-medium tracking-wide">
          Stay updated with the latest activities and alerts.
        </CardDescription>
      </CardHeader>
      <section className="flex-1 bg-black/10 flex flex-col items-center justify-center rounded-lg">
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500">No notifications yet.</div>
        ) : (
          notifications.map((notification, index) => (
            <div key={index} className="p-2 border-b border-gray-200">
              <p>{notification.message}</p>
              <span className="text-xs text-gray-500">
                {new Date(notification.date).toLocaleString()}
              </span>
            </div>
          ))
        )}
      </section>
    </Card>
  );
}
