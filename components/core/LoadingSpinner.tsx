'use client'
import { FC } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

type Props = {
  className?: string
  loaderSize?: number
}

const LoadingSpinner: FC<Props> = ({ className, loaderSize = 25 }) => {
  return (
    <div className={cn('w-full h-screen flex justify-center items-center bg-darkBlue', className)}>
      <Loader2 absoluteStrokeWidth strokeWidth={1.25} size={loaderSize} className='animate-spin text-teal-500' />
    </div>
  )
}

export default LoadingSpinner
