import { Button } from '@/components/ui/button.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

export default function DashboardPage() {
  const auth = useAuth();
  return (
    <div>
      <h1>DASHBOARD PAGE</h1>
      <Button onClick={() => auth.logOut()} variant={'destructive'}>
        LOGOUT
      </Button>
    </div>
  );
}
