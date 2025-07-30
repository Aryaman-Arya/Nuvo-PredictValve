import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  User,
  FileText,
  Activity,
  Monitor,
  Camera,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Search,
  Download,
  Printer,
  MoreVertical,
  Eye,
  Edit,
  Save,
  TrendingUp,
  BarChart3,
  Target,
  Clock
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

// Patient Data Entry Section
function PatientDataEntry() {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    // Patient Profile
    studySubjectId: '30-07-2025-11-48-09-301',
    location: 'Clinique Pasteur',
    leadCase: 'Yes',
    trialSubject: 'No',
    xlNestedRegistry: 'No',
    riskCategory: 'High',
    stsPromRiskScore: '8.5%',
    randomized: 'No',
    randomizationDate: '',
    reasonNotRandomized: 'Patient preference',

    // Index Procedure
    deviceUsed: 'TAVI Valve',
    hospital: 'Clinique Pasteur',
    emergencySurgery30Days: 'No',
    emergencySurgeryDate: '',
    emergencySurgeryDetails: '',
    saeFormFilled: 'No',
    plannedSurgery30Days: 'No',
    plannedSurgeryDate: '',
    plannedSurgeryDetails: '',

    // ECG Evaluation
    ecgDate: '2024-11-14',
    ecgTime: '09:30',
    indexProcedureDate: '2024-11-15',
    ecgQuality: 'Good',
    conductionDisturbances: 'None',
    heartRate: '72 bpm',
    normalSinusRhythm: 'Yes',
    atrialFibrillation: 'No',

    // CT3 Imaging
    phase: 'Mid Systolic',
    typeOfAorticValve: 'Tricuspid',
    ifBicuspid: 'N/A',
    aorticAnnulusMinDiameter: '24.2 mm',
    aorticAnnulusMaxDiameter: '24.8 mm',
    aorticAnnulusAvgDiameter: '24.5 mm',
    aorticAnnulusAreaDerivedDiameter: '24.5 mm',
    aorticAnnulusPerimeterDerivedDiameter: '24.9 mm',
    aorticAnnulusArea: '473.3 mm²',

    // Post-Procedure Events
    eventType: 'None',
    eventDate: '',
    daysFromIndex: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sections = [
    { id: 'profile', title: 'Patient Profile (Baseline Visit)', icon: User },
    { id: 'procedure', title: 'Index Procedure', icon: Activity },
    { id: 'ecg', title: 'ECG Evaluation (Core Laboratory)', icon: Monitor },
    { id: 'ct3', title: 'CT3 Imaging', icon: Camera },
    { id: 'events', title: 'Post-Procedure Events', icon: AlertTriangle }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Study Subject ID</label>
                <input
                  type="text"
                  name="studySubjectId"
                  value={formData.studySubjectId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Lead Case?</label>
                <select
                  name="leadCase"
                  value={formData.leadCase}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Trial Subject?</label>
                <select
                  name="trialSubject"
                  value={formData.trialSubject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">XL Nested Registry?</label>
                <select
                  name="xlNestedRegistry"
                  value={formData.xlNestedRegistry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Risk Category</label>
                <select
                  name="riskCategory"
                  value={formData.riskCategory}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">STS-PROM Risk Score</label>
                <input
                  type="text"
                  name="stsPromRiskScore"
                  value={formData.stsPromRiskScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Randomized?</label>
                <select
                  name="randomized"
                  value={formData.randomized}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Randomization Date</label>
                <input
                  type="date"
                  name="randomizationDate"
                  value={formData.randomizationDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Reason if Not Randomized</label>
                <input
                  type="text"
                  name="reasonNotRandomized"
                  value={formData.reasonNotRandomized}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        );

      case 'procedure':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Device Used</label>
                <input
                  type="text"
                  name="deviceUsed"
                  value={formData.deviceUsed}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Hospital</label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Emergency Surgery Within 30 Days?</label>
                <select
                  name="emergencySurgery30Days"
                  value={formData.emergencySurgery30Days}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Date of Emergency Surgery</label>
                <input
                  type="date"
                  name="emergencySurgeryDate"
                  value={formData.emergencySurgeryDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Details of Emergency Surgery</label>
              <textarea
                name="emergencySurgeryDetails"
                value={formData.emergencySurgeryDetails}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">SAE Form Filled?</label>
                <select
                  name="saeFormFilled"
                  value={formData.saeFormFilled}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Planned Surgery Within 30 Days?</label>
                <select
                  name="plannedSurgery30Days"
                  value={formData.plannedSurgery30Days}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Date of Planned Surgery</label>
                <input
                  type="date"
                  name="plannedSurgeryDate"
                  value={formData.plannedSurgeryDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Details of Planned Surgery</label>
                <textarea
                  name="plannedSurgeryDetails"
                  value={formData.plannedSurgeryDetails}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        );

      case 'ecg':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">ECG Date</label>
                <input
                  type="date"
                  name="ecgDate"
                  value={formData.ecgDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">ECG Time</label>
                <input
                  type="time"
                  name="ecgTime"
                  value={formData.ecgTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Date of Index Procedure</label>
                <input
                  type="date"
                  name="indexProcedureDate"
                  value={formData.indexProcedureDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">ECG Quality</label>
                <select
                  name="ecgQuality"
                  value={formData.ecgQuality}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Conduction Disturbances / Arrhythmias</label>
                <input
                  type="text"
                  name="conductionDisturbances"
                  value={formData.conductionDisturbances}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Heart Rate</label>
                <input
                  type="text"
                  name="heartRate"
                  value={formData.heartRate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Normal Sinus Rhythm</label>
                <select
                  name="normalSinusRhythm"
                  value={formData.normalSinusRhythm}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Atrial Fibrillation</label>
                <select
                  name="atrialFibrillation"
                  value={formData.atrialFibrillation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'ct3':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Phase</label>
                <input
                  type="text"
                  name="phase"
                  value={formData.phase}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Type of Aortic Valve</label>
                <select
                  name="typeOfAorticValve"
                  value={formData.typeOfAorticValve}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="Tricuspid">Tricuspid</option>
                  <option value="Bicuspid">Bicuspid</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">If Bicuspid</label>
                <input
                  type="text"
                  name="ifBicuspid"
                  value={formData.ifBicuspid}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Minimum Diameter</label>
                <input
                  type="text"
                  name="aorticAnnulusMinDiameter"
                  value={formData.aorticAnnulusMinDiameter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Maximum Diameter</label>
                <input
                  type="text"
                  name="aorticAnnulusMaxDiameter"
                  value={formData.aorticAnnulusMaxDiameter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Average Diameter</label>
                <input
                  type="text"
                  name="aorticAnnulusAvgDiameter"
                  value={formData.aorticAnnulusAvgDiameter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Area-derived Diameter</label>
                <input
                  type="text"
                  name="aorticAnnulusAreaDerivedDiameter"
                  value={formData.aorticAnnulusAreaDerivedDiameter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Perimeter-derived Diameter</label>
                <input
                  type="text"
                  name="aorticAnnulusPerimeterDerivedDiameter"
                  value={formData.aorticAnnulusPerimeterDerivedDiameter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Aortic Annulus Area</label>
              <input
                type="text"
                name="aorticAnnulusArea"
                value={formData.aorticAnnulusArea}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
              />
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                >
                  <option value="None">None</option>
                  <option value="Death">Death</option>
                  <option value="Stroke">Stroke</option>
                  <option value="Myocardial Infarction">Myocardial Infarction</option>
                  <option value="Bleeding">Bleeding</option>
                  <option value="Infection">Infection</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Days from Index</label>
              <input
                type="number"
                name="daysFromIndex"
                value={formData.daysFromIndex}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-black p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Upload additional Data</h2>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Upload
        </button>
      </div>

      <div className="mb-6">
        <div className="bg-gray-800 p-4 rounded-md">
          <label className="block text-sm font-medium text-white mb-1">Patient ID</label>
          <input
            type="text"
            value="30-07-2025-11-48-09-301"
            readOnly
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Cross verify the values before proceeding</h3>
        <div className="flex items-center gap-2 text-purple-600">
          <AlertTriangle className="h-5 w-5" />
          <span className="text-sm font-medium">Mandatory check required</span>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeSection === section.id
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-white hover:text-gray-300'
                  }`}
              >
                <Icon className="h-4 w-4" />
                {/* <span className={`hidden sm:inline ${activeSection === section.id ? 'hover:text-blue' : 'text-white'}`}  >{section.title}</span> */}
                {section.title}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Content */}
      <div className="bg-gray-800 p-6 rounded-lg">
        {renderSection()}
      </div>
    </div>
  );
}

// Document Preview Section
function DocumentPreview({ setShowResults }) {
  return (
    <div className="flex-1 bg-black border-l border-gray-200">
      {/* Viewer Controls */}
      <div className="bg-gray-800 border-b border-gray-600 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-600 rounded">
              <Search className="h-4 w-4" />
            </button>
            <span className="text-sm text-white">110%</span>
            <span className="text-sm text-white">1 / 12</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-600 rounded">
              <Eye className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-gray-600 rounded">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-gray-600 rounded">
              <Printer className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-gray-600 rounded">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Document Content */}
      <div className="p-6">
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-purple-300 mb-2">Pre-procedure Cardiac Report</h1>
            <p className="text-white">Patient: G M (Male, 89 years)</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Report Details</h3>
              <div className="space-y-1 text-sm text-white">
                <p><span className="font-medium">Creation Date:</span> 14-11-2024</p>
                <p><span className="font-medium">Created By:</span> MERIL TAVI CORELAB (AP)</p>
                <p><span className="font-medium">Received Date:</span> 14-11-2024</p>
                <p><span className="font-medium">Reviewed Date:</span> -</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Physician Information</h3>
              <div className="space-y-1 text-sm text-white">
                <p><span className="font-medium">Physician:</span> Dr. Didier Tchetche</p>
                <p><span className="font-medium">Hospital:</span> Clinique Pasteur</p>
                <p><span className="font-medium">City:</span> Toulouse</p>
                <p><span className="font-medium">Country:</span> France</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Patient Information</h3>
              <div className="space-y-1 text-sm text-white">
                <p><span className="font-medium">Name:</span> G M</p>
                <p><span className="font-medium">Gender:</span> Male</p>
                <p><span className="font-medium">Year of Birth (Age):</span> 1935 (89)</p>
                <p><span className="font-medium">Height:</span> 1.76 m</p>
                <p><span className="font-medium">Weight:</span> 77 kg</p>
                <p><span className="font-medium">BMI:</span> 24.9</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Clinical Scores</h3>
              <div className="space-y-1 text-sm text-white">
                <p><span className="font-medium">NYHA:</span> -</p>
                <p><span className="font-medium">EuroSCORE II:</span> -</p>
                <p><span className="font-medium">STS Score:</span> -</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-white mb-4">Aortic Valve Measurements</h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-white">
              <div>
                <p className="font-medium">Aortic Annulus</p>
                <p>Perimeter: 78.4 mm</p>
                <p>Perimeter Derived Ø: 24.9 mm</p>
                <p>Area: 473.3 mm²</p>
                <p>Area Derived Ø: 24.5 mm</p>
                <p>LVOT Ø: 22.1 mm</p>
              </div>
              <div>
                <p className="font-medium">Ascending Aorta</p>
                <p>Ø: 36.8 mm</p>
                <p>Min: 36.0 mm</p>
                <p>Max: 37.6 mm</p>
                <p>Average: 36.8 mm</p>
              </div>
              <div>
                <p className="font-medium">Other Measurements</p>
                <p>STJ Ø: 28.7 mm</p>
                <p>RCA Height: 16.6 mm</p>
                <p>LCA Height: 17.0 mm</p>
                <p>Calcification: Severe</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setShowResults(true)}
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              <p className="text-sm font-medium">Generate Valve Report</p>
              {/* <p className="text-xs">All measurements have been extracted and verified</p> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Result Page Component
function ResultPage({ setShowResults }) {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => setShowResults(false)}
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Analysis
            </button>
            <h1 className="text-3xl font-bold text-white mb-2">Valve Durability Prediction Results</h1>
            <p className="text-gray-400">AI-powered analysis for patient G M (Male, 89 years)</p>
          </div>

          {/* Risk Summary Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-purple-400" />
                <h2 className="text-xl font-semibold text-white">Estimated Valve Lifetime</h2>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">8.2 years</div>
                <p className="text-gray-400 text-sm">Based on current valve condition and patient factors</p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-red-400" />
                <h2 className="text-xl font-semibold text-white">5-Year Reintervention Risk</h2>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">23%</div>
                <p className="text-gray-400 text-sm">Probability of requiring valve replacement</p>
              </div>
            </div>
          </div>

          {/* Valve Health Curve */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Valve Health Trajectory</h2>
            </div>
            <div className="h-64 bg-gray-900 rounded-lg p-4 flex items-end justify-between">
              {/* Simplified chart representation */}
              <div className="flex items-end gap-2 h-full">
                <div className="w-8 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                <div className="w-8 bg-green-400 rounded-t" style={{height: '75%'}}></div>
                <div className="w-8 bg-yellow-500 rounded-t" style={{height: '65%'}}></div>
                <div className="w-8 bg-yellow-400 rounded-t" style={{height: '55%'}}></div>
                <div className="w-8 bg-orange-500 rounded-t" style={{height: '45%'}}></div>
                <div className="w-8 bg-orange-400 rounded-t" style={{height: '35%'}}></div>
                <div className="w-8 bg-red-500 rounded-t" style={{height: '25%'}}></div>
                <div className="w-8 bg-red-400 rounded-t" style={{height: '15%'}}></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
              <span>Year 4</span>
              <span>Year 5</span>
              <span>Year 6</span>
              <span>Year 7</span>
              <span>Year 8</span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Projected valve degeneration trajectory showing gradual decline in valve function over time
            </p>
          </div>

          {/* Feature Attribution */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Feature Attribution Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-3">Oversizing Percentage</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Current Value:</span>
                  <span className="text-white font-medium">15.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-green-400 text-sm mt-2">Optimal range (10-20%)</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-3">Renal Function</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">eGFR:</span>
                  <span className="text-white font-medium">45 mL/min</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                <p className="text-yellow-400 text-sm mt-2">Moderate impairment</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-3">Leaflet Stiffness</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Stiffness Index:</span>
                  <span className="text-white font-medium">2.8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-red-400 text-sm mt-2">Above normal range</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientAnalysis() {
  const [showResults, setShowResults] = useState(false);

  if (showResults) {
    return <ResultPage setShowResults={setShowResults} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="flex h-screen pt-16">
        <PatientDataEntry setShowResults={setShowResults} />
        <DocumentPreview setShowResults={setShowResults} />
      </div>
    </div>
  );
}

export default PatientAnalysis; 
