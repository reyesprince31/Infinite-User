import { Metadata } from "next";
import { UserList } from "./_components/user-list";
import { getUsers } from "@/lib/server/get-user.service";

export const metadata: Metadata = {
  title: "User List | Infiniti",
  description: "View a list of users from our application",
};

export default async function UsersPage() {
  try {
    const { users, total_pages } = await getUsers();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <UserList initialUsers={users} initialTotalPages={total_pages} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return <div>Error loading users. Please try again later.</div>;
  }
}
