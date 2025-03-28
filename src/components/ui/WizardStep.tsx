/**
 * WizardStep.tsx
 * Created: 2025-03-19
 * Description: Component for individual steps in a multi-step wizard flow
 * Used within modal wizards for Case Manager referrals and Family Visit scheduling
 */
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WizardStepProps {
  title: string;
  description?: string;
  children: ReactNode;
  isActive: boolean;
}

const WizardStep = ({
  title,
  description,
  children,
  isActive
}: WizardStepProps) => {
  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="py-2"
    >
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      {description && <p className="text-text/70 mb-6">{description}</p>}
      
      <div className="wizard-step-content">
        {children}
      </div>
    </motion.div>
  );
};

export default WizardStep;
