import { ProductType } from "@/app/components/product";
import { NextResponse } from "next/server";

export async function GET() {
  // Mock product data (replace this with actual data fetching logic)
  const products: ProductType[] = [
    { id: 1, title: "Product 1", price: 19.99, rate: 5 },
    { id: 2, title: "Product 2", price: 25.36, rate: 2.5, tax: 20 },
    { id: 3, title: "Product 3", price: 17.25, rate: 3 },
    { id: 4, title: "Product 4", price: 45.38, rate: 4.5, tax: 10 },
  ];

  return NextResponse.json(products);
}
