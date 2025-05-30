import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay';
import { NumberFormatter } from '@/utils/number-format-helper';

export default function OverlayPreview(props: IProps) {
  return (
    <div
      className=" text-white borde flex items-center justify-center w-full border p-10"
      style={{ backgroundColor: props.background_color }}
    >
      <div style={{ color: props.text_color }} className="text-center font-bold text-2xl">
        <div>
          {'Jhon Doe baru saja mengirimkan '}
          <span style={{ color: props.highlight_color }}>{NumberFormatter.toRupiah(props.donation_amount)}</span>
        </div>
        <div>{props.message}</div>
      </div>
    </div>
  );
}

interface IProps {
  data?: IResDetailOverlay;
  background_color: string;
  highlight_color: string;
  text_color: string;
  donation_amount: number;
  message: string;
}
