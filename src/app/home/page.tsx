'use client'
import Collage from "@/features/homepage/components/collage"
import FeedDisplay from "@/features/homepage/components/feed-display"

import Menu from "@/features/homepage/components/menu"
import { Separator } from "@/shared/components/shadcn/separator"
import { useDefaultTabRedirect } from "@/utils/navigation"

export default function Homepage() {
     useDefaultTabRedirect('feed')


  return (
    <section className="max-w-6xl mx-auto space-y-10 flex flex-col min-h-full">
        <Collage userID={"isee"} />
        <div className="flex flex-col md:flex-row flex-1 gap-4 pb-2 ">
          <Menu/>
          <Separator orientation="vertical" className="hidden md:block" />
          <FeedDisplay/>
        </div>
    </section>
  )
}