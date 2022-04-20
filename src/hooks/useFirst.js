import React, {useLayoutEffect, useRef} from 'react';

const useFirst = (fn) => {
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            fn();
        }
    });
};

export default useFirst;
