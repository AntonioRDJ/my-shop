import { CarouselHome } from "@/components/carouselHome/carouselHome";
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
  const biggestDiscountProducts = products.sort((a, b) => b.discountPercentage - a.discountPercentage).slice(0, 12);
  console.log("biggestDiscountProducts ", biggestDiscountProducts.length);
  
  return (
    <section>
      <header className="px-6">
        <h2 className="text-3xl text-zinc-900 font-bold mt-6 mb-4 text-center">Best Deals</h2>
        <CarouselHome slides={biggestDiscountProducts} />
      </header>
      <div></div>
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
    </section>
  )
}
