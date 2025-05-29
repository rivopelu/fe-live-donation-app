import { Button } from '@/components/ui/button.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import PageContainer from '@/components/PageContainer.tsx';

export default function DashboardPage() {
  const auth = useAuth();
  return (
    <PageContainer>
      <h1>DASHBOARD PAGE</h1>
      <Button onClick={() => auth.logOut()} variant={'destructive'}>
        LOGOUT
      </Button>
    </PageContainer>
  );
}
