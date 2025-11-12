import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { Calendar, Home, Settings } from "lucide-react";
import { DropdownMenu } from "../ui/dropdown-menu";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },{
        title: "Todos",
        url: "/todo",
        icon: Calendar
    },{
        title: "Settings",
        url: "#",
        icon: Settings
    }
]



export function AppSidebar(){
    return (
        <Sidebar>
            
            <SidebarContent>

                <SidebarGroup>

                    <SidebarGroupLabel>Todo</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                { items.map((item) => (
                                    <SidebarMenuSubItem key={item.title}>
                                        <SidebarMenuSubButton asChild>
                                            <Link href={item.url}>
                                                <item.icon/>
                                                <span> {item.title} </span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                )) }    
                            </SidebarMenu>    
                        </SidebarGroupContent>

                </SidebarGroup>

            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        {/* Dropdown menu */}
                        <DropdownMenu>

                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        
        </Sidebar>
    )
}