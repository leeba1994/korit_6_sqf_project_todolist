import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import * as s from "./style";

const parent = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* justify-items: center; */
    /* align-content: center; */
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */
    /* align-items: center; */
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    /* display: inline-block; */
    box-sizing: border-box;
    border: 4px solid red;
    /* padding: 20px 40px; */
    width: 150px;
    /* min-width: 150px; */
    height: 50px;
    /* min-height: 500px; */
    background-color: white;
    /* font-size: 40px; */
    /* 인라인 레벨요소 글자수 및 글자사이즈 크기에 사이즈결정   */

    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start;
    }
    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
        /* 셀프는 자식 */
    }
    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    background-color: white;
    flex-shrink: 0;

    &:nth-of-type(1) {
        flex-shrink: 2;
        background-color: yellow;
    }
    &:nth-of-type(2) {
        /* width: 60%; */
        /* flex-grow: 1; */
        /* flex-shrink: 1; */
        background-color: green;
    }
    &:nth-of-type(3) {
        /* width: 400px; */
        /* flex-grow: 1; */
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
    background-color: brown;
    padding-right: 75px;

`;

const input = css`
    width: 300px;
    height: 50px;

    & + button {
        position: absolute;
        top: 50%;
        /* bottom: 50%; */
        right: 10px;
        transform: translateY(-50%);
        /* z-index: 0; */
        background-color: pink;

    }
`;



function DandP(props) {
    return (
        <>
            <div css={parent}>
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3</div>
                <div css={child}>4</div>
                <div css={child}>5</div>
                <div css={inputBox}>
                    <input type="text" css={input} />
                    <button>OK</button>
                </div>

            </div>
            <div css={parent2}>
                <div css={child2}>1</div>
                <div css={child2}>2</div>
                <div css={child2}>3</div>
            </div>
        </>
    );
}

export default DandP;