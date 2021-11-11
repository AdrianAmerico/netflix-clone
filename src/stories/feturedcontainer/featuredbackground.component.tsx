import React from 'react';
import { SectionStyled, VerticalTransparency, HorizontalTransparency } from '.';

interface Props {
    /**
    * the image link is obtained as a return of a request for a movie or series in themoviedb api
    */
    image: string
}

export const FeaturedBackground: React.FC<Props> = ({ children, image }) => {

    return (
        <SectionStyled image={image}>
            <VerticalTransparency>
                <HorizontalTransparency>
                    {children}
                </HorizontalTransparency>
            </VerticalTransparency>
        </SectionStyled>
    )
}
