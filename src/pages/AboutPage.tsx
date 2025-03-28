import React from 'react';
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import { Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">about.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-6">
              Hey there, I'm <Highlight>Frances</Highlight>—a psychiatric nurse with over 10 years of experience
              working in mental health care facilities throughout Minnesota.
            </p>
            
            <p className="mb-4">
              My journey began when my cousin was diagnosed with schizophrenia in his early twenties. 
              Watching him navigate the mental healthcare system showed me how 
              <Highlight> people deserve better</Highlight> than the minimal standard of care most places provide.
            </p>
            
            <p className="mb-4">
              Year after year, I saw firsthand how most residential care facilities 
              focus on medication management and basic needs, but rarely create a true sense of belonging 
              or family. I watched how residents were treated as patients rather than people.
            </p>
            
            <p className="mb-6">
              When I visited my cousin in various homes, I remember thinking: 
              <span className="italic block border-l-2 border-primary pl-4 mt-2 mb-2">
                "If my cousin lived here, would I feel good about it? The answer for most places was no."
              </span>
            </p>
            
            <p className="mb-4">
              I wanted to create a place where people feel <Highlight>valued as individuals</Highlight>, 
              where their cultural backgrounds and preferences are honored, and where they can truly 
              call it home.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Caring for residents" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-primary/10 p-6 rounded-sm">
              <h2 className="font-serif text-2xl mb-3">My Vision</h2>
              <p className="mb-3">
                I wanted to create places that weren't just about clinical care, but about truly living.
                Where we celebrate birthdays and holidays together. Where we cook meals from different
                cultures. Where we go on outings regularly.
              </p>
              <p>
                A place that feels like <Highlight>home</Highlight>, not a facility.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="font-serif text-3xl mb-6">Creating Belong</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">2018</h3>
              <p>Started planning Belong Health Care after 10 years as a psychiatric nurse</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">2019</h3>
              <p>Opened Aspen Grove House, our first home for adults 18+</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">2021</h3>
              <p>Opened Willow Stream Residence, our home for adults 55+</p>
            </div>
          </div>
          
          <p className="text-lg">
            Today, Belong Health Care operates two beautiful homes in Brooklyn Park, Minnesota, 
            where residents receive personalized care in a warm, family-like environment. 
            We've created a place where people with mental health conditions truly belong.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;