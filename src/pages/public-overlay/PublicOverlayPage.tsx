import { useEffect } from 'react';
import { usePublicOverlayPage } from './usePublicOverlayPage';
import OverlayPreview from '@/components/OverlayPreview';

export default function PublicOverlayPage() {
  const page = usePublicOverlayPage();
  useEffect(() => {
    document.documentElement.style.background = 'transparent';
    document.body.style.background = 'transparent';

    document.body.style.margin = '0';

    return () => {
      document.documentElement.style.background = '';
      document.body.style.background = '';
      document.body.style.margin = '';
    };
  }, []);

  return (
    <div style={{ background: 'transparent' }}>
      {page.data?.type === 'TEXT' && (
        <div>
          <OverlayPreview
            message="Semangat yah kamu"
            donation_amount={10000}
            highlight_color={page.data.highlight_color}
            background_color={page.data.background_color}
            text_color={page.data.text_color}
            data={page.data}
          />
        </div>
      )}
    </div>
  );
}
