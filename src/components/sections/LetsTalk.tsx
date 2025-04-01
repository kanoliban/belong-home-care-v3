import React from 'react';
import Highlight from '../ui/Highlight';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const LetsTalk = () => {
  const formMethods = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const { register, handleSubmit, formState: { errors }, reset } = formMethods;
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
    <div>
      <p className="mb-6">
        I'd love to hear from you! Whether you're interested in our available rooms, have questions about our approach, 
        or want to schedule a visit, <Highlight>please reach out directly</Highlight>.
      </p>
      
      <div className="bg-primary/10 p-4 rounded-sm mb-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center">
            <Phone size={18} className="text-primary mr-3" />
            <span className="font-medium block">Call Us Directly:</span>
            <span><Highlight className="font-semibold">(651) 705-6625</Highlight></span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="text-primary mr-3" />
            <span><Highlight className="font-semibold">frances@belonghealthcare.com</Highlight></span>
          </div>
          <div className="flex items-start">
            <MapPin size={18} className="text-primary mr-3 mt-1" />
            <div>
              <p><strong>Aspen Grove House (18+):</strong></p>
              <p>1234 Maple Street, Brooklyn Park, MN 55443</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin size={18} className="text-primary mr-3 mt-1 invisible" />
            <div>
              <p><strong>Willow Stream Residence (55+):</strong></p>
              <p>5678 River Road, Brooklyn Park, MN 55443</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">Send a Message</h3>
        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 p-4 rounded-sm">
            <p className="text-green-800">Thank you for your message! I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
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
                Email Address
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary`}
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
      
      <p>
        If you're a case manager interested in referring a client, please call me directly for the fastest response. 
        I'm happy to answer any questions about our services, approach, or availability.
      </p>
    </div>
  );
};

export default React.memo(LetsTalk);