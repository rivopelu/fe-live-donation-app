import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes.ts';
import { Button } from '@/components/ui/button.tsx';

export default function HomePage() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to={ROUTES.DASHBOARD()}>
        <Button>DASHBOARD</Button>
      </Link>
    </div>
  );
}
