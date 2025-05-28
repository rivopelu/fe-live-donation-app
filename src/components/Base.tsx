import type { PageType } from '@/enums/page-type-enum.ts';
import type { ReactNode } from 'react';
import { AppSidebar } from '@/components/AppSidebar.tsx';

export default function Base(props: IProps) {
  function render() {
    switch (props.type) {
      case 'PRIMARY':
        return <div>{props.children}</div>;
      case 'FULL_PAGE':
        return <>{props.children}</>;
      case 'DASHBOARD':
        return (
          <div className={'flex'}>
            <AppSidebar />
            <div className={'flex-1'}>{props.children}</div>
          </div>
        );
      default:
        return <>{props.children}</>;
    }
  }

  return <>{render()}</>;
}

interface IProps {
  type: PageType;
  children: ReactNode;
}
