import React from 'react';
import { Header } from '../../components';
import { useBlackHeader } from '../../hooks/useBlackHeader';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()

    return (
        <React.Fragment>
            <Header isBlack={isBlackHeader} />
        </React.Fragment>
    )
}
