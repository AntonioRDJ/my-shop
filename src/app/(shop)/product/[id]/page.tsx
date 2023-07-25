import productService from "@/service/product/product.service";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {

  const id = params.id;
  const product = await productService.getProductById(id);
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: `MyShop | ${product?.title ?? "Product Page"}`,
    openGraph: {
      images: [product?.images?.small ?? "", ...previousImages],
    },
  }
}

export default function Page() {
  return (
    <div>
      <p>Product page</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}
