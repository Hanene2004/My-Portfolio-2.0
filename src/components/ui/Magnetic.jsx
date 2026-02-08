import React from 'react';
import useMagnetic from '../../reactbits/hooks/useMagnetic';

const Magnetic = ({ children, radius = 50, strength = 0.5, className = "" }) => {
    const { ref, style } = useMagnetic({ radius, strength });

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
};

export default Magnetic;
