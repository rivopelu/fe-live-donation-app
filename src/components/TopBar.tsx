import PageContainer from '@/components/PageContainer.tsx';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import ProfileDropdown from '@/components/ProfileDropdown.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

export default function TopBar() {
  const auth = useAuth();
  return (
    <div className={'h-top-bar-height '}>
      <div className={'bg-sidebar border-b w-full flex h-top-bar-height fixed'}>
        <div className={'w-(--sidebar-width)'}></div>

        <div className={'flex-1 h-full '}>
          <PageContainer className={'flex-1 h-full'}>
            <div className={'h-full flex items-center justify-between'}>
              <div>Halo, {auth?.user?.name}</div>
              <div className={'flex gap-2'}>
                <ModeToggle />
                <ProfileDropdown />
              </div>
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}
