import React from 'react'

interface CampfireIconProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const CampfireIcon: React.FC<CampfireIconProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <svg
      className={`${sizeClasses[size]} ${className} flame-flicker`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3.5 5.5L9 15c-1.5-1-2.5-2.5-2.5-4.5C6.5 7.5 8.5 5.5 11 5.5c1.5 0 2.5 1 2.5 2.5 0 1-0.5 1.5-1 2 0.5 0.5 1 1 1 2 0 1.5-1 2.5-2.5 2.5-1.5 0-2.5-1-2.5-2.5 0-1 0.5-1.5 1-2-0.5-0.5-1-1-1-2 0-1.5 1-2.5 2.5-2.5 2.5 0 4.5 2 4.5 4.5 0 2-1 3.5-2.5 4.5L15 15c2-1 3.5-3 3.5-5.5C18.5 4.5 16 2 12 2z" />
      <path
        d="M10 8c0-1.5 1-2.5 2.5-2.5 1.5 0 2.5 1 2.5 2.5 0 1-0.5 1.5-1 2 0.5 0.5 1 1 1 2 0 1.5-1 2.5-2.5 2.5-1.5 0-2.5-1-2.5-2.5 0-1 0.5-1.5 1-2-0.5-0.5-1-1-1-2z"
        fill="var(--color-campfire-400)"
      />
    </svg>
  )
}

export default CampfireIcon
