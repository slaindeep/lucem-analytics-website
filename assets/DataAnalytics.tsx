import React, { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import videoSource from "../../assets/video/optimized/analytics.mp4";
import ServiceHero from "../../components/ServiceHero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import useScrollToTop from "../../hooks/useScrollToTop";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 px-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

function DataAnalytics() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useScrollToTop();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  const faqData = [
    {
      question: "What types of data analytics services do you provide?",
      answer:
        "We offer comprehensive data analytics services including business intelligence solutions, predictive analytics, data visualization, automated reporting, process automation, and custom analytics solutions tailored to your business needs.",
    },
    {
      question: "How can data analytics benefit my business?",
      answer:
        "Data analytics can transform your business by uncovering valuable insights, optimizing operations, improving decision-making, identifying trends and patterns, predicting future outcomes, and automating routine processes for increased efficiency.",
    },
    {
      question: "What tools and technologies do you use?",
      answer:
        "We leverage industry-leading tools including Power BI, Tableau, Python, R, SQL, and various cloud platforms. Our expertise spans across multiple technologies to ensure we deliver the most effective solution for your specific needs.",
    },
    {
      question: "How long does it take to implement a data analytics solution?",
      answer:
        "Implementation timelines vary based on project scope and complexity. Simple dashboard solutions might take a few weeks, while comprehensive analytics platforms could take several months. We work closely with you to establish realistic timelines and milestones.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes, we provide comprehensive training to ensure your team can effectively use and maintain the analytics solutions we implement. This includes hands-on training sessions, documentation, and ongoing support as needed.",
    },
  ];

  // Common List Component
  const AnimatedList = ({ items }: { items: string[] }) => (
    <Box component="ul" sx={{ pl: 2, listStyleType: "none" }}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="mb-4 flex items-center text-gray-700"
        >
          <Box
            component="span"
            sx={{
              width: "8px",
              height: "8px",
              backgroundColor: "#8B5CF6",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "1rem",
            }}
          />
          <span className="text-base leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </Box>
  );

  // Common Section Header Component
  const SectionHeader = ({
    title,
    delay = 0,
  }: {
    title: string;
    delay?: number;
  }) => (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-2xl font-bold text-[#2D1B69] mt-8 mb-4"
    >
      {title}
    </motion.h3>
  );

  // Common CTA Button Component
  const CTAButton = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        <button
          onClick={() => navigate("/get-started")}
          className="group relative px-8 py-4 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium 
                    border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white
                    transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {text}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </motion.div>
    </Box>
  );

  return (
    <Box>
      <ServiceHero
        title="Transform Your Data into Actionable Insights"
        subtitle="Data Analytics Services"
        description="At Luminous Bluewaters Consultancy, we specialize in turning complex data into clear, actionable insights. Our expert team combines technical expertise with business acumen to deliver powerful analytics solutions that drive growth and efficiency."
        videoSource={videoSource}
      />

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Data analytics services tabs"
          >
            <Tab label="Business Intelligence" />
            <Tab label="Predictive Analytics" />
            <Tab label="Process Automation" />
            <Tab label="Data Visualization" />
            <Tab label="Custom Solutions" />
            <Tab label="Training & Support" />
          </Tabs>
        </Box>

        {/* Business Intelligence Tab */}
        <TabPanel value={value} index={0}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#2D1B69] mb-6"
          >
            Business Intelligence Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            Transform your raw data into meaningful insights with our
            comprehensive business intelligence solutions. We help you make
            data-driven decisions that drive growth and efficiency across your
            organization.
          </motion.p>

          <SectionHeader title="Our Services Include:" delay={0.4} />
          <AnimatedList
            items={[
              "Interactive dashboards and reports",
              "Real-time performance monitoring",
              "KPI tracking and analytics",
              "Data warehouse design and implementation",
              "Custom metrics and reporting solutions",
            ]}
          />
        </TabPanel>

        {/* Predictive Analytics Tab */}
        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>
            Predictive Analytics
          </Typography>

          <Typography paragraph>
            Leverage advanced analytics to forecast trends and make proactive
            decisions. Our predictive models help you stay ahead of the curve
            and optimize your business strategies.
          </Typography>

          <SectionHeader title="Key Capabilities:" delay={0.3} />
          <AnimatedList
            items={[
              "Demand forecasting and planning",
              "Risk analysis and management",
              "Customer behavior prediction",
              "Market trend analysis",
              "Optimization modeling",
            ]}
          />

          <CTAButton text="Explore Predictive Analytics" delay={1.0} />
        </TabPanel>

        {/* Process Automation Tab */}
        <TabPanel value={value} index={2}>
          <Typography variant="h4" gutterBottom>
            Process Automation
          </Typography>

          <Typography paragraph>
            Streamline your operations and reduce manual effort with our
            intelligent process automation solutions.
          </Typography>

          <SectionHeader title="Automation Solutions:" delay={0.3} />
          <AnimatedList
            items={[
              "Workflow automation",
              "Report generation and distribution",
              "Data collection and processing",
              "System integration",
              "Custom automation scripts",
            ]}
          />

          <CTAButton text="Automate Your Processes" delay={1.0} />
        </TabPanel>

        {/* Data Visualization Tab */}
        <TabPanel value={value} index={3}>
          <Typography variant="h4" gutterBottom>
            Data Visualization Services
          </Typography>

          <Typography paragraph>
            Transform complex data into clear, compelling visualizations that
            tell your story and drive action.
          </Typography>

          <SectionHeader title="Visualization Options:" delay={0.3} />
          <AnimatedList
            items={[
              "Interactive dashboards",
              "Custom charts and graphs",
              "Real-time data visualization",
              "Geographic mapping",
              "Executive reporting solutions",
            ]}
          />

          <CTAButton text="Visualize Your Data" delay={1.0} />
        </TabPanel>

        {/* Custom Solutions Tab */}
        <TabPanel value={value} index={4}>
          <Typography variant="h4" gutterBottom>
            Custom Analytics Solutions
          </Typography>

          <Typography paragraph>
            We develop tailored analytics solutions that address your unique
            business challenges and requirements.
          </Typography>

          <SectionHeader title="Our Approach:" delay={0.3} />
          <AnimatedList
            items={[
              "Requirements analysis and planning",
              "Custom solution development",
              "Integration with existing systems",
              "Performance optimization",
              "Ongoing maintenance and support",
            ]}
          />

          <CTAButton text="Get Custom Solutions" delay={1.0} />
        </TabPanel>

        {/* Training & Support Tab */}
        <TabPanel value={value} index={5}>
          <Typography variant="h4" gutterBottom>
            Training and Support Services
          </Typography>

          <Typography paragraph>
            Empower your team with the knowledge and skills needed to leverage
            your analytics solutions effectively.
          </Typography>

          <SectionHeader title="Services Include:" delay={0.3} />
          <AnimatedList
            items={[
              "User training programs",
              "Technical documentation",
              "Ongoing support and maintenance",
              "Knowledge transfer sessions",
              "Best practices guidance",
            ]}
          />

          <CTAButton text="Learn About Training" delay={1.0} />
        </TabPanel>

        {/* Ready to Transform Section */}
        <div className="text-center mt-16 mb-16">
          <h2 className="text-3xl font-bold text-[#2D1B69] mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <button
            onClick={() => navigate("/get-started")}
            className="group relative px-8 py-4 rounded-full bg-[#C4B5FD] text-[#2D1B69] font-medium 
                    hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 
                    transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Analytics Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* FAQ Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-lg">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </Container>
    </Box>
  );
}

export default DataAnalytics;
