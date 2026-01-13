import { NextResponse } from 'next/server';

// Example API Route
export async function GET() {
    return NextResponse.json({ message: 'Products API' });
}
