import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Brain,
  Globe,
  Code,
  PenTool,
  Workflow,
  ChevronRight
} from 'lucide-react';
import BentoBox from '../components/BentoBox';

const services = [
  {
    title: 'Data Analytics Solutions',
    description: 'Transform your raw data into actionable insights with our comprehensive analytics services.',
    icon: BarChart3,
    features: ['Power BI Dashboards', 'Data Processing', 'Custom Analytics'],
    className: 'md:col-span-2 md:row-span-2',
    link: '/services/data-analytics'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage the power of AI to automate processes and make predictive decisions.',
    icon: Brain,
    features: ['Predictive Analytics', 'Process Automation', 'AI Integration'],
    link: '/services/ai'
  },
  {
    title: 'Web Development',
    description: 'Create stunning, responsive websites that drive results and engage users.',
    icon: Globe,
    features: ['Custom Websites', 'E-commerce', 'Web Apps'],
    link: '/services/web-development'
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    icon: Code,
    features: ['Custom Development', 'Integration', 'Maintenance'],
    link: '/services/custom-software'
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that convert visitors into customers.',
    icon: PenTool,
    features: ['User Research', 'Interface Design', 'Prototyping'],
    link: '/services/design'
  },
  {
    title: 'Business Automation',
    description: 'Streamline your operations with intelligent automation solutions.',
    icon: Workflow,
    features: ['Process Optimization', 'Workflow Automation', 'Integration'],
    link: '/services/automation'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-4 mb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            From data analytics to custom software development, we provide end-to-end solutions for your business
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <BentoBox
              key={index}
              {...service}
              onClick={() => window.location.href = service.link}
              className={`cursor-pointer group ${service.className || ''}`}
            >
              <motion.div 
                className="flex items-center gap-2 mt-4 text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </BentoBox>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Let's discuss how our services can help you achieve your goals
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-8 py-4 bg-primary rounded-full text-white font-medium hover:bg-primary/90 
                   transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
        >
          Contact Us <ChevronRight className="w-4 h-4" />
        </motion.button>
      </section>
    </div>
  );
};

export default Services;
