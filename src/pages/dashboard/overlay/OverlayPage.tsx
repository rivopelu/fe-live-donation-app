import PageContainer from '@/components/PageContainer.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { useOverlayPage } from '@/pages/dashboard/overlay/useOverlayPage.ts';
import { ROUTES } from '@/routes/routes.ts';
import toast from 'react-hot-toast';
import { MdContentCopy, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function OverlayPage() {
  const page = useOverlayPage();
  const data = page.queryOverlay.data || [];

  function copyToClipboard(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Teks berhasil disalin!');
        toast.success('URL berhasil di copy');
      })
      .catch((err) => {
        console.error('Gagal menyalin teks: ', err);
      });
  }

  return (
    <PageContainer>
      <div>
        <h1 className="my-6">Overlay</h1>
        <div>
          {data.map((e, i) => (
            <Card key={i}>
              <CardContent className={'flex items-center justify-between'}>
                <div>
                  <div>{e.type}</div>
                  <p>{e.text}</p>
                </div>
                <div className={'flex gap-2'}>
                  <Link to={ROUTES.EDIT_OVERLAY(e.id)}>
                    <Button size={'icon'}>
                      <MdEdit />
                    </Button>
                  </Link>
                  <Button size={'icon'} onClick={() => copyToClipboard(ROUTES.OVERLAY_PUBLIC(e.id))}>
                    <MdContentCopy />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
