import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus, useGLTF } from '@react-three/drei';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Building, 
  Factory,
  ArrowRight,
  Mail,
  Download,
  Menu,
  X
} from 'lucide-react';

// GLB Heart Model Component
function GLBHeart() {
  try {
    const gltf = useGLTF('/models/heart-model.glb');
    console.log('GLB loaded successfully:', gltf);
    return (
      <primitive 
        object={gltf.scene} 
        scale={[0.4, 0.4, 0.4]} 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]}
      />
    );
  } catch (error) {
    console.log('GLB failed to load, using fallback:', error);
    return <SimpleHeart />;
  }
}

// Simple Heart Model Component (Working Version)
function SimpleHeart() {
  return (
    <group>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} />
      </Sphere>
      <Box args={[0.1, 0.5, 0.3]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
      <Box args={[0.1, 0.5, 0.3]} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
      <Box args={[0.5, 0.1, 0.3]} position={[0.3, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
      <Box args={[0.5, 0.1, 0.3]} position={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
    </group>
  );
}

// Animated Data Flow Particles
function DataParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 0.5) * 10,
  }));

  return (
    <group>
      {particles.map((particle) => (
        <Sphere key={particle.id} args={[0.02, 8, 8]} position={[particle.x, particle.y, particle.z]}>
          <meshStandardMaterial color="#10b981" />
        </Sphere>
      ))}
    </group>
  );
}

// Navigation Component
function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-xl font-bold text-gray-900">PredictValve</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-700 hover:text-blue-600 transition-colors">Problem</a>
            <a href="#solution" className="text-gray-700 hover:text-blue-600 transition-colors">Solution</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#problem" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Problem</a>
            <a href="#solution" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Solution</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Impact</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={0.5} />
          <GLBHeart />
          <DataParticles />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ y, opacity }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PredictValve
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-Powered Valve Durability Prediction for TAVI Patients
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
            Request Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
            Explore How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            TAVI procedures lack reliable long-term durability prediction. Current follow-up methods offer no real-time insight into valve longevity or reintervention risk.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Limited Visibility</h3>
            <p className="text-gray-600">No real-time monitoring of valve performance and degradation patterns.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Risk Uncertainty</h3>
            <p className="text-gray-600">Unpredictable reintervention timing leads to emergency procedures.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost Inefficiency</h3>
            <p className="text-gray-600">Reactive care models increase healthcare costs and patient burden.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <section id="solution" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Introducing PredictValve</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            PredictValve leverages multimodal deep learning to forecast in-vivo durability of implanted heart valves using patient imaging, hemodynamic data, and clinical history.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Predicts Valve Lifetime</h3>
            <p className="text-gray-600">Accurate year-based durability forecasting</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Activity className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Early Risk Detection</h3>
            <p className="text-gray-600">Identifies degeneration before symptoms</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Predictive Warranties</h3>
            <p className="text-gray-600">Enables data-driven warranty models</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalized Curves</h3>
            <p className="text-gray-600">Individual valve health trajectories</p>
          </div>
        </motion.div>

        {/* AI Pipeline Visualization */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">AI Pipeline</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: '📊', title: 'Data Ingestion', desc: 'CT, Echo, Clinical' },
              { icon: '🔍', title: 'Feature Extraction', desc: 'U-Net, Calcification' },
              { icon: '🧠', title: 'Time-Series Modeling', desc: 'LSTM/Transformer' },
              { icon: '📈', title: 'Survival Analysis', desc: 'DeepSurv/Cox-Time' },
              { icon: '💡', title: 'Explainability', desc: 'SHAP + Grad-CAM' }
            ].map((stage, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-2">{stage.icon}</div>
                <h4 className="font-semibold mb-1">{stage.title}</h4>
                <p className="text-sm text-gray-600">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our advanced AI pipeline processes multimodal data to deliver accurate predictions
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Data Ingestion",
              description: "Comprehensive collection of CT scans, echocardiograms, and clinical patient data",
              details: "CT, Echo, Clinical"
            },
            {
              step: "02", 
              title: "Feature Extraction",
              description: "Advanced U-Net architecture extracts calcification patterns and structural features",
              details: "U-Net, calcification modeling"
            },
            {
              step: "03",
              title: "Time-Series Modeling", 
              description: "LSTM and Transformer networks analyze temporal patterns in valve performance",
              details: "LSTM/Transformer"
            },
            {
              step: "04",
              title: "Survival Analysis",
              description: "DeepSurv and Cox-Time models predict valve lifetime and failure risk",
              details: "DeepSurv/Cox-Time"
            },
            {
              step: "05",
              title: "Explainability",
              description: "SHAP and Grad-CAM provide interpretable insights for clinical decision-making",
              details: "SHAP + Grad-CAM"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Impact Section
function ImpactSection() {
  const [activeTab, setActiveTab] = useState('patients');

  const tabs = [
    { id: 'patients', label: 'For Patients', icon: Users },
    { id: 'hospitals', label: 'For Hospitals', icon: Building },
    { id: 'manufacturers', label: 'For Manufacturers', icon: Factory }
  ];

  const impactData = {
    patients: {
      title: "Reduced Risk, Better Outcomes",
      benefits: [
        "Early detection of valve degeneration",
        "Personalized follow-up schedules",
        "Reduced emergency reinterventions",
        "Improved long-term quality of life"
      ]
    },
    hospitals: {
      title: "Smarter Post-Op Planning",
      benefits: [
        "Optimized resource allocation",
        "Predictive patient management",
        "Reduced readmission rates",
        "Enhanced clinical decision support"
      ]
    },
    manufacturers: {
      title: "Predictive Warranties & Surveillance",
      benefits: [
        "Data-driven warranty models",
        "Proactive device monitoring",
        "Improved product development",
        "Enhanced regulatory compliance"
      ]
    }
  };

  return (
    <section id="impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transformative benefits across the healthcare ecosystem
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-4 text-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div 
            className="p-8"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">{impactData[activeTab].title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {impactData[activeTab].benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "PredictValve has revolutionized our approach to TAVI follow-up. The predictive insights have significantly improved our patient outcomes.",
      author: "Dr. Sarah Chen",
      title: "Cardiovascular Surgeon",
      institution: "Mayo Clinic"
    },
    {
      quote: "The AI-driven durability predictions have enabled us to implement proactive care models that reduce emergency interventions by 40%.",
      author: "Dr. Michael Rodriguez",
      title: "Interventional Cardiologist", 
      institution: "Cleveland Clinic"
    },
    {
      quote: "This technology represents the future of cardiac device monitoring. The explainable AI provides the confidence we need for clinical decisions.",
      author: "Dr. Emily Watson",
      title: "Cardiac Imaging Specialist",
      institution: "Johns Hopkins"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Validation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Trusted by leading healthcare institutions worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.title}</p>
                <p className="text-blue-600 font-medium">{testimonial.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Call to Action Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch with Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to transform your TAVI outcomes? Let's discuss how PredictValve can benefit your institution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Download Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-xl font-bold">PredictValve</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-Powered Valve Durability Prediction for TAVI Patients
            </p>
            <p className="text-sm text-gray-500">
              NuvoAI Innovation Challenge 2025 Submission
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PredictValve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
