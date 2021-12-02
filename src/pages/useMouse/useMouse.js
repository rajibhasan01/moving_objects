import React, { useEffect, useState } from 'react';

const useMouse = () => {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null,
        moveX: null,
        moveY: null

    });

    useEffect(() => {
        const handle = (e) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY,
                moveX: e.movementX,
                moveY: e.movementY
            })
        }

        document.addEventListener('mousemove', handle)
        return () => document.removeEventListener("mousemove", handle)
    }, [])

    return mousePosition;
};

export default useMouse;