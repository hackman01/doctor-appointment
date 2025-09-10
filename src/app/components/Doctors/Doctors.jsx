import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Doctors = ({ doctors, darkMode, onBookAppointment }) => {
  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Doctors</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Our team of experienced healthcare professionals is here to provide you with the best medical care.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {doctors.map((doctor) => (
            <div 
              key={doctor.id}
              className={`p-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} shadow-md`}
            >
              <img 
                src={doctor.photo}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{doctor.specialization}</p>
              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{doctor.experience}</p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold">{doctor.rating}</span>
              </div>
              <button 
                onClick={() => onBookAppointment(doctor.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-lg font-medium transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
