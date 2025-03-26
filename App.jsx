import React, { useState } from 'react'
import CustomSpecForm from './components/CustomSpecForm'
import ROIResultsPanel from './components/ROIResultsPanel'
import LeadCaptureForm from './components/LeadCaptureForm'
import ThankYouPanel from './components/ThankYouPanel'

const App = () => {
  const [step, setStep] = useState(1)
  const [formValues, setFormValues] = useState({
    width: 200,
    length: 250,
    height: 60,
    location: 'Miami, FL',
    aircraftType: 'Commercial Wide-body'
  })

  const [results] = useState({
    lifetimeSavings: 5200000,
    annualEnergySavings: 224000,
    earlyRevenueOpportunity: 1350000,
    throughputImprovement: 7,
    squareFootage: 99000
  })

  const [leadInfo, setLeadInfo] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectTimeline: 'Within 12 months'
  })

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {step === 1 && (
        <CustomSpecForm
          formValues={formValues}
          onFormChange={(field, val) => setFormValues({ ...formValues, [field]: val })}
          onNext={() => setStep(2)}
          onBack={() => {}}
        />
      )}
      {step === 2 && (
        <ROIResultsPanel
          results={results}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <LeadCaptureForm
          leadInfo={leadInfo}
          onLeadChange={(field, val) => setLeadInfo({ ...leadInfo, [field]: val })}
          onBack={() => setStep(2)}
          onSubmit={() => setStep(4)}
        />
      )}
      {step === 4 && <ThankYouPanel onStartOver={() => setStep(1)} />}
    </div>
  )
}

export default App
