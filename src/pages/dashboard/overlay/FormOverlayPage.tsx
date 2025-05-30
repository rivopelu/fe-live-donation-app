import InputColor from '@/components/InputColor';
import OverlayPreview from '@/components/OverlayPreview';
import PageContainer from '@/components/PageContainer.tsx';
import { Card, CardContent } from '@/components/ui/card';
import { useFormOverlay } from '@/pages/dashboard/overlay/useFormOverlay.ts';
import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay';
import { FormikProvider } from 'formik';

export default function FormOverlayPage() {
  const page = useFormOverlay();
  const data = page?.queryData?.data as IResDetailOverlay;
  return (
    <PageContainer>
      <h1>Edit Overlay</h1>
      <div>
        {page.queryData?.isPending ? (
          <div>LOADING</div>
        ) : (
          <div className="grid gap-4">
            <OverlayPreview
              message="Semangat yah kamu"
              donation_amount={10000}
              highlight_color={page.formik.values.hightligh_color}
              backround_color={page.formik.values.backround_color}
              text_color={page.formik.values.text_color}
              data={data}
            />
            <FormikProvider value={page.formik}>
              <Card>
                <CardContent>
                  <div className="grid gap-5 grid-cols-3">
                    <InputColor
                      id="backround_color"
                      name="backround_color"
                      required
                      placeholder="Pilih backround color"
                      label="Backround color"
                    />
                    <InputColor
                      id="text_color"
                      name="text_color"
                      required
                      placeholder="Pilih text color"
                      label="Text color"
                    />
                    <InputColor
                      id="hightligh_color"
                      name="hightligh_color"
                      required
                      placeholder="Pilih highlight color"
                      label="Highligh color"
                    />
                  </div>
                </CardContent>
              </Card>
            </FormikProvider>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
