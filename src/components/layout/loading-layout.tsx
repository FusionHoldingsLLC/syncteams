import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { CompanyLogo } from '../others/company-logo'

interface Props {
  children: ReactNode
  loading?: boolean
}

const LoadingLayout: React.FC<Props> = ({ children, loading = false }) => {
  return (
    <>
      <LogoLoader isLoading={loading} />
      {!loading && children}
    </>
  )
}

export default LoadingLayout

type LogoLoaderProps = {
  isLoading: boolean
}

const LogoLoader = ({ isLoading }: LogoLoaderProps) => {
  return (
    <motion.div
      className='absolute inset-0 z-50 flex items-center justify-center bg-white'
      initial={{ opacity: 1 }}
      animate={
        isLoading
          ? { opacity: 1 }
          : { opacity: 0, display: 'none', transition: { delay: 1, duration: 0.5 } } // fade out after drop
      }
    >
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={isLoading ? { rotate: 360 } : { y: 1000 }}
        transition={
          isLoading
            ? { rotate: { repeat: Infinity, duration: 1, ease: 'linear' } }
            : { y: { duration: 1, ease: 'easeIn' } }
        }
      >
        <CompanyLogo hideText />
      </motion.div>
    </motion.div>
  )
}
