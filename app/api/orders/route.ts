import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = '7717939554:AAGTywwmtfeS2LY9h7x7A327TTuWsn4tv2A'
const TELEGRAM_CHAT_ID = '6078665585'

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Generate unique order ID
    const orderId = `JS${Date.now().toString().slice(-6)}`
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })

    // Format message for Telegram
    const message = `🆕 New Jersey Order
-------------------
Order ID: ${orderId}
Name: ${orderData.customer.name}
Phone: ${orderData.customer.phone}
Address: ${orderData.customer.address}

Product: ${orderData.product.name}
Category: ${orderData.product.category}
Price: ৳${orderData.product.price.toLocaleString()}

Payment: Cash on Delivery
Time: ${timestamp}`

    // Send to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send order to Telegram')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Order placed successfully',
      orderId 
    })

  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    )
  }
}