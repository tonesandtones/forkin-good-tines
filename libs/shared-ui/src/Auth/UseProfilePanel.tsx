'use client';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { useSession } from 'next-auth/react';
import { AvatarImage } from '../avatar';
import { Card } from '../card';

const UseProfilePanel = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return <p>Access Denied</p>;
  }

  return (
    <Card className="mb-6">
      {/* <div className="flex items-center p-4">
        <Avatar className="rounded-full overflow-hidden w-[75px]">
          <AvatarImage src={session?.user?.image ?? ''} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h2 className="text-xl font-bold">
            {session.user.given_name} {session.user.family_name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {session.user.job_title}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {session.user.email}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {session.user.phone_number}
          </p>
        </div>
      </div> */}
    </Card>
  );
};

export { UseProfilePanel };
