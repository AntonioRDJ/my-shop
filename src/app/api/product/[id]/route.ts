import { NextResponse } from "next/server";
import * as path from "path";
import * as fs from "fs/promises";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const productsJson = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(productsJson);

  const product = products.find(p => p.id === params.id);

  if(!product) {
    return NextResponse.json({error: true, message: "Not found"});
  }

  return NextResponse.json(product);
}