import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 1000,
    threshold = 0.1,
    className = '',
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once && domRef.current) {
                            observer.unobserve(domRef.current);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold }
        );

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, once]);

    const directionClass = `reveal-${direction}`;

    return (
        <div
            ref={domRef}
            className={`reveal-hidden ${directionClass} ${isVisible ? 'reveal-visible' : ''
                } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
