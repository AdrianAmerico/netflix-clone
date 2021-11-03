import * as React from 'react';

export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    return (
        <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            style={{ margin: '0 5px' }}
        >
            <path
                d="M6 4l15 8-15 8z"
                fill="#000" />
        </svg>
    )
}
