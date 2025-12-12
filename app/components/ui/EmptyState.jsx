/**
 * EmptyState Component
 *
 * Reusable empty state component for when data is not available
 */

export default function EmptyState({
  title = "No items found",
  description = "Check back later",
  icon,
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 text-center max-w-md">
        {description}
      </p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
