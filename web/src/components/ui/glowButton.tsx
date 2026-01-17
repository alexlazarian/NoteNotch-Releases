import React from 'react'

export function GlowButton({children, className = '', ...props}) {
	return (
		<>
			<style>{`
        .button-snake {
          position: relative;
          overflow: hidden;
          z-index: 0;
          /* glassy background + backdrop blur */
          background-color: rgba(0, 128, 255, 0.5); /* gray-800 @ 50% */
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .button-snake::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            #ff7849,
            transparent
          );
          background-size: 200% 100%;
          animation: snake 6s linear infinite;
          filter: blur(4px);
          opacity: 0.7;
          z-index: -2;
        }

        .button-snake::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 9999px;
          /* mask out the interior, leaving only a 1px border */
          background-color: rgba(31, 41, 55, 0.5);
          z-index: -1;
        }

        @keyframes snake {
          from { background-position: 0% 0; }
          to   { background-position: 200% 0; }
        }
      `}</style>

			<button
				className={
					`button-snake px-6 py-2 rounded-full text-white ` +
					className
				}
				{...props}
			>
				{children}
			</button>
		</>
	)
}
