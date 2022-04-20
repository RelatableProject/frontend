import React from 'react';

const Section = ({title, children, type = "h5"}) => {
    return (
        <>
            <div className={"row"}>
                <h5 className="font-weight-bold mb-4 text-left">{title}</h5>
                {children}
            </div>
            <hr style={{marginTop: "40px"}}/>
        </>


    );
};

export default Section;
