import { Button } from '@/components/ui/button.tsx';
import { MdLogout, MdPerson } from 'react-icons/md';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

export default function ProfileDropdown() {
  const auth = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant={'outline'}>
          <MdPerson />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} className="w-fit">
        <DropdownMenuItem>
          <Avatar>
            <AvatarImage src={auth?.user?.profile_picture} />
            <AvatarFallback>o</AvatarFallback>
          </Avatar>
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem variant={'destructive'} onClick={() => auth.logOut()}>
          <MdLogout />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
