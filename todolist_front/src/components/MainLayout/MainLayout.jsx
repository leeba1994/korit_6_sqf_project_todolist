// import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import { IoCellularSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import MainContainer from "../MainConatiner/MainContainer";


function MainLayout({ children }) {
    const [clock, setClock ] =useState("0:00");

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
            setClock(`${hours}:${minutes}`);
        }, 1000)
    }, [])

    // console.log(props);

    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}><IoCellularSharp /><IoIosWifi /><IoIosBatteryFull /></div>
                </div>
                <MainContainer>
                    {children}
                </MainContainer>
            </div>
        </div>
    );
}

export default MainLayout;