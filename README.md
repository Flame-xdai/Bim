# JerseyStore - E-commerce Platform

A complete e-commerce website for selling football jerseys, built with Next.js 14, Tailwind CSS, and Telegram integration for order management.

## Features

- **Modern E-commerce Experience**: Product catalog, shopping cart, checkout flow
- **Mobile-First Design**: Responsive design with bottom navigation for mobile
- **Telegram Integration**: Orders automatically sent to Telegram chat
- **Cash on Delivery**: Simple payment method for Bangladesh market
- **SEO Optimized**: Static generation, meta tags, structured data
- **Fast Performance**: Optimized images, lazy loading, efficient caching

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Data**: JSON file-based product catalog
- **Orders**: Telegram Bot API integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Telegram Bot Token and Chat ID

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jerseystore
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NEXT_PUBLIC_WHATSAPP_NUMBER=8801952081184
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Telegram Setup

### Creating a Telegram Bot

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Send `/newbot` and follow the instructions
3. Copy the bot token from the response
4. Add the token to your `.env.local` file

### Getting Your Chat ID

1. Start a chat with your bot
2. Send a message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find your chat ID in the response
5. Add the chat ID to your `.env.local` file

## Product Management

Products are stored in `/data/products.json`. Each product has:

```json
{
  "id": "unique-id",
  "title_en": "English Title",
  "title_bn": "বাংলা শিরোনাম",
  "slug": "url-friendly-slug",
  "price_bdt": 750,
  "images": ["image-url-1", "image-url-2"],
  "sizes": ["S", "M", "L", "XL"],
  "description_en": "English description",
  "description_bn": "বাংলা বিবরণ",
  "tags": ["Category", "Tag"],
  "available": true
}
```

### Adding New Products

1. Edit `/data/products.json`
2. Add your product object with all required fields
3. Use high-quality images (recommended: 500x600px)
4. Ensure the slug is unique and URL-friendly
5. Restart the development server

### Updating Product Images

1. Upload images to a CDN or use Unsplash URLs
2. Update the `images` array in the product object
3. First image is used as the main product image

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never expose your Telegram bot token** in client-side code
2. **Rotate your bot token** after initial setup using BotFather
3. **Set proper file permissions** on your server
4. **Use HTTPS** in production
5. **Validate all user inputs** before processing orders

## Customization

### Styling

- Edit Tailwind classes in components
- Modify `tailwind.config.js` for theme changes
- Update colors in the config file

### Layout

- Header: `/components/Header.tsx`
- Footer: Built into layout
- Bottom Navigation: `/components/BottomNav.tsx`
- Left Drawer: `/components/LeftDrawer.tsx`

### Categories

Update the categories in `/components/LeftDrawer.tsx`:

```typescript
const categories = [
  { name: 'Category Name', href: '/products?category=Category Name' },
  // Add more categories
]
```

## API Routes

- `POST /api/orders/create` - Creates new order and sends to Telegram

## Testing

### Order Flow Testing

1. Add products to cart
2. Go to checkout
3. Fill out the form
4. Submit order
5. Check your Telegram chat for the order message

### Local Testing with ngrok

If you need to test Telegram webhooks locally:

```bash
npm install -g ngrok
ngrok http 3000
```

Use the ngrok URL for webhook testing.

## Troubleshooting

### Common Issues

1. **Telegram messages not sending**
   - Check bot token and chat ID
   - Ensure bot has permission to send messages
   - Check server logs for API errors

2. **Images not loading**
   - Verify image URLs are accessible
   - Check Next.js image domains configuration
   - Ensure images are properly sized

3. **Build errors**
   - Check TypeScript errors
   - Verify all imports are correct
   - Ensure environment variables are set

### Support

For issues and questions:
1. Check the console for error messages
2. Verify environment variables
3. Test API endpoints manually
4. Check Telegram bot permissions

## License

This project is licensed under the MIT License.