import React, { useEffect } from 'react';

const RemarkBox = () => {
  useEffect(() => {
    const rbOwnerKey = '82f1abdd-8f00-11ef-8bc6-29ab4fb285a0';
    const threadUri = window.location.href;
    const threadTitle = document.title;
    const threadFragment = window.location.hash;

    const rbSrc = `https://my.remarkbox.com/embed?rb_owner_key=${rbOwnerKey}&thread_title=${encodeURI(threadTitle)}&thread_uri=${encodeURIComponent(threadUri)}${threadFragment}`;

    // Function to create and append iframe
    function createRemarkboxIframe() {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('id', 'remarkbox-iframe');
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('src', rbSrc);
      iframe.setAttribute('frameBorder', '0');
      iframe.setAttribute('tabIndex', '0');
      iframe.setAttribute('title', 'Remarkbox');
      iframe.style.width = '100%';
      document.getElementById('remarkbox-div').appendChild(iframe);
    }

    // Inject iframe
    createRemarkboxIframe();

    // Load the iframe resizer script
    const script = document.createElement('script');
    script.src = 'https://my.remarkbox.com/static/js/iframe-resizer/iframeResizer.min.js';
    script.onload = () => {
      // Initialize iframe resizer
      window.iFrameResize(
        {
          checkOrigin: ['https://my.remarkbox.com'],
          inPageLinks: true,
          initCallback: (iframe) => {
            iframe.iFrameResizer.moveToAnchor(threadFragment);
          }
        },
        document.getElementById('remarkbox-iframe')
      );
    };
    document.body.appendChild(script);

    return () => {
      // Clean up when component is unmounted
      const iframe = document.getElementById('remarkbox-iframe');
      if (iframe) {
        iframe.remove();
      }
    };
  }, []);

  return (
    <div id="remarkbox-div">
      <noscript>
        <iframe
          id="remarkbox-iframe"
          src="https://my.remarkbox.com/embed?nojs=true"
          style={{ height: '600px', width: '100%', border: 'none' }}
          tabIndex="0"
        />
      </noscript>
    </div>
  );
};

export default RemarkBox;
