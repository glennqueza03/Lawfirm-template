import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Consultation from '@/models/Consultation';

export async function GET() {
  try {
    await connectDB();
    const consultations = await Consultation.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(consultations);
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consultations' },
      { status: 500 }
    );
  }
} 