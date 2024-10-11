"use client";

import { useState } from "react";

import { UserCard } from "./user-card";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types/user";

interface UserListProps {
  initialUsers: User[];
  totalPages: number;
}

export function UserList({ initialUsers, totalPages }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreUsers = async () => {
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const response = await fetch(`/api/users?page=${nextPage}`);
      const data = await response.json();
      setUsers([...users, ...data.users]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Failed to load more users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={loadMoreUsers}
          disabled={currentPage >= totalPages || loading}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}
