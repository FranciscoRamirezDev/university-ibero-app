import React from "react";

type CardMainProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /**
     * HTMLElement tag to render (div, section, article, etc.)
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Optional aria-label for accessibility
     */
    "aria-label"?: string;
};

/**
 * Tarjeta reutilizable para agrupar contenido de forma limpia y visual.
 * - Borde, sombra y padding
 * - Permite children dinámicos
 * - Diseño responsivo
 */
const CardMain: React.FC<CardMainProps> = ({
    children,
    className = "",
    style,
    as: Component = "div",
    "aria-label": ariaLabel,
}) => {
    return (
        // renderiza como el elemento elegido (div, section, article...)
        <Component className={`card-main ${className}`} style={style} aria-label={ariaLabel}>
            {children}
            <style jsx>{`
                .card-main {
                    width: 100%;
                    box-sizing: border-box;
                    background: var(--card-bg, #ffffff);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                    box-shadow: 0 6px 18px rgba(8, 15, 30, 0.06);
                    border-radius: 12px;
                    padding: 16px;
                    transition: box-shadow 150ms ease, transform 120ms ease;
                }

                /* Hover ligero para interfaces en desktop */
                @media (hover: hover) and (pointer: fine) {
                    .card-main:hover {
                        box-shadow: 0 10px 30px rgba(8, 15, 30, 0.08);
                        transform: translateY(-2px);
                    }
                }

                /* Espaciado responsivo */
                @media (min-width: 640px) {
                    .card-main {
                        padding: 20px;
                    }
                }
                @media (min-width: 1024px) {
                    .card-main {
                        padding: 24px;
                    }
                }

                /* Soporte para modo oscuro si la app define variables */
                :global(html[data-theme="dark"]) .card-main {
                    background: var(--card-bg-dark, #0b1220);
                    border: 1px solid rgba(255, 255, 255, 0.04);
                    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
                }
            `}</style>
        </Component>
    );
};

export default CardMain;