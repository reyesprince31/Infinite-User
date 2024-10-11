import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { User } from "lucide-react";
import ShiningButton from "@/components/shining-buton";

export const metadata: Metadata = {
  title: "Home Docs | Infiniti",
  description: "Documentation for the Infiniti App",
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Infiniti Users List Docs
      </h1>

      <div className="flex justify-center mb-8">
        <Link href="/users">
          <ShiningButton>
            <User className="mr-2 h-4 w-4" /> Go to Users Page
          </ShiningButton>
        </Link>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TechItem
            name="Next.js 14"
            description="React framework for production"
            imageSrc="/nextjs-logo.webp"
            link="https://nextjs.org/"
          />
          <TechItem
            name="Tailwind CSS"
            description="Utility-first CSS framework"
            imageSrc="/Tailwind_CSS_Logo.webp"
            link="https://tailwindcss.com/"
          />
          <TechItem
            name="shadcn/ui"
            description="Re-usable components built with Radix UI and Tailwind CSS"
            imageSrc="/shadcn-ui-logo.webp"
            link="https://ui.shadcn.com/"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Problem-Solving Approach
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Analyzed the requirements for user list display and pagination
          </li>
          <li>
            Designed the component structure for optimal performance and
            reusability
          </li>
          <li>Implemented server components for initial data fetching</li>
          <li>
            Created a client-side component for &quot;Load More&quot;
            functionality
          </li>
          <li>Integrated error handling and loading states</li>
          <li>Optimized for SEO and performance</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Server Components and API Service
        </h2>
        <p className="mb-4">
          We leveraged Next.js 14&apos;s server components to fetch initial data
          on the server, improving performance and SEO. Here&apos;s how we
          implemented it:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Created a <code>services.ts</code> file to handle API requests
          </li>
          <li>
            Implemented the <code>getUsers</code> function to fetch users from
            the external API
          </li>
          <li>
            Used this function in the server component (
            <code>app/users/page.tsx</code>) for initial data fetching
          </li>
          <li>
            Passed the fetched data to a client component for interactive
            features
          </li>
        </ol>
        <p className="mt-4">
          This approach allows us to benefit from server-side rendering while
          maintaining interactive client-side features, resulting in improved
          performance and SEO compared to the traditional route handler
          approach.
        </p>
      </section>
    </div>
  );
}

interface TechItemProps {
  name: string;
  description: string;
  imageSrc: string;
  link: string;
}

function TechItem({ name, description, imageSrc, link }: TechItemProps) {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-2 shadow-md rounded-md">
          <Image
            src={imageSrc}
            alt={`${name} logo`}
            fill
            className="object-contain p-2"
          />
        </div>

        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
