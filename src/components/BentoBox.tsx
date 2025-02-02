import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BentoBoxProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const BentoBox: React.FC<BentoBoxProps> = ({
  title,
  description,
  icon: Icon,
  features = [],
  className = "",
  onClick,
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className={`rounded-3xl p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 
                 transition-all duration-300 flex flex-col gap-4 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
      {features.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      )}

      {children}
    </motion.div>
  );
};

export default BentoBox;
