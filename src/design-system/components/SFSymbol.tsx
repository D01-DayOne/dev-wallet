import { forwardRef } from 'react'

import type { ClassValue } from 'clsx'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronsRight,
  ClipboardCopy,
  Clock,
  Cog,
  Download,
  Hammer,
  Minus,
  Plus,
  RefreshCcw,
  Settings,
  SkipBack,
  SquarePen,
  Trash2,
  Undo2,
  UserCircle,
  Wallet,
  X,
} from 'lucide-react'

import type { FontSize, FontWeight, SymbolName } from '../tokens'
import { Box } from './Box'
import type { BoxStyles } from './Box.css'

export type SFSymbolProps = {
  className?: ClassValue
  color?: BoxStyles['color']
  weight?: FontWeight
  symbol: SymbolName
  size?: FontSize
}

const strokeWidthByWeight: Record<FontWeight, number> = {
  light: 1,
  regular: 1.25,
  medium: 1.5,
  semibold: 1.75,
  bold: 2,
  heavy: 2.25,
}

const symbolToIcon: Record<SymbolName, LucideIcon> = {
  'arrow.clockwise': RefreshCcw,
  'arrow.left.arrow.right': ArrowLeftRight,
  checkmark: Check,
  clock: Clock,
  'doc.on.doc': ClipboardCopy,
  'hammer.fill': Hammer,
  'wallet.pass': Wallet,
  'person.circle': UserCircle,
  'chevron.down': ChevronDown,
  'chevron.right.2': ChevronsRight,
  'chevron.left': ChevronLeft,
  trash: Trash2,
  xmark: X,
  'arrow.right': ArrowRight,
  'arrowtriangle.left.and.line.vertical.and.arrowtriangle.right': SkipBack,
  'square.and.arrow.down': Download,
  'gearshape.fill': Settings,
  'square.and.pencil': SquarePen,
  plus: Plus,
  gear: Cog,
  minus: Minus,
  'backward.fill': ArrowLeft,
  'arrow.counterclockwise': Undo2,
}

export const SFSymbol = forwardRef<SVGSVGElement, SFSymbolProps>(
  (
    {
      className,
      color = 'text',
      symbol: name,
      weight = 'regular',
      size = '16px',
    }: SFSymbolProps,
    ref,
  ) => {
    const Icon = symbolToIcon[name]
    if (!Icon) return null

    return (
      <Box
        ref={ref}
        as={Icon}
        className={className}
        color={color}
        style={{
          width: size,
          height: size,
        }}
        size={size}
        strokeWidth={strokeWidthByWeight[weight]}
        aria-hidden
        focusable={false}
      />
    )
  },
)
