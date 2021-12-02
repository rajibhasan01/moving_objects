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

    return (
        <div>
            <div className="text-center">
                <button onClick={handleArrange} className="btn bg-white">{arrange ? "Okay" : "Rearrange"}</button>
            </div>

            <div className="box" style={{ top: `${boxCordination.a - 40}px`, zIndex: `${indexB}`, left: `${boxCordination.b - 40}px` }} onClick={handleBox}>
            </div>
            <div className="circle" style={{ top: `${circleCordination.a - 40}px`, zIndex: `${indexC}`, left: `${circleCordination.b - 40}px` }} onClick={handleCircle}></div>

            <div className="triangle" style={{ top: `${triangleCordination.a - 40}px`, zIndex: `${indexT}`, left: `${triangleCordination.b - 40}px` }} onClick={handleTriangle}></div>
        </div>
    );
};

export default Home;