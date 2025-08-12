import { NextRequest, NextResponse } from 'next/server'
import { sendOrderToTelegram } from '@/lib/telegram'

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Validate required fields
    if (!orderData.customerInfo?.name || !orderData.customerInfo?.phone || !orderData.customerInfo?.address) {
      return NextResponse.json(
        { error: 'Missing required customer information' },
        { status: 400 }
      )
    }

    if (!orderData.items || orderData.items.length === 0) {
      return NextResponse.json(
        { error: 'No items in order' },
        { status: 400 }
      )
    }

    // Send order to Telegram
    const success = await sendOrderToTelegram(orderData)

    if (success) {
      return NextResponse.json({ success: true, message: 'Order placed successfully' })
    } else {
      return NextResponse.json(
        { error: 'Failed to process order' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}