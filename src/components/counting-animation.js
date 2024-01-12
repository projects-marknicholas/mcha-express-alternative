import React, { useEffect, useState } from 'react';

const CountingAnimation = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetCount / (duration / 16)); // Adjust the increment for smoother animation

    let animationFrameId;

    const updateCounter = () => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        return newCount >= targetCount ? targetCount : newCount;
      });

      if (count < targetCount) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    const handleScroll = () => {
      const counterElement = document.getElementById('counter');
      const viewportHeight = window.innerHeight;
      const counterPosition = counterElement.getBoundingClientRect().top;

      if (counterPosition < viewportHeight) {
        animationFrameId = requestAnimationFrame(updateCounter);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [count, targetCount, duration]);

  // Format the count using toLocaleString
  const formattedCount = count.toLocaleString();

  return <div className="counter" id="counter">{formattedCount}</div>;
};

export default CountingAnimation;
