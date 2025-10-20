import type { ReactNode } from 'react'

export type TooltipProps = {
  children: ReactNode
  enabled?: boolean
  height?: 'fit' | 'full'
  label: string | ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  width?: 'fit' | 'full'
}

/**
 * Tooltip component is disabled - just renders children
 * Use native browser tooltips (title attribute) instead
 */
export function Tooltip({ children }: TooltipProps) {
  return children
}
