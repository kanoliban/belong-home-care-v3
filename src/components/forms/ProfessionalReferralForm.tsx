/**
 * ProfessionalReferralForm.tsx
 * Created: 2025-03-20
 * Description: Form component for professionals to refer clients to Belong homes
 */
import React, { useState } from 'react';
import { User, Mail, Phone, FileText, Briefcase, Users } from 'lucide-react';

const ProfessionalReferralForm: React.FC = () => {
  const [formData, setFormData] = useState({
    professionalName: '',
    organization: '',
    title: '',
    email: '',
    phone: '',
    clientName: '',
    clientAge: '',
    clientDiagnosis: '',
    clientNeeds: '',
    preferredLocation: '',
    urgency: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Professional referral form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="font-medium text-gray-700 mb-2">Professional Information</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="professionalName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <User size={16} className="mr-2 text-primary" />
            Your Name
          </label>
          <input
            type="text"
            id="professionalName"
            name="professionalName"
            value={formData.professionalName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Briefcase size={16} className="mr-2 text-primary" />
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title/Role
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Mail size={16} className="mr-2 text-primary" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Phone size={16} className="mr-2 text-primary" />
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      
      <hr className="my-4" />
      
      <h4 className="font-medium text-gray-700 mb-2">Client Information</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Users size={16} className="mr-2 text-primary" />
            Client Name
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="clientAge" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            type="number"
            id="clientAge"
            name="clientAge"
            value={formData.clientAge}
            onChange={handleChange}
            required
            min="18"
            max="120"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Location
          </label>
          <select
            id="preferredLocation"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="">Select a home</option>
            <option value="aspen">Aspen Grove House (18+)</option>
            <option value="willow">Willow Stream Residence (55+)</option>
            <option value="either">No preference</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="clientDiagnosis" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <FileText size={16} className="mr-2 text-primary" />
          Primary Diagnosis
        </label>
        <input
          type="text"
          id="clientDiagnosis"
          name="clientDiagnosis"
          value={formData.clientDiagnosis}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      
      <div>
        <label htmlFor="clientNeeds" className="block text-sm font-medium text-gray-700 mb-1">
          Specific Support Needs
        </label>
        <textarea
          id="clientNeeds"
          name="clientNeeds"
          value={formData.clientNeeds}
          onChange={handleChange}
          rows={3}
          required
          placeholder="Please describe any specific support needs or accommodations required."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
          Urgency Level
        </label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        >
          <option value="">Select urgency level</option>
          <option value="immediate">Immediate (within 1 week)</option>
          <option value="urgent">Urgent (within 1 month)</option>
          <option value="planning">Planning (within 3 months)</option>
          <option value="future">Future consideration</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows={3}
          placeholder="Please share any additional information that would help us better understand this client's needs."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
    </form>
  );
};

export default ProfessionalReferralForm;
