import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudiesImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const images = [
    { id: 1, src: "/1.png", alt: "Case Study 1" },
    { id: 2, src: "/2.png", alt: "Case Study 2" },
    { id: 3, src: "/3.png", alt: "Case Study 3" },
    { id: 4, src: "/4.png", alt: "Case Study 4" }
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scrollTo = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 305; // width + gap (297 + 8)
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies
          </h2>
        </motion.div>
        {/* Slider with Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative"
        >
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              >
                <div 
                  onClick={() => scrollTo('left')}
                  className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              >
                <div 
                  onClick={() => scrollTo('right')}
                  className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-scroll relative scrollbar-hide"
          >
            <div className="flex gap-8 px-4 pb-8 w-max mx-auto">
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  className="w-[297px] h-[421px] flex-shrink-0 snap-center cursor-pointer relative group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white p-2 hover:text-gray-300 z-50"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  style={{ height: 'auto', width: 'auto' }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudiesImages;