import PageContainer from '@/components/PageContainer.tsx';
import { useOverlayPage } from '@/pages/dashboard/overlay/useOverlayPage.ts';

export default function OverlayPage() {
  const page = useOverlayPage();
  const data = page.queryOverlay.data || [];
  return (
    <PageContainer>
      <div>
        <h3>OVERLAY</h3>
        <div>
          {data.map((e, i) => (
            <div key={i}>{e.type}</div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
