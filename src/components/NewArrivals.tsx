import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useTranslation } from '../hooks/useTranslation';
import { useApp } from '../context/AppContext';

export function NewArrivals() {
  const { t } = useTranslation();
  const { state } = useApp();

  const newJerseys = state.jerseys
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('newArrivals')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Discover the latest jersey collections from top teams around the world
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newJerseys.map((jersey, index) => (
            <ProductCard key={jersey.id} jersey={jersey} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}