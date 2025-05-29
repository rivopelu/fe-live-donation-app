interface IProps {
  required?: boolean;
  label: string;
}

export default function Label(props: IProps) {
  return (
    <label className="mb-1 text-sm font-medium dark:text-gray-300 text-gray-700">
      {props.label}
      {props.required && <span className={'text-red-700'}> *</span>}
    </label>
  );
}
