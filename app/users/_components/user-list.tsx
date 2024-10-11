"use client";

import { useState } from "react";
import { UserCard } from "./user-card";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types/user";
import { getUsers } from "@/lib/server/get-user.service";

interface UserListProps {
  initialUsers: User[];
  initialTotalPages: number;
}

export function UserList({ initialUsers, initialTotalPages }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMoreUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const moreUsers = await getUsers(currentPage + 1);
      setUsers((prevUsers) => [...prevUsers, ...moreUsers.users]);
      setTotalPages(moreUsers.total_pages);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError("Failed to load more users. Please try again.");
      console.error(error);
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
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex justify-center">
        <Button
          onClick={loadMoreUsers}
          disabled={loading || currentPage >= totalPages}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}
