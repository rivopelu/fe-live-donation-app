import type { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

export default function PageContainer(props: IProps) {
  return <div className={cn('lg:max-w-5xl  mx-auto grid lg:px-0 px-4', props.className)}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
