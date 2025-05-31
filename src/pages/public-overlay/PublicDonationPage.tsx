import { FormikProvider } from 'formik';
import { usePublicDonationPage } from './usePublicDonationPage';
import InputText from '@/components/InputText';
import { Button } from '@/components/ui/button';

export default function PublicDonationPage() {
  const page = usePublicDonationPage();
  return (
    <div className="max-w-md  mx-auto min-h-screen">
      {page?.queryUser.data?.username}
      <h1>DONATION</h1>

      <div>
        <FormikProvider value={page.formik}>
          <div className="grid gap-4">
            <InputText name="from" id="from" placeholder="dari..." label="dari" />
            <InputText name="message" id="message" placeholder="Masukan pesan" label="pesan" />
            <InputText name="amount" id="amount" placeholder="Masukan jumlah" label="Jumlah" />
            <Button onClick={() => page.formik.handleSubmit()}>KIRIM</Button>
          </div>
        </FormikProvider>
      </div>
    </div>
  );
}
