import PageContainer from '@/components/PageContainer.tsx';
import { ModeToggle } from '@/components/mode-toggle.tsx';

export default function TopBar() {
  return (
    <div className={'h-top-bar-height '}>
      <div className={'bg-sidebar border-b w-full flex h-top-bar-height fixed'}>
        <div className={'w-(--sidebar-width)'}></div>

        <p className={'flex-1 h-full '}>
          <PageContainer className={'flex-1 h-full'}>
            <div className={'h-full flex items-center justify-between'}>
              <div>HELLO</div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </PageContainer>
        </p>
      </div>
    </div>
  );
}
