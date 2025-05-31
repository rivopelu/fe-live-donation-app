import { getIn, useFormikContext } from 'formik';
import InputText from './InputText';
import { useEffect, useState } from 'react';

interface IProps {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onEnter?: () => void;
  id: string;
}

export default function InputRupiah(props: IProps) {
  const formik = useFormikContext<any>();
  const rawValue = getIn(formik.values, props.name);
  const [displayValue, setDisplayValue] = useState<string>('');

  useEffect(() => {
    if (typeof rawValue === 'number') {
      setDisplayValue(formatNumber(rawValue));
    } else {
      setDisplayValue('');
    }
  }, [rawValue]);

  function formatNumber(value: number | string) {
    const num = Number(String(value).replace(/\D/g, ''));
    return num.toLocaleString('id-ID');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, '');
    const numberValue = Number(raw);
    setDisplayValue(raw === '0' || raw === '' ? '' : formatNumber(numberValue));
    formik.setFieldValue(props.name, numberValue).then();
  }

  return <InputText {...props} startIcon={'Rp.'} type="text" value={displayValue} onChange={handleChange} />;
}
