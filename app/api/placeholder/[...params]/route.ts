import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ params: string[] }> }
) {
  const { params } = await context.params;
  const [width, height] = params;
  
  // Generate a simple placeholder SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
      <circle cx="50%" cy="40%" r="20%" fill="#d1d5db"/>
      <rect x="25%" y="65%" width="50%" height="8%" rx="4%" fill="#d1d5db"/>
      <rect x="35%" y="78%" width="30%" height="6%" rx="3%" fill="#d1d5db"/>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
