import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  // Replace this with your actual data fetching logic
  const productImage = `/style-image/${id}.png`;

  return NextResponse.json({ imageUrl: productImage });
}
