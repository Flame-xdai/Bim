import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function CODNotice() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: t('codOnly'),
      description: t('codMessage'),
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Delivery',
      description: 'Safe and secure delivery to your doorstep',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Processing',
      description: 'Orders processed within 24 hours',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}