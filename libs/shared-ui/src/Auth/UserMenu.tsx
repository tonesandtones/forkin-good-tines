'use client';

import { CircleUser } from 'lucide-react';
import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import styles from './UserMenu.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';

export function UserMenu() {
  const { data: session, status } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <span className={styles.avatar}>
            {status === 'authenticated' ? (
              <Avatar>
                <AvatarImage src={session.user.image ?? ''} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <CircleUser className="h-5 w-5" />
            )}
          </span>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        {status === 'authenticated' ? (
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => signIn()}>Login</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
