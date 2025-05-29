import type { PageType } from '@/enums/page-type-enum.ts';
import type { ReactNode } from 'react';
import { AppSidebar } from '@/components/AppSidebar.tsx';
import TopBar from '@/components/TopBar.tsx';
import { AnimatePresence, motion } from 'framer-motion';
export default function Base(props: IProps) {
  function render() {
    switch (props.type) {
      case 'PRIMARY':
        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <>{props.children}</>
            </motion.div>
          </AnimatePresence>
        );
      case 'FULL_PAGE':
        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <>{props.children}</>
            </motion.div>
          </AnimatePresence>
        );
      case 'DASHBOARD':
        return (
          <div className={'w-full'}>
            <TopBar />
            <div className={'flex w-full'}>
              <AppSidebar />
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <div className={'flex-1 '}>{props.children}</div>
                </motion.div>
              </AnimatePresence>
            </div>
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
