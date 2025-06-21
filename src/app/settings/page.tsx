"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/shadcn/avatar"
import { Button } from "@/shared/components/shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/shadcn/card"
import { Input } from "@/shared/components/shadcn/input"
import { Label } from "@/shared/components/shadcn/label"
import { Switch } from "@/shared/components/shadcn/switch"
import { Textarea } from "@/shared/components/shadcn/textarea"
import { Camera, Music, Settings, User, Shield } from "lucide-react"

export default function Component() {
  const [isPrivate, setIsPrivate] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="">
            <h1 className="text-2xl font-medium tracking-wider font-heading">Settings</h1>
            <p className="text-muted-foreground text-sm">Manage your account settings and preferences.</p>
          </div>
           {/* Save Button */}
          <div className="flex justify-end">
            <Button size="sm" variant={"outline"} className="shadow-none">Save Changes</Button>
          </div></div>

          {/* Profile Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-5 w-5" />
              <div>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your profile information and avatar.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Change Avatar
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="@username" defaultValue="@johndoe" />
                  <p className="text-sm text-muted-foreground">This is your unique identifier.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input id="displayName" placeholder="Your display name" defaultValue="John Doe" />
                  <p className="text-sm text-muted-foreground">This is how others will see your name.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px] resize-none"
                  defaultValue="Music enthusiast and creative professional. Always exploring new sounds and sharing great tunes."
                />
                <p className="text-sm text-muted-foreground">
                  Brief description for your profile. Maximum 160 characters.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Shield className="h-5 w-5" />
              <div>
                <CardTitle>Privacy</CardTitle>
                <CardDescription>Control who can see your profile and activity.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="private-profile">Private Profile</Label>
                  <p className="text-sm text-muted-foreground">Make your profile and activity private</p>
                </div>
                <Switch id="private-profile" checked={isPrivate} onCheckedChange={setIsPrivate} />
              </div>
            </CardContent>
          </Card>

          {/* Tunebox Settings */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Music className="h-5 w-5" />
              <div>
                <CardTitle>Tunebox Settings</CardTitle>
                <CardDescription>Configure your music and audio preferences.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              
            </CardContent>
          </Card>

          {/* Theme Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Settings className="h-5 w-5" />
              <div>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of your interface.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
            </CardContent>
          </Card>

         
        </div>
      </div>
    </div>
  )
}
