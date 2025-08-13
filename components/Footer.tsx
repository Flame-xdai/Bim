export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              JerseyStore
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted destination for authentic football jerseys. We provide premium quality jerseys 
              from top clubs worldwide with fast delivery across Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/8801952081184"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Featured Jerseys</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retro Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Club Jerseys</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📱 WhatsApp: +8801952081184</li>
              <li>📞 Phone: 01771902725</li>
              <li>📞 Phone: 01829067063</li>
              <li>🚚 Cash on Delivery Available</li>
              <li>⚡ Fast Delivery Nationwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JerseyStore. All rights reserved. | Authentic Jerseys • Trusted Service • Fast Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}