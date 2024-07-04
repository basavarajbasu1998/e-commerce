import { useState, useEffect } from 'react';

const useConfetti = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return { width: dimensions.width, height: dimensions.height, showConfetti };
};

export default useConfetti;
