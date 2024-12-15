import { StyleType } from "@/app/components/style-list/style";
import { NextResponse } from "next/server";

export async function GET() {
  // Mock product data (replace this with actual data fetching logic)
  const products: StyleType[] = [
    { id: 1, title: "Casual" },
    { id: 2, title: "Formal" },
    { id: 3, title: "Party" },
    { id: 4, title: "Gym" },
  ];

  return NextResponse.json(products);
}
