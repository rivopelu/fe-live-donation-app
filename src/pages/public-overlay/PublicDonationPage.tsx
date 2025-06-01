import { FormikProvider } from 'formik';
import { usePublicDonationPage } from './usePublicDonationPage';
import InputText from '@/components/InputText';
import { Button } from '@/components/ui/button';
import InputRupiah from '@/components/InputRupiah';
import { NumberFormatter } from '@/utils/number-format-helper';
import { Separator } from '@/components/ui/separator';

export default function PublicDonationPage() {
  const page = usePublicDonationPage();
  return (
    <div className="max-w-md  mx-auto min-h-screen flex items-center justify-center w-full">
      <div className="w-full grid gap-4">
        <div>
          <h3>Kirim donasi ke {page.queryUser?.data?.name}</h3>
        </div>
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
            <Separator />
            <div className="grid gap-3">
              <div>Pilih metode pembayaran</div>
              <div className="grid gap-3 grid-cols-4">
                {page.dataListPayment.map((item, i) => (
                  <Button
                    onClick={() => page.formik.setFieldValue('payment_type', item)}
                    variant={page.formik.values.payment_type === item ? 'default' : 'outline'}
                    key={i}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <Button loading={page.mutationCreate.isPending} onClick={() => page.formik.handleSubmit()}>
              KIRIM
            </Button>
            <div className="flex text-4xl">{page.mutationCreate.data?.virtual_account}</div>
          </div>
        </FormikProvider>
      </div>
    </div>
  );
}
