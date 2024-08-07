/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";
import ReactModal from "react-modal";

function MainContainer({ children }) {
    const [ scroll, setScroll ] = useState({
        startY: 0,
        isDown: false
    });
    const containerRef = useRef();


    const handleDown = useCallback((e) => setScroll({   //useCallback 함수를 랜더링시 재정의 방지
        startY: e.clientY,
        isDown: true,
    }), []);

    const handleUp = useCallback((e) => setScroll({
        startY: 0,
        isDown: false,
    }), []);

    const handleMove = (e) => {
        if(scroll.isDown) {
            const MAX_TOP = containerRef.current.scrollHeight - containerRef.current.offsetHeight;
            const MIN_TOP = 0;
            // console.log(MIN_TOP);
            let moveY = (e.clientY - scroll.startY) * -1;

            // if(moveY < MIN_TOP) {
            //     moveY = MIN_TOP
            // } else if(moveY > MAX_TOP) {
            //     moveY = MAX_TOP
            // }

            const scrollTop =  containerRef.current.scrollTop;
            // console.log(moveY);
            
            containerRef.current.scrollTop = scrollTop + moveY;
        }
    }

    return (
        <div id={"container"} css={s.container}
            onMouseMove={handleMove}
            onMouseDown={handleDown}
            onMouseUp={handleUp} 
            ref={containerRef} >
            {children}
        </div>
    );
}

export default MainContainer;