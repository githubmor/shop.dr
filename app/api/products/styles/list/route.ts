import { TagType } from '@/app/models';
import { NextResponse } from 'next/server';

export async function GET() {
  // Mock product data (replace this with actual data fetching logic)
  const products: TagType[] = [
    { id: 1, title: 'Casual' },
    { id: 2, title: 'Formal' },
    { id: 3, title: 'Party' },
    { id: 4, title: 'Gym' }
  ];

  return NextResponse.json(products);
}
