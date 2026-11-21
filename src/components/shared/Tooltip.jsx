import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const OFFSET = 8;

const getTooltipStyle = (placement, triggerRect, tooltipRect) => {
    if (!triggerRect || !tooltipRect) return { top: 0, left: 0 };

    const { top, left, right, bottom, width, height } = triggerRect;
    const { width: tw, height: th } = tooltipRect;
    const scroll = { x: window.scrollX, y: window.scrollY };

    const placements = {
        top: {
            top: top + scroll.y - th - OFFSET,
            left: left + scroll.x + width / 2 - tw / 2,
        },
        bottom: {
            top: bottom + scroll.y + OFFSET,
            left: left + scroll.x + width / 2 - tw / 2,
        },
        left: {
            top: top + scroll.y + height / 2 - th / 2,
            left: left + scroll.x - tw - OFFSET,
        },
        right: {
            top: top + scroll.y + height / 2 - th / 2,
            left: right + scroll.x + OFFSET,
        },
    };

    return placements[placement] ?? placements.right;
};

const Tooltip = ({ children, content, placement = "right" }) => {
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState({});
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);

    const updatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        setStyle(getTooltipStyle(placement, triggerRect, tooltipRect));
    }, [placement]);

    useEffect(() => {
        if (!visible) return;
        // Doble rAF para asegurar que el tooltip ya tiene dimensiones
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(updatePosition);
        });
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [visible, updatePosition]);

    return (
        <>
            <div
                ref={triggerRef}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="inline-block"
            >
                {children}
            </div>
            {visible &&
                ReactDOM.createPortal(
                    <div
                        ref={tooltipRef}
                        role="tooltip"
                        style={{
                            position: "absolute",
                            top: style.top ?? 0,
                            left: style.left ?? 0,
                            pointerEvents: "none",
                        }}
                        className="z-50 bg-app-greenprimary-600 text-white text-sm rounded py-1 px-2 shadow-lg whitespace-nowrap"
                    >
                        {content}
                    </div>,
                    document.body
                )}
        </>
    );
};

export default Tooltip;