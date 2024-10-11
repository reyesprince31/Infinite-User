import { User } from "@/lib/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserCard({ user }: { user: User }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
      <Avatar>
        <AvatarImage
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
        <AvatarFallback>
          {user.first_name[0]}
          {user.last_name[0]}
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-xl font-semibold">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-xs text-gray-400">ID: {user.id}</p>
      </div>
    </div>
  );
}
