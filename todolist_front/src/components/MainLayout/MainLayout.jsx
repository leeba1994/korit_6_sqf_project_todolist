// import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainLayout({ children }) {

    // console.log(props);

    return (
        <div css={s.layout}>
            <dir css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.topBarCenter}></div>
                </div>
                {children}
            </dir>
        </div>
    );
}

export default MainLayout;