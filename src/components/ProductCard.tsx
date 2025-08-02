import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { Jersey } from '../types';
import { useTranslation } from '../hooks/useTranslation';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  jersey: Jersey;
  index: number;
}

export function ProductCard({ jersey, index }: ProductCardProps) {
  const { t, language } = useTranslation();
  const { dispatch } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_TO_CART',
      payload: { jersey, size: jersey.sizes[0] }
    });
    toast.success(language === 'en' ? 'Added to cart!' : 'কার্টে যোগ হয়েছে!');
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={jersey.image}
          alt={language === 'en' ? jersey.name : jersey.nameBangla}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4" />
          </motion.button>
        </div>
        {jersey.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {language === 'en' ? 'Featured' : 'ফিচার্ড'}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
          {language === 'en' ? jersey.name : jersey.nameBangla}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-blue-600">
            ৳{jersey.price.toLocaleString()}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            jersey.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {jersey.inStock ? t('inStock') : t('outOfStock')}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {jersey.sizes.map((size) => (
              <span
                key={size}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {size}
              </span>
            ))}
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            disabled={!jersey.inStock}
            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag className="h-3 w-3" />
            <span>{t('addToCart')}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}