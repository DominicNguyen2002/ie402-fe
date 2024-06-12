import clsx from 'clsx';
import { ReactNode } from 'react';

interface CenterProps {
  children: ReactNode;
  isFullScreen?: boolean;
  className?: string;
}

export function Center({ children, isFullScreen = false, className = '' }: CenterProps) {
  const center = 'flex flex-row justify-center items-center';
  const fullScreenClass = 'w-screen h-screen';
  const centerElement = 'w-full h-full';

  return <div className={clsx(center, isFullScreen ? fullScreenClass : centerElement, className)}>{children}</div>;
}
