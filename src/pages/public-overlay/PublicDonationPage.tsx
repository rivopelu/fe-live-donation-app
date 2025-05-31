import { FormikProvider } from 'formik';
import { usePublicDonationPage } from './usePublicDonationPage';
import InputText from '@/components/InputText';
import { Button } from '@/components/ui/button';
import InputRupiah from '@/components/InputRupiah';
import { NumberFormatter } from '@/utils/number-format-helper';

export default function PublicDonationPage() {
  const page = usePublicDonationPage();
  return (
    <div className="max-w-md  mx-auto min-h-screen">
      {page?.queryUser.data?.username}
      <h1>DONATION</h1>
      <div>
        <FormikProvider value={page.formik}>
          <div className="grid gap-4">
            <InputText required name="from" id="from" placeholder="dari..." label="dari" />
            <InputText required name="message" id="message" placeholder="Masukan pesan" label="pesan" />
            <InputText required name="email" id="email" placeholder="Masukan email" label="email" />
            <InputRupiah name="amount" id="amount" placeholder="Masukan jumlah" label="Jumlah" />
            <div className="grid grid-cols-3 gap-2">
              {page.listAmount.map((e) => (
                <Button onClick={() => page.formik.setFieldValue('amount', e)} variant={'outline'} key={e}>
                  {NumberFormatter.toRupiah(e)}
                </Button>
              ))}
            </div>
            <Button onClick={() => page.formik.handleSubmit()}>KIRIM</Button>
          </div>
        </FormikProvider>
      </div>
    </div>
  );
}
