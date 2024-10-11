import { User } from '../types/user';

const API_BASE_URL = process.env.API_BASE_URL;

export async function getUsers(page: number = 1): Promise<{ users: User[], total_pages: number }> {

    const response = await fetch(`${API_BASE_URL}/users?page=${page}`, { next: { revalidate: 3600 } });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await response.json();

    return {
        users: data.data,
        total_pages: data.total_pages
    };
}