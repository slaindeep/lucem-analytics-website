import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Brain,
  Cog,
  LineChart,
  Settings2,
  BookOpen,
  ArrowRight,
  LucideIcon
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  className?: string;
}

const services: Service[] = [
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into meaningful insights with interactive dashboards and real-time monitoring.',
    icon: BarChart3,
    features: ['Interactive Dashboards', 'KPI Tracking', 'Real-time Monitoring']
  },
  {
    title: 'Predictive Analytics',
    description: 'Leverage advanced analytics to forecast trends and make proactive decisions.',
    icon: Brain,
    features: ['Demand Forecasting', 'Risk Analysis', 'Market Trends']
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations and reduce manual effort with intelligent automation.',
    icon: Cog,
    features: ['Workflow Automation', 'Report Generation', 'System Integration']
  },
  {
    title: 'Data Visualization',
    description: 'Transform complex data into clear, compelling visualizations that tell your story.',
    icon: LineChart,
    features: ['Custom Charts', 'Real-time Visualization', 'Executive Reports']
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored analytics solutions that address your unique business challenges.',
    icon: Settings2,
    features: ['Custom Development', 'System Integration', 'Optimization']
  },
  {
    title: 'Training & Support',
    description: 'Empower your team with the knowledge and skills needed to leverage analytics effectively.',
    icon: BookOpen,
    features: ['User Training', 'Documentation', 'Ongoing Support']
  }
];

function DataAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/analytics.mp4"
        />
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            From Chaos to Clarity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Transform your data into actionable insights with our expert analytics solutions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium 
                     hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="relative min-h-screen px-4 py-20"
        style={{
          backgroundImage: 'url("/images/particlebackground.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white text-center mb-16"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalytics;