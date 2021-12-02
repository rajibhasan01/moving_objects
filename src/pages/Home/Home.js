import React, { useEffect, useState } from 'react';
import useMouse from '../useMouse/useMouse';
import './Home.css'

const Home = () => {
    const { x, y } = useMouse();
    const [boxCordination, setBoxCordination] = useState({
        a: 0,
        b: 0
    })
    const [circleCordination, setCircleCordination] = useState({
        a: 0,
        b: 0
    })
    const [triangleCordination, setTriangleCordination] = useState({
        a: 0,
        b: 0
    })
    const [arrange, setArrange] = useState(false);
    const [selectBox, setSelectBox] = useState(false);
    const [selectCircle, setSelectCircle] = useState(false);
    const [selectTriangle, setSelectTriangle] = useState(false);
    const [valueB, setValueB] = useState(false);
    const [valueC, setValueC] = useState(false);
    const [valueT, setValueT] = useState(false);

    const [indexB, setIndexB] = useState(0);
    const [indexC, setIndexC] = useState(0);
    const [indexT, setIndexT] = useState(0);

    const handleBox = (e) => {
        if (arrange) {
            if (selectBox) {
                setSelectBox(false);
            }
            else {
                setSelectBox(true);
                setIndexB(1);
                setIndexC(0);
                setIndexT(0);
                setValueB(true);
            }

        }
    };

    const handleCircle = (e) => {
        if (arrange) {
            if (selectCircle) {
                setSelectCircle(false)
            }
            else {
                setSelectCircle(true);
                setIndexC(1);
                setIndexB(0);
                setIndexT(0);
                setValueC(true);
            }

        }


    };
    const handleTriangle = (e) => {
        if (arrange) {
            if (selectTriangle) {
                setSelectTriangle(false)
            }
            else {
                setSelectTriangle(true);
                setIndexC(0);
                setIndexB(0);
                setIndexT(1);
                setValueT(true);
            }

        }

    };

    useEffect(() => {
        if (arrange && selectBox) {
            setBoxCordination({ a: y, b: x });
        }

    }, [x, y, arrange, selectBox])

    useEffect(() => {
        if (arrange && selectCircle) {
            setCircleCordination({ a: y, b: x });
        }

    }, [x, y, arrange, selectCircle])

    useEffect(() => {
        if (arrange && selectTriangle) {
            setTriangleCordination({ a: y, b: x });
        }

    }, [x, y, arrange, selectTriangle])



    const handleArrange = () => {
        setArrange(true);
        if (arrange) {
            setArrange(false);
        }
        else {
            setArrange(true);
        }

    }
    const handleReset = () => {
        setValueC(false);
        setValueT(false);
        setValueB(false);
    }

    return (
        <div>
            <div className="text-center mt-5">
                <button onClick={handleArrange} className="btn bg-white me-3">{arrange ? "Okay" : "Rearrange"}</button>
                <button onClick={handleReset} className="btn bg-white">Reset</button>
            </div>

            <div className={valueB ? "box" : "box1"} style={{ top: `${boxCordination.a - 40}px`, zIndex: `${indexB}`, left: `${boxCordination.b - 40}px` }} onClick={handleBox}>
            </div>
            <div className={valueC ? "circle" : "circle1"} style={{ top: `${circleCordination.a - 40}px`, zIndex: `${indexC}`, left: `${circleCordination.b - 40}px` }} onClick={handleCircle}></div>

            <div className={valueT ? "triangle" : "triangle1"} style={{ top: `${triangleCordination.a - 40}px`, zIndex: `${indexT}`, left: `${triangleCordination.b - 40}px` }} onClick={handleTriangle}></div>
        </div>
    );
};

export default Home;