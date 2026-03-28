import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: 'network' | 'community';
  title: string;
  description: string;
  moduleId?: string;
  link?: string;
  linkText?: string;
}

export const FeatureCard = ({ icon, title, description, moduleId, link, linkText }: FeatureCardProps) => {
  const getIcon = () => {
    if (icon === 'network') {
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    }
    return (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  };

  return (
    <div className="p-8 bg-terminal-black-light border border-terminal-green-dim rounded-lg hover:border-terminal-green transition-all duration-300 group">
      <div className="text-terminal-green mb-4 group-hover:glow-green transition-all">
        {getIcon()}
      </div>

      <h2 className="text-white text-2xl font-bold mb-4 lowercase">{title}</h2>

      <p className="text-terminal-grey-light mb-6 leading-relaxed lowercase">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {moduleId && (
          <div className="text-xs font-mono text-terminal-grey lowercase">
            module_id: <span className="text-terminal-green">{moduleId}</span>
          </div>
        )}
        {link && (
          <Link
            to={link}
            className="text-terminal-green hover:glow-green text-sm font-bold flex items-center gap-2 transition-all lowercase"
          >
            {linkText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};
