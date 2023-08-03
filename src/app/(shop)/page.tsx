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
  return (
    <section>
      <header>
        <CarouselHome slides={[{id: "slide 1"}, {id: "slide 2"}, {id: "slide 3"}, {id: "slide 4"}, {id: "slide 5"}, {id: "slide 6"}]} />
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
