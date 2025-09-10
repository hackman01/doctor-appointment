import { motion } from "framer-motion";

const CTA = ({ darkMode, onBookAppointment }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className={`text-center p-12 rounded-3xl ${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-700' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards better health. Our expert doctors are ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookAppointment}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Call Us: (555) 123-4567
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
