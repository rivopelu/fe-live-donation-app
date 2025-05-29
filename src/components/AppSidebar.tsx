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
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';

export function AppSidebar() {
  const location = useLocation();
  const firstPath = location.pathname.split('/')[2];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className={'py-0 h-top-bar-height border-b '}>
          <SidebarGroupLabel className={' p-0 m-0 my-auto'}>
            <BrandLogo />
          </SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {SIDEBAR_DATA.map((item) => {
              const itemFirstPath = item.path && item?.path.split('/')[2];
              const active = firstPath === itemFirstPath;
              return (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      'text-gray-500 dark:text-gray-300 rounded-none',
                      active && 'border-b dark:text-white text-black dark:border-white/20 border-black/40',
                    )}
                  >
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
      </SidebarContent>
    </Sidebar>
  );
}
