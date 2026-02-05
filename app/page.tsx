"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page is the base URL `/`.
// Immediately redirect to `/home/` so the main landing page is `/home`.
const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home/");
  }, [router]);

  // Optionally, you could return a small loading state here.
  return null;
};

export default Page;
