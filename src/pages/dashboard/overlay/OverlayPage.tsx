import PageContainer from '@/components/PageContainer.tsx';
import { useOverlayPage } from '@/pages/dashboard/overlay/useOverlayPage.ts';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { MdContentCopy, MdEdit } from 'react-icons/md';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes.ts';

export default function OverlayPage() {
  const page = useOverlayPage();
  const data = page.queryOverlay.data || [];
  return (
    <PageContainer>
      <div>
        <h1>Overlay</h1>
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button size={'icon'}>
                          <MdContentCopy />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side={'bottom'}>
                        <p>Copy URL</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
