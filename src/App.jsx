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
  return <GLBLoader />;
}

// Separate GLB Loader Component
function GLBLoader() {
  try {
    const gltf = useGLTF('/models/heart-model.glb');
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PredictValve</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Solution</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">How It Works</a>
            <a href="#impact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Impact</a>
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = '/#contact'}
            >
              Request Demo
            </button>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#problem" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">Problem</a>
            <a href="#solution" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">Solution</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#impact" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">Impact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={0.5} />
          <SimpleHeart />
          <DataParticles />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Creative Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-sm font-medium">AI-Powered Healthcare Innovation</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PredictValve
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-Powered Valve Durability Prediction for TAVI Patients
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3">
            <span>Request Demo</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
            <span>Explore How It Works</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span>FDA Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <span>Clinical Validation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            <span>Leading Hospitals</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-300 text-sm font-medium">The Challenge</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">The Challenge</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
          <motion.div 
            className="group relative bg-gray-700/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Limited Visibility</h3>
              <p className="text-gray-300 leading-relaxed">No real-time monitoring of valve performance and degradation patterns.</p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-gray-700/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-600/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">Risk Uncertainty</h3>
              <p className="text-gray-300 leading-relaxed">Unpredictable reintervention timing leads to emergency procedures.</p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-gray-700/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Cost Inefficiency</h3>
              <p className="text-gray-300 leading-relaxed">Reactive care models increase healthcare costs and patient burden.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Introducing PredictValve</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Introducing PredictValve</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
          <motion.div 
            className="group text-center relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">Predicts Valve Lifetime</h3>
            <p className="text-gray-300 leading-relaxed">Accurate year-based durability forecasting</p>
          </motion.div>

          <motion.div 
            className="group text-center relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Activity className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">Early Risk Detection</h3>
            <p className="text-gray-300 leading-relaxed">Identifies degeneration before symptoms</p>
          </motion.div>

          <motion.div 
            className="group text-center relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">Predictive Warranties</h3>
            <p className="text-gray-300 leading-relaxed">Enables data-driven warranty models</p>
          </motion.div>

          <motion.div 
            className="group text-center relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">Personalized Curves</h3>
            <p className="text-gray-300 leading-relaxed">Individual valve health trajectories</p>
          </motion.div>
        </motion.div>

        {/* AI Pipeline Visualization */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-600/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-center mb-10 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Pipeline</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: 'Data', title: 'Data Ingestion', desc: 'CT, Echo, Clinical' },
              { icon: 'Extract', title: 'Feature Extraction', desc: 'U-Net, Calcification' },
              { icon: 'Model', title: 'Time-Series Modeling', desc: 'LSTM/Transformer' },
              { icon: 'Analyze', title: 'Survival Analysis', desc: 'DeepSurv/Cox-Time' },
              { icon: 'Explain', title: 'Explainability', desc: 'SHAP + Grad-CAM' }
            ].map((stage, index) => (
              <motion.div 
                key={index}
                className="group bg-gray-700/50 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">{stage.icon}</div>
                <h4 className="font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{stage.title}</h4>
                <p className="text-sm text-gray-300">{stage.desc}</p>
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
    <section id="how-it-works" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
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
              className="flex flex-col md:flex-row items-center gap-8 bg-gray-700 p-8 rounded-2xl shadow-lg"
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
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-2">{item.description}</p>
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
    <section id="impact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Impact</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transformative benefits across the healthcare ecosystem
          </p>
        </motion.div>

        <div className="bg-gray-700 rounded-3xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-600">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-4 text-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-900/20'
                      : 'text-gray-300 hover:text-gray-100 hover:bg-gray-600'
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
            <h3 className="text-2xl font-bold mb-6 text-white">{impactData[activeTab].title}</h3>
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
                  <p className="text-gray-300">{benefit}</p>
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
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Validation</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Trusted by leading healthcare institutions worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-700 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-300">{testimonial.title}</p>
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
    <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700">
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
          <p className="text-xl text-blue-200 mb-8">
            Ready to transform your TAVI outcomes? Let's discuss how PredictValve can benefit your institution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-100 text-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Schedule a Demo
            </button>
            <button className="border-2 border-gray-200 text-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 hover:text-blue-700 transition-colors flex items-center justify-center">
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
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-xl font-bold">PredictValve</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-Powered Valve Durability Prediction for TAVI Patients
            </p>
            <p className="text-sm text-gray-400">
              NuvoAI Innovation Challenge 2025 Submission
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 PredictValve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
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
