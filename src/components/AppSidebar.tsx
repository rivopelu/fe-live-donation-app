import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import BrandLogo from '@/components/BrandLogo.tsx';
import { SIDEBAR_DATA } from '@/constants/sidebar-data.ts';
import { Link } from 'react-router-dom';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={'h-top-bar-height p-0 m-0'}>
            <BrandLogo />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_DATA.map((item) => {
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild className={'text-gray-500'}>
                      <Link to={item.path}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
