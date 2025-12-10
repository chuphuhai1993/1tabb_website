import { cn } from "./utils";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
}

export default function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <>
            <style>
                {`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-100% - var(--gap))); }
                }
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(calc(-100% - var(--gap))); }
                }
                .animate-marquee {
                    animation: marquee var(--duration) linear infinite;
                }
                .animate-marquee-vertical {
                    animation: marquee-vertical var(--duration) linear infinite;
                }
                `}
            </style>
            <div
                {...props}
                className={cn(
                    "group flex overflow-hidden p-2",
                    {
                        "flex-row": !vertical,
                        "flex-col": vertical,
                    },
                    className,
                )}
                style={{
                    "--duration": "80s",
                    "--gap": "1rem",
                    gap: "var(--gap)",
                    ...props.style,
                } as React.CSSProperties}
            >
                {Array(repeat)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className={cn("flex shrink-0 justify-around", {
                                "animate-marquee flex-row": !vertical,
                                "animate-marquee-vertical flex-col": vertical,
                                "group-hover:[animation-play-state:paused]": pauseOnHover,
                                "[animation-direction:reverse]": reverse,
                            })}
                            style={{
                                gap: "var(--gap)",
                            }}
                        >
                            {children}
                        </div>
                    ))}
            </div>
        </>
    );
}
