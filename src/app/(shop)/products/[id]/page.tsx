import { Button } from "@/components/button/button";
import productService from "@/service/product/product.service";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = parseInt(params.id);
  const product = await productService.getProductById(id);
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: `MyShop | ${product?.title ?? "Product Page"}`,
    openGraph: {
      images: [product?.thumbnail ?? "", ...previousImages],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await productService.getProductById(parseInt(params.id));
  if(!product) {
    return "Request Error"
  }

  return (
    <div>
      <p>Product page</p>
      <Link href="/">Go to Home</Link>
      <div>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
      </div>
      <Button>Test Button</Button>
      <Button className="w-20 h-20">Test Button</Button>
      <Button success>Test Button</Button>
      <Button size="sm">Test Button</Button>
      <Button size="xl">Test Button</Button>
    </div>
  )
}
