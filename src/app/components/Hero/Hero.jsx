import { Stethoscope, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode, onBookAppointment }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <motion.div 
        className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Your Health is Our
            <span className="text-blue-500"> Priority</span>
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Book appointments with top-rated doctors instantly. Get the best medical care with just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookAppointment}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </button>
            <button className={`px-8 py-4 rounded-lg cursor-pointer font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'} border`}>
              Learn More
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">500+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">50+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">24/7</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Support</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6`}></div>
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/2256672161/display_1500/stock-photo-smiling-multiracial-medical-team-discussing-over-clipboard-at-hospital-2256672161.jpg" 
            alt="Medical team"
            className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
          <div className={`absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold">98% Success Rate</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
