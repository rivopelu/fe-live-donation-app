import InputColor from '@/components/InputColor';
import OverlayPreview from '@/components/OverlayPreview';
import PageContainer from '@/components/PageContainer.tsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useFormOverlay } from '@/pages/dashboard/overlay/useFormOverlay.ts';
import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay';
import { FormikProvider } from 'formik';

export default function FormOverlayPage() {
  const page = useFormOverlay();
  const data = page?.queryData?.data as IResDetailOverlay;
  return (
    <PageContainer>
      <div className="flex justify-between items-center my-10">
        <h1>Edit Overlay</h1>
        <Button loading={page.mutationEdit.isPending} onClick={() => page.formik.handleSubmit()}>
          SUBMIT
        </Button>
      </div>
      <div>
        {page.queryData?.isPending ? (
          <div>LOADING</div>
        ) : (
          <div className="grid gap-4">
            <OverlayPreview
              message="Semangat yah kamu"
              donation_amount={10000}
              highlight_color={page.formik.values.highlight_color}
              background_color={page.formik.values.background_color}
              text_color={page.formik.values.text_color}
              data={data}
            />
            <FormikProvider value={page.formik}>
              <Card>
                <CardContent>
                  <div className="grid gap-5 grid-cols-3">
                    <InputColor
                      id="background_color"
                      name="background_color"
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
                      id="highlight_color"
                      name="highlight_color"
                      required
                      placeholder="Pilih highlight color"
                      label="Highlight color"
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
