import { BreadCrumbWithCustomSeparator } from "@/components/navigation/breadcrumb";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function AppLayout({ children } : { children: React.ReactNode }){
    return (
        <>
            <SidebarProvider >
                <AppSidebar />
                <main className="w-screen">
                    <SidebarTrigger />
                    
                    <div className="px-8 py-4">
                        <BreadCrumbWithCustomSeparator/>
                    </div>
                    { children }
                </main>
            
            </SidebarProvider>
        </>
    )
}