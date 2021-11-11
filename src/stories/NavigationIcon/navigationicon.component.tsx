import * as React from 'react';

interface Props {
    /**
    * You can choose which way the arrow will point
    */
    side: 'left' | 'right'
    /**
    * if you wanted a new color, enter the hexagonal code, example: "#333"
    */
    color?: string
}

export const NavigationIcon = ({ side = 'left', color }: Props) => {
    const sides = {
        left: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
        right: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"

    }

    const test = side === "left" ? sides.left : sides.right
    return (
        <svg
            viewBox="0 0 24 24"
        >
            <path
                d={test}
                fill={color ? color : "#fff"} />
        </svg>
    )
}
