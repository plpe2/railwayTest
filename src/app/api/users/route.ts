import { getConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT * FROM user_tbl');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
