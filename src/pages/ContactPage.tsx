import React from 'react';
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Users } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real implementation, this would send the data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">let's talk.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-lg mb-6">
              I'd love to hear from you! Whether you're interested in our available beds, have questions about our approach, 
              or want to schedule a visit, <Highlight>please reach out directly</Highlight>.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-sm mb-8">
              <h2 className="font-serif text-2xl mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p><Highlight className="font-semibold">(612) 555-7890</Highlight></p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p><Highlight className="font-semibold">frances@belonghealthcare.com</Highlight></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p>Monday - Friday: 9:00am - 5:00pm</p>
                    <p className="text-sm text-text/70">After-hours calls will be returned the next business day</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-start mb-2">
                  <MapPin size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-xl">Aspen Grove House (18+)</h3>
                </div>
                <p className="pl-7">1234 Maple Street</p>
                <p className="pl-7">Brooklyn Park, MN 55443</p>
              </div>
              
              <div>
                <div className="flex items-start mb-2">
                  <MapPin size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-xl">Willow Stream Residence (55+)</h3>
                </div>
                <p className="pl-7">5678 River Road</p>
                <p className="pl-7">Brooklyn Park, MN 55443</p>
                <p className="pl-7 mt-1 text-primary font-semibold">3 beds currently available</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-sm">
            <div className="flex items-center mb-4">
              <Users size={20} className="text-primary mr-2" />
              <h2 className="font-serif text-2xl">Send a Message</h2>
            </div>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 p-4 rounded-sm">
                <p className="text-green-800 font-medium mb-2">Thank you for your message!</p>
                <p className="text-green-700">
                  I'll get back to you as soon as possible, usually within 1-2 business days.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    {...register('phone')}
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    className={`w-full px-3 py-2 border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary`}
                    {...register('inquiryType', { required: 'Please select an inquiry type' })}
                  >
                    <option value="">Select an option</option>
                    <option value="Availability Information">Availability Information</option>
                    <option value="Schedule a Visit">Schedule a Visit</option>
                    <option value="Professional Referral">Professional Referral</option>
                    <option value="Employment Inquiry">Employment Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                  {errors.inquiryType && <p className="mt-1 text-sm text-red-500">{errors.inquiryType.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary`}
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Referrals & Quick Response</h2>
          <p className="mb-3">
            If you're a case manager or healthcare provider with an urgent referral, please call me directly 
            at <Highlight className="font-semibold">(612) 555-7890</Highlight> for the fastest response.
          </p>
          <p>
            I prioritize professional inquiries about our current availability and can quickly determine if 
            we might be a good fit for a potential resident. Our 55+ home currently has 3 beds available 
            and we're actively accepting referrals.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;