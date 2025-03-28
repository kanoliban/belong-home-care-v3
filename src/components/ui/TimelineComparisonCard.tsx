/**
 * TimelineComparisonCard.tsx
 * Created: 2025-03-20
 * Description: A timeline comparison card that shows the difference between life alone and life at Belong
 * Updated: 2025-03-21 - Highlighted "Belong" in branded orange color
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimelineEvent {
  time: string;
  aloneDescription: string;
  belongDescription: string;
}

interface TimelineComparisonCardProps {
  title: string;
  events: TimelineEvent[];
  className?: string;
}

const TimelineComparisonCard: React.FC<TimelineComparisonCardProps> = ({
  title,
  events,
  className = ''
}) => {
  return (
    <motion.div 
      className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm p-5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <Clock size={20} className="text-primary mr-2" />
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4">
        <div className="md:col-span-1 font-medium text-sm text-gray-500 hidden md:block">
          Time
        </div>
        <div className="md:col-span-5 font-medium text-sm text-gray-500 border-b pb-2 md:border-b-0 md:pb-0">
          Life Alone
        </div>
        <div className="md:col-span-5 font-medium text-sm text-gray-500 border-b pb-2 md:border-b-0 md:pb-0">
          Life at <span className="text-primary">Belong</span>
        </div>
        
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="md:col-span-1 font-medium text-sm flex md:block items-center">
              <span className="md:hidden mr-2 font-medium text-gray-500">Time:</span>
              {event.time}
            </div>
            <div className="md:col-span-5 bg-gray-100 p-3 rounded-md">
              <span className="md:hidden font-medium text-sm text-gray-500 block mb-1">Life Alone:</span>
              {event.aloneDescription}
            </div>
            <div className="md:col-span-5 bg-primary/10 p-3 rounded-md">
              <span className="md:hidden font-medium text-sm text-gray-500 block mb-1">Life at <span className="text-primary">Belong</span>:</span>
              {event.belongDescription}
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineComparisonCard;
