import { useEffect } from 'react';

export const Comments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'pcDamasceno/autonetops-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'Ut');
    script.setAttribute('theme', 'github-light');
    
    const commentsDiv = document.getElementById('comments');
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }
  }, []);

  return <div id="comments"></div>;
};
