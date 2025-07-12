import React from 'react';

export function Cup() {
  return (
    <div
      style={{
        // Size property
        width: '70px',
        height: '70px',

        // Rotation property
        transform: 'rotate(0deg)',
        
        // Opacity property
        opacity: 1,
        
        // Transition for smooth hover effects
        transition: 'all 1.5s ease-in-out',
        
        // Animation property
        animation: 'pulse 2s infinite'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#50829b" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#f7e4d9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  );
}