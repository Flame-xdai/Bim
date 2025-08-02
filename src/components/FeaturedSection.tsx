import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useTranslation } from '../hooks/useTranslation';
import { useApp } from '../context/AppContext';

export function FeaturedSection() {
  const { t } = useTranslation();
  const { state } = useApp();

  const featuredJerseys = state.jerseys.filter(jersey => jersey.featured).slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('featuredJerseys')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredJerseys.map((jersey, index) => (
            <ProductCard key={jersey.id} jersey={jersey} index={index} />
          ))}
        </div>

        {featuredJerseys.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">{t('loading')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}