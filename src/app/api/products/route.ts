import { NextResponse } from "next/server";
import * as path from "path";
import * as fs from "fs/promises";

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  console.log("filepath ", filePath);
  
  const productsJson = await fs.readFile(filePath, "utf-8");
  const products = JSON.parse(productsJson);

  return NextResponse.json(products);
}