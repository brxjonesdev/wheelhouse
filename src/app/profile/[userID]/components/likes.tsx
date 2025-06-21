import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/shadcn/card"
import { Placeholder } from '@/shared/util/placeholder'



export default function Likes() {
  return (
    <Card className='shadow-none font-sans tracking-wide'>
  <CardHeader className='space-y-1 gap-0'>
    <CardTitle className='text-lg font-heading tracking-wider font-medium'>Irene's Orbit </CardTitle>
    <CardDescription className='text-sm text-muted-foreground'>
      A collection of Irene&apos;s favorite artists and genres.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Placeholder
      title="Orbits"
      description="This feature is currently under development and will be available soon."
      icon="construction"
      size="md"
            />
  </CardContent>
</Card>
  )
}
