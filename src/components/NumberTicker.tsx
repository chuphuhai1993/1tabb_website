import { useEffect, useRef, useState } from 'react';

interface NumberTickerProps {
    value: number;
    suffix?: string;
    decimals?: number;
    duration?: number;
    className?: string;
}

export function NumberTicker({
    value,
    suffix = '',
    decimals = 0,
    duration = 2000,
    className = ''
}: NumberTickerProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // Ease out quart function for smooth landing
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                        setDisplayValue(value * easeOutQuart);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={elementRef} className={className}>
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    );
}
