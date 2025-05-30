import type { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';
import Label from '@/components/ui/Label.tsx';
import { type FormikErrors, type FormikTouched, getIn, useFormikContext } from 'formik';
import { Input } from '@/components/ui/input.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { HexColorPicker } from 'react-colorful';

interface IProps {
  id: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onEnter?: () => void;
  errorMessage?: any;
  helperText?: string;
  name: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
  dataTestId?: string;
}

export default function InputColor(props: IProps) {
  const formik = useFormikContext<any>();

  const errors = formik?.errors as FormikErrors<Record<string, any>>;
  const touched = formik?.touched as FormikTouched<Record<string, any>>;

  const errorMessage =
    props.errorMessage ?? (getIn(touched, props.name) && getIn(errors, props.name) ? getIn(errors, props.name) : '');
  return (
    <div className="grid ">
      {props.label && <Label label={props.label} required={props.required} />}
      <div className={cn('relative flex gap-1 items-center dark:bg-card bg-white')}>
        {props.startIcon && (
          <span className="absolute text-gray-500 left-3 flex items-center pr-3">{props.startIcon}</span>
        )}
        <Input
          data-testid={props.dataTestId}
          autoComplete={props.autoComplete}
          onBlur={props.onBlur ?? formik?.handleBlur}
          onChange={props.onChange ?? formik?.handleChange}
          value={props.value ?? getIn(formik?.values, props.name) ?? ''}
          name={props.name}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && props.onEnter) {
              props.onEnter();
            }
          }}
          type={props.type || 'text'}
          placeholder={props.placeholder || ''}
          className={cn(
            props.startIcon ? 'pl-12' : '',
            props.endIcon ? 'pr-9' : '',
            errorMessage ? ' outline-red-500 border-red-500 bg-red-100' : '',
          )}
          id={props.id}
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none outline-none h-fit">
            <div className="flex gap-3 h-full  ">
              <div
                className="border-2 h-8 w-8 rounded-md cursor-pointer active:scale-[98%]"
                style={{ backgroundColor: props.value ?? getIn(formik?.values, props.name) ?? '' }}
              ></div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Card>
              <CardContent>
                <HexColorPicker
                  onChange={(e) => formik.setFieldValue(props.name, e)}
                  color={props.value ?? getIn(formik?.values, props.name) ?? ''}
                />
              </CardContent>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {(errorMessage || props.helperText) && (
        <p className={cn('text-xs mt-1', errorMessage ? 'text-red-500' : 'text-gray-500')}>
          {errorMessage || props.helperText}
        </p>
      )}
    </div>
  );
}
