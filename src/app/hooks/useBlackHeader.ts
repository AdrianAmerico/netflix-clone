import React from 'react';

export const useBlackHeader = () => {
    const [isBlackHeader, setIsBlackHeader] = React.useState<boolean>(false)

    React.useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setIsBlackHeader(true)
            } else {
                setIsBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return { isBlackHeader }
}