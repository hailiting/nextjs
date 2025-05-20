'use client';

import { useLoadingStore } from '@/store/loading';
import { motion } from 'framer-motion';

export function LoadingHandler() {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div id="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <motion.img 
        src='/assets/images/logo.png' 
        alt='logo' 
        className='w-[127px] h-[46px]'
        animate={{ 
          opacity: [0.8, 1, 0.8],
          scale: [0.9, 1, 0.9]
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 