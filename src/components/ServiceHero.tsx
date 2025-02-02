import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  videoSource: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  description,
  videoSource
}) => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSource}
      />
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium mb-4 block"
        >
          {subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
