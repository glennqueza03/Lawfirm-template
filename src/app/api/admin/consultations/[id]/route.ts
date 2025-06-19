import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Consultation from '@/models/Consultation';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { status } = await request.json();

    await connectDB();
    const consultation = await Consultation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!consultation) {
      return NextResponse.json(
        { error: 'Consultation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(consultation);
  } catch (error) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { error: 'Failed to update consultation' },
      { status: 500 }
    );
  }
} 