import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  Users,
  Building,
  ArrowLeft,
  CheckCircle,
  Upload,
  FileText,
  User
} from 'lucide-react';

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-2 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PredictValve</span>
          </div>
          
          <a 
            href="/"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-white/10">
            Request Demo
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PredictValve Demo
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the future of TAVI valve durability prediction
        </motion.p>
      </motion.div>
    </section>
  );
}

// Demo Form Section
function DemoFormSection() {
  const [formData, setFormData] = useState({
    cardiacReport: null,
    patientData: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      navigate('/patient-analysis'); // Navigate to PatientAnalysis page
    }, 2000);
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [field]: file
      });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Demo Request Submitted!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for your interest in PredictValve. Our team will contact you within 24 hours to schedule your personalized demo.
              {formData.cardiacReport || formData.patientData ? ' We have received your uploaded documents and will review them before the demo.' : ''}
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">What to Expect:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Scheduling within 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Personalized demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">30-45 minute session</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Request Your Demo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience PredictValve's AI-powered valve durability prediction firsthand. 
            Our team will walk you through the technology and answer all your questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Section - Now the main focus */}
          <motion.div 
            className="lg:col-span-2 backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Upload Supporting Documents</h3>
                <p className="text-gray-300">Please upload the required documents for your PredictValve demo</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Cardiac Report Upload */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-white text-center">Preoperative Cardiac Report (PDF)</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'cardiacReport')}
                      className="hidden"
                      id="cardiac-report-upload"
                    />
                    <label
                      htmlFor="cardiac-report-upload"
                      className="flex flex-col items-center justify-center gap-4 w-full px-8 py-12 bg-white/10 border-2 border-dashed border-white/20 rounded-xl text-white hover:border-purple-400 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    >
                      <FileText className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-center">
                        {formData.cardiacReport ? formData.cardiacReport.name : 'Choose PDF file or drag and drop'}
                      </span>
                      <Upload className="h-6 w-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </label>
                    {formData.cardiacReport && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span>{formData.cardiacReport.name} uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Patient Data Upload */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-white text-center">Upload Patient Data and History</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                      onChange={(e) => handleFileUpload(e, 'patientData')}
                      className="hidden"
                      id="patient-data-upload"
                    />
                    <label
                      htmlFor="patient-data-upload"
                      className="flex flex-col items-center justify-center gap-4 w-full px-8 py-12 bg-white/10 border-2 border-dashed border-white/20 rounded-xl text-white hover:border-blue-400 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    >
                      <User className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-center">
                        {formData.patientData ? formData.patientData.name : 'Choose file or drag and drop'}
                      </span>
                      <Upload className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </label>
                    {formData.patientData && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span>{formData.patientData.name} uploaded</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    Accepted formats: PDF, DOC, DOCX, XLS, XLSX, CSV
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Documents'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
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
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
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

function PredictValve() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <DemoFormSection />
      <Footer />
    </div>
  );
}

export default PredictValve; 