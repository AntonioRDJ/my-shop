import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My-Shop",
  description: "This e-commerce is being made by me",
}

export default function Page() {
  return (
    <div>
      <p>Product page</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}
