import React from 'react'
import { TransitionPanelCard } from './cardonboarding'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/shadcn/dialog"

export default function Onboarding({ show }: { show: boolean }) {
  return (
    <div>
        <Dialog open={show}>
            <DialogHeader className='hidden'>
                <DialogTitle className='text-2xl font-bold'>Onboarding</DialogTitle>
            </DialogHeader>
<DialogContent className='p-0 w-fit rounded-2xl shadow-none border-none'>
    <TransitionPanelCard items={[
                    { title: 'Welcome to the Onboarding', content: 'This is the first step of your onboarding process.' },
                    { title: 'Step 2', content: 'Here you will learn about our features.' },
                    { title: 'Final Step', content: 'You are almost done!' }
    ]} >
      
    </TransitionPanelCard>
  </DialogContent>
</Dialog>
    </div>
  )
}
