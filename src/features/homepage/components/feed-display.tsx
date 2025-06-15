import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/shadcn/tabs";
import UserFeed from './user-feed';

export default function FeedDisplay() {
  return (
    <section className='w-8/12 font-base'>
    <Tabs defaultValue="feed" className="w-full min-h-full flex ">
  <TabsList className='w-full'>
    <TabsTrigger value="feed">Feed</TabsTrigger>
    <TabsTrigger value="discovery">Discovery</TabsTrigger>
  </TabsList>
  <TabsContent value="feed" className='flex-1 flex'>
  <UserFeed/>
  </TabsContent>
  <TabsContent value="discovery" className='flex-1 flex'>Change your password here.</TabsContent>
</Tabs>
  </section>)
}
