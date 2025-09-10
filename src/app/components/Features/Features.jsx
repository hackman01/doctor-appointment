import { Stethoscope, Clock, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = ({ darkMode }) => {
  const features = [
    { 
      icon: Stethoscope, 
      title: "Expert Doctors", 
      description: "Board-certified physicians with years of experience" 
    },
    { 
      icon: Clock, 
      title: "Quick Booking", 
      description: "Book appointments instantly online 24/7" 
    },
    { 
      icon: Shield, 
      title: "Safe & Secure", 
      description: "Your health data is protected with top-level security" 
    },
    { 
      icon: Award, 
      title: "Award Winning", 
      description: "Recognized for excellence in patient care" 
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose MediCare Plus?</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            We provide comprehensive healthcare services with cutting-edge technology and experienced professionals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'}`}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
