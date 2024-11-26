export const SlideIn = (delay = 0) => {
  return {
    initial: {
      y: -100, // Start off-screen above
      opacity: 0, // Start invisible
    },
    animate: {
      y: 0, // Move to final position
      opacity: 1, // Become fully visible
      transition: {
        duration: 0.8, // Animation duration in seconds
        delay, // Delay before animation starts
      },
    },
  };
};


  export const overlayAnimation = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  export const SlideUp = (delay) => {
    return {
      initial: {
        y: 100,
        opacity: 0,
      },
      animate: {
        y: -100,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
 
  
  
  export const SlideLeft = (delay) => {
    return {
      initial: {
        x: 400,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
  export const SlideRight = (delay) => {
    return {
      initial: {
        x: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
  export const Zoom = (delay) => {
    return {
      initial: {
        scale: 0.03,  // This zooms the element to -300% (effectively 3% of its original size)
        opacity: 0,
      },
      animate: {
        scale: 1, // Return the element to its original size
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
  