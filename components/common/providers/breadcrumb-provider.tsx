"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react'; // IMPORT the Home icon
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

// --- Part 1: The Context for Communication (Unchanged) ---
type BreadcrumbContextType = {
  friendlyNames: Record<string, string>;
  setFriendlyName: (key: string, value: string) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [friendlyNames, setFriendlyNames] = useState<Record<string, string>>({});
  const setFriendlyName = (key: string, value: string) => {
    setFriendlyNames(prev => ({ ...prev, [key]: value }));
  };
  return (
    <BreadcrumbContext.Provider value={{ friendlyNames, setFriendlyName }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

// --- Part 2: The Independent Visual Component (Updated) ---
const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const { friendlyNames } = useBreadcrumb();
  const [maxVisibleSegments, setMaxVisibleSegments] = useState(2);

  useEffect(() => {
    const calculateMaxSegments = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      return 2;
    };
    setMaxVisibleSegments(calculateMaxSegments());
    const handleResize = () => setMaxVisibleSegments(calculateMaxSegments());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const segments = pathname.split('/').filter(Boolean);
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const renderSegment = (segment: string, index: number, isLast: boolean, allSegments: string[]) => {
    const href = `/${allSegments.slice(0, index + 1).join('/')}`;
    const displayName = friendlyNames[segment] || capitalize(segment.replace(/-/g, ' '));
    return (
      <React.Fragment key={href}>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{displayName}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild><Link href={href}>{displayName}</Link></BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </React.Fragment>
    );
  };

  return (
    <div className="mb-4 flex items-center gap-1.5">
      {/* UPDATED: Replaced the '>' symbol with the Home icon for a cleaner look */}
      <Link href="/" aria-label="Go to Home" className="text-muted-foreground transition-colors hover:text-foreground">
        <Home className="size-4" />
      </Link>
      <Breadcrumb>
        <BreadcrumbList>
          {/* The explicit "Home" link is no longer needed here as the icon handles it */}
          
          {segments.length <= maxVisibleSegments ? (
            segments.map((seg, i) => renderSegment(seg, i, i === segments.length - 1, segments))
          ) : (
            <>
              {/* Only show separator if there are segments to separate from */}
              {segments.length > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
              <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
              {segments.slice(-maxVisibleSegments).map((seg, i) => {
                const fullIndex = segments.length - maxVisibleSegments + i;
                const isLast = i === maxVisibleSegments - 1;
                return renderSegment(seg, fullIndex, isLast, segments);
              })}
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;