interface OrderItem {
  id: string
  title: string
  price: number
  size: string
  quantity: number
}

interface CustomerInfo {
  name: string
  phone: string
  address: string
  city?: string
}

interface OrderData {
  customerInfo: CustomerInfo
  items: OrderItem[]
  total: number
}

export async function sendOrderToTelegram(orderData: OrderData): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('Telegram configuration missing')
    return false
  }

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

  // Format message
  const itemsList = orderData.items
    .map(item => `  - ${item.quantity} x ${item.title} (${item.size}) — ৳${(item.price * item.quantity).toLocaleString()}`)
    .join('\n')

  const message = `🆕 New Jersey Order
-------------------
Order ID: ${orderId}
Name: ${orderData.customerInfo.name}
Phone: ${orderData.customerInfo.phone}
Address: ${orderData.customerInfo.address}${orderData.customerInfo.city ? `\nCity: ${orderData.customerInfo.city}` : ''}
Items:
${itemsList}
Total: ৳${orderData.total.toLocaleString()}
Time: ${timestamp}`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending message to Telegram:', error)
    return false
  }
}