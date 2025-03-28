/**
 * FamilyVisitForm.tsx
 * Created: 2025-03-20
 * Description: Form component for families to schedule a visit to Belong homes
 */
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Home } from 'lucide-react';

const FamilyVisitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    preferredLocation: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Family visit form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <User size={16} className="mr-2 text-primary" />
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Calendar size={16} className="mr-2 text-primary" />
            Preferred Visit Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <Clock size={16} className="mr-2 text-primary" />
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="evening">Evening (4pm - 7pm)</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <Home size={16} className="mr-2 text-primary" />
          Which home would you like to visit?
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
          <option value="both">Both homes</option>
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
          placeholder="Please share any specific questions or concerns you have about your visit."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
    </form>
  );
};

export default FamilyVisitForm;
