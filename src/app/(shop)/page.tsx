import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Shop",
  description: "This e-commerce is being made by me",
}

export default async function Home() {
  // const [repo, user] = await Promise.all([getRepo(), getUser()]);
  return (
    <div>
      <h2>All products</h2>
      <p>my shop home</p>
      {/* <h1>Repo name {repo.full_name}</h1>
      <h1>User name {user.name}</h1> */}
      <Link href="/product/123">Go to Product</Link>
    </div>
  )
}
