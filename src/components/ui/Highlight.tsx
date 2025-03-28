import React, { ReactNode } from 'react';

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

const Highlight = ({ children, className = '' }: HighlightProps) => {
  return (
    <span className={`text-primary font-normal hover:underline transition-all ${className}`}>{children}</span>
  );
};

export default React.memo(Highlight);