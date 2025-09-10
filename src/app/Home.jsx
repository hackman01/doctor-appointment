"use client"
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Doctors from './components/Doctors/Doctors';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

// Mock data for doctors
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.9,
    experience: "15+ years",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    availableTimes: ["09:00", "10:30", "14:00", "15:30"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    rating: 4.8,
    experience: "12+ years",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    availableTimes: ["08:30", "11:00", "13:30", "16:00"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    rating: 4.9,
    experience: "10+ years",
    photo: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableTimes: ["09:30", "11:30", "14:30", "16:30"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic",
    rating: 4.7,
    experience: "18+ years",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
    availableTimes: ["08:00", "10:00", "13:00", "15:00"]
  }
];

// Mock testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Maria Garcia",
    rating: 5,
    text: "Excellent service! Dr. Johnson was very professional and the online booking system made everything so convenient.",
    avatar: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "John Smith",
    rating: 5,
    text: "Quick appointment scheduling and amazing care. The doctors here are top-notch!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    rating: 5,
    text: "Best medical experience I've had. The staff is friendly and the facility is modern.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: ''
  });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Appointment booked successfully! We will contact you soon.');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      date: '',
      time: ''
    });
    setShowModal(false);
    setModalStep(1);
  };

  // Handle modal steps
  const nextStep = () => {
    if (modalStep < 3) setModalStep(modalStep + 1);
  };

  const prevStep = () => {
    if (modalStep > 1) setModalStep(modalStep - 1);
  };

  const getAvailableTimes = () => {
    const doctor = doctorsData.find(d => d.id === parseInt(formData.doctor));
    return doctor ? doctor.availableTimes : [];
  };

  const handleBookAppointment = (doctorId = '') => {
    if (doctorId) {
      setFormData(prev => ({ ...prev, doctor: doctorId.toString() }));
    }
    setShowModal(true);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <Hero darkMode={darkMode} onBookAppointment={() => handleBookAppointment()} />

      <Features darkMode={darkMode} />

      <Doctors 
        doctors={doctorsData} 
        darkMode={darkMode} 
        onBookAppointment={handleBookAppointment} 
      />

      <Testimonials 
        testimonials={testimonialsData} 
        currentTestimonial={currentTestimonial} 
        setCurrentTestimonial={setCurrentTestimonial} 
        darkMode={darkMode} 
      />

      <CTA darkMode={darkMode} onBookAppointment={() => handleBookAppointment()} />

      <Footer darkMode={darkMode} />

      {/* Sticky CTA Button for Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-40">
        <button
          onClick={() => handleBookAppointment()}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <Calendar className="w-6 h-6" />
        </button>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalStep={modalStep}
        setModalStep={setModalStep}
        formData={formData}
        setFormData={setFormData}
        doctorsData={doctorsData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        getAvailableTimes={getAvailableTimes}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Home;