import RoutesBuilder from '@/components/RoutesBuilder.tsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position={'bottom-center'} />
      <RoutesBuilder />
    </>
  );
}
