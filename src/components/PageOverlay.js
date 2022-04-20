import React from 'react';

const PageOverlay = ({children, title}) => {
    return (
        <>
            <h4 className="font-weight-bold mb-3 text-center">{title}</h4>
            <div className="container py-3">
                {children}
            </div>
        </>

    );
};

export default PageOverlay;
