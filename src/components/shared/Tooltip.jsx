import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const OFFSET = 8;

const getTooltipStyle = (placement, triggerRect, tooltipRect) => {
    if (!triggerRect || !tooltipRect) return null;

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

/**
 * @typedef {Object} TooltipProps
 * @property {import("react").ReactNode} children
 * @property {import("react").ReactNode} content
 * @property {"top" | "bottom" | "left" | "right"} [placement="right"]
 */

/** @param {TooltipProps} props */
const Tooltip = ({ children, content, placement = "right" }) => {
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState(null); // null = aún no calculado

    const updatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const newStyle = getTooltipStyle(placement, triggerRect, tooltipRect);
        if (newStyle) setStyle(newStyle);
    }, [placement]);

    useEffect(() => {
        if (!visible) {
            setStyle(null); // Resetear al ocultar
            return;
        }
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
                            top: style?.top ?? 0,
                            left: style?.left ?? 0,
                            pointerEvents: "none",
                            // Invisible hasta tener coordenadas reales
                            opacity: style ? 1 : 0,
                            transition: "opacity 0.1s ease",
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