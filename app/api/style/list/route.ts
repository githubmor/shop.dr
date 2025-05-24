import { styles } from '@/app/db';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(styles);
}
