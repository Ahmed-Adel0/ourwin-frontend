/**
 * Skeleton Loading Component
 * 
 * Reusable skeleton component for loading states
 */

export default function Skeleton({ 
  className = '', 
  variant = 'default',
  width,
  height,
  ...props 
}) {
  const baseClasses = 'animate-pulse bg-dark-teal rounded';
  
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-64 w-full',
    image: 'h-48 w-full',
  };

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={style}
      {...props}
    />
  );
}

/**
 * Skeleton Card Component
 */
export function SkeletonCard() {
  return (
    <div className="bg-dark-bg border border-accent/20 rounded-2xl p-6 space-y-4">
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-5/6" />
      <Skeleton variant="image" />
    </div>
  );
}

/**
 * Skeleton List Component
 */
export function SkeletonList({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton variant="avatar" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" />
            <Skeleton variant="text" className="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

