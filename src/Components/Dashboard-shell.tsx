"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "./App-sidebar"
import { SidebarInset, SidebarTrigger } from "./ui/sidebar"
import { ModeToggle } from "./Mode-toggle"
import { Button } from "./ui/button"
import { Bell, User } from "lucide-react"

export function DashboardShell({ children }: { children: React.ReactNode }) {
    const [showNotifications, setShowNotifications] = useState(false)

    return (
        <div className="flex min-h-screen">
            <AppSidebar />
            <SidebarInset>
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
                    <SidebarTrigger />
                    <div className="ml-auto flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowNotifications(!showNotifications)}
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5" />
                        </Button>
                        <ModeToggle />
                        <Button variant="ghost" size="icon" aria-label="User profile">
                            <User className="h-5 w-5" />
                        </Button>
                    </div>
                </header>
                <main className="flex-1 p-4 sm:p-6">{children}</main>
            </SidebarInset>
        </div>
    )
}

