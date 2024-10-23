import { useEffect, useRef } from 'react';

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Early return if ref is not available
    if (!commentsRef.current) return;

    // Create the script element
    const script = document.createElement('script');
    
    // Set all required attributes
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'pcDamasceno/autonetops-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'Autonetops');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Error handling
    script.onerror = (error) => {
      console.error('Error loading Utterances:', error);
    };

    // Append the script to the comments div
    commentsRef.current.appendChild(script);

    return () => {
      // Cleanup on component unmount
      if (commentsRef.current) {
        const utterancesFrame = commentsRef.current.querySelector('.utterances-frame');
        if (utterancesFrame) {
          utterancesFrame.remove();
        }
      }
    };
  }, []); // Empty dependency array for single execution

  return (
    <div 
      ref={commentsRef}
      className="w-full mt-10"
      style={{ minHeight: '200px' }} // Ensure there's space for comments to load
    />
  );
};

export default Comments;