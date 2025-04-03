
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { name: string; url: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="bg-grocery-secondary py-6 md:py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center">{title}</h1>
        
        <div className="flex flex-wrap items-center justify-center text-sm md:text-base">
          <Link to="/" className="flex items-center text-gray-600 hover:text-grocery-primary">
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>
          
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={16} className="mx-1 md:mx-2 text-gray-500" />
              <Link 
                to={crumb.url} 
                className={`${
                  index === breadcrumbs.length - 1 
                    ? 'text-grocery-primary pointer-events-none' 
                    : 'text-gray-600 hover:text-grocery-primary'
                }`}
              >
                {crumb.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
