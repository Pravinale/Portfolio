import React, { useEffect, useRef } from 'react';
import './Face.css';

const Face = () => {
    const eyesRef = useRef([]);

    useEffect(() => {
        const eyeball = (event) => {
            eyesRef.current.forEach((eye) => {
                const rect = eye.getBoundingClientRect();
                const x = rect.left + eye.clientWidth / 2;
                const y = rect.top + eye.clientHeight / 2;
                const radian = Math.atan2(event.pageX - x, event.pageY - y);
                const rot = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = `rotate(${rot}deg)`;
            });
        };

        document.body.addEventListener('mousemove', eyeball);

        return () => {
            document.body.removeEventListener('mousemove', eyeball);
        };
    }, []);

    return (
      <>
      <div className='face-container'>
          <div className="face">
                <div className="eyes">
                    <div className="eye" ref={(el) => (eyesRef.current[0] = el)}></div>
                    <div className="eye" ref={(el) => (eyesRef.current[1] = el)}></div>
                </div>
                <div className='smile'></div>
          </div>
          <div className='face-shadow'></div>
      </div>

      </>
    );
};

export default Face;
