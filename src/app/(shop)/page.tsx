import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Shop",
  description: "This e-commerce is being made by me",
}

type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
}

type User = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
}

async function getRepo(): Promise<Repo> {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  return await res.json();
}

async function getUser(): Promise<User> {
  const res = await fetch('https://api.github.com/users/antonioRDJ');
  return await res.json();
}

export default async function Home() {
  // const [repo, user] = await Promise.all([getRepo(), getUser()]);
  return (
    <div>
      <p>my shop home</p>
      {/* <h1>Repo name {repo.full_name}</h1>
      <h1>User name {user.name}</h1> */}
      <Link href="/product/123">Go to Product</Link>
    </div>
  )
}
