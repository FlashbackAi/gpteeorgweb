import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title, subtitle, children, className = '' }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="terminal-dots">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
        </div>
        {title && (
          <div className="text-right">
            <div className="text-xs text-terminal-grey font-mono">{title}</div>
            {subtitle && (
              <div className="text-terminal-green font-mono font-bold">{subtitle}</div>
            )}
          </div>
        )}
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};
