import productService from "@/service/product/product.service";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Shop",
  description: "This e-commerce is being made by me",
}

export default async function Home() {
  const response = await productService.getAllProducts();
  if(!response) {
    return "Request error"
  }
  const { products } = response;
  return (
    <div>
      <h2>All products</h2>
      <br/>
      <div>
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <br/>
          </Link>
        ))}
      </div>
    </div>
  )
}
