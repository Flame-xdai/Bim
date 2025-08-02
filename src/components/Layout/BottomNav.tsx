import React from 'react';
import { Home, ShoppingBag, User, Package } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export function BottomNav() {
  const { t } = useTranslation();
  const { state } = useApp();

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-6 w-6" />,
      label: t('home'),
      active: true,
    },
    {
      icon: (
        <div className="relative">
          <ShoppingBag className="h-6 w-6" />
          {state.cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {state.cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </div>
      ),
      label: t('cart'),
    },
    {
      icon: <Package className="h-6 w-6" />,
      label: t('orders'),
    },
    {
      icon: <User className="h-6 w-6" />,
      label: t('profile'),
    },
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-4 py-2">
        {navItems.map((item, index) => (
          <motion.button
            key={index}
            className={`flex flex-col items-center py-2 px-1 ${
              item.active
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}