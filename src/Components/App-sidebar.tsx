"use client";

import { NavLink } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator,
} from "./ui/sidebar";
import { BarChart3, Clock, Database, LayoutDashboard, Save, Settings } from "lucide-react";

export function AppSidebar() {
    const mainNavItems = [
        {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
        },
        {
            title: "Query History",
            href: "/history",
            icon: Clock,
        },
        {
            title: "Saved Queries",
            href: "/saved",
            icon: Save,
        },
    ];

    const otherNavItems = [
        {
            title: "Settings",
            href: "/settings",
            icon: Settings,
        },
    ];

    return (
        <Sidebar variant="inset">
            <SidebarHeader className="flex h-16 items-center px-4">
                <NavLink to="/" className="flex items-center gap-2 font-semibold">
                    <Database className="h-6 w-6 text-primary" />
                    <span className="text-lg">GenAI Analytics</span>
                </NavLink>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarMenu>
                    {mainNavItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <NavLink to={item.href} className={({ isActive }) => isActive ? "text-primary" : ""}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                <SidebarSeparator className="my-4" />
                <SidebarMenu>
                    {otherNavItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <NavLink to={item.href} className={({ isActive }) => isActive ? "text-primary" : ""}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4">
                <div className="flex items-center gap-2 rounded-md bg-muted p-2 text-xs text-muted-foreground">
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics v1.0</span>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
