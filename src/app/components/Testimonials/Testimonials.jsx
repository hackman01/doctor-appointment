import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9
  })
};

const Testimonials = ({ testimonials = testimonialsData, currentTestimonial, setCurrentTestimonial, darkMode }) => {
  const [direction, setDirection] = useState(0);


  const navigateTestimonial = (newIndex) => {
    setDirection(newIndex > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(newIndex);
  };

  const goToPrevious = () => {
    const newIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    setDirection(-1);
    setCurrentTestimonial(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    setDirection(1);
    setCurrentTestimonial(newIndex);
  };

  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p 
            className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real stories from real patients who trust us with their health.
          </motion.p>
        </motion.div>

        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            
            <motion.button 
              onClick={goToPrevious}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md mr-4`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            
            <motion.div 
              className={`flex-1 p-8 rounded-xl lg:max-h-56 lg:min-h-56 text-center ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 }
                  }}
                  className="w-full"
                >
                  
                  <motion.div 
                    className="flex justify-center mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  
                  <motion.p 
                    className={`text-lg mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>

                  
                  <motion.div 
                    className="flex items-center justify-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div>
                      <motion.div 
                        className="font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {testimonials[currentTestimonial].name}
                      </motion.div>
                      <motion.div 
                        className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        Verified Patient
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

           
            <motion.button 
              onClick={goToNext}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md ml-4`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          
          <motion.div 
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => navigateTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-500' : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;