import React, { JSX, useEffect, useRef, useState } from 'react';

interface TypoGraphyProps {
  children: JSX.Element;
}

const TypoGraphy: React.FC<TypoGraphyProps> = ({ children }) => {
  const elementRef = useRef(null); // Create a ref to access the child element
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    if (elementRef.current) {
      // Ensure the ref is attached to an actual DOM element
      const computedStyle = window.getComputedStyle(elementRef.current);
      setFontSize(computedStyle.fontSize); // Update state with font size
    }
  }, [children]); // Run the effect when children change

  const clonedChild = React.cloneElement(children, { ref: elementRef });

  return (
    <div className="my-2 flex">
      {clonedChild}
      <label className="mx-3 content-center text-center text-base">
        - {fontSize || 'Calculating...'}
      </label>
    </div>
  );
};

export default TypoGraphy;
