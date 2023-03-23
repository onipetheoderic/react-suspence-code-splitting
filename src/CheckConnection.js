import React from "react";
import wifi from './img/wifi.png';
import { Detector } from "react-detect-offline";

const CheckConnection = props => {
    return (
        <>
            <Detector render={({ online }) => (
                online ? props.children :
                    <div style={{ paddingTop: 10, textAlign: 'center' }}>
                        <img src={wifi} style={{ width: 100, height: 100 }} alt="logo" />
                        <h1 style={{ marginBottom: 5 }}>No Internet Connection</h1>
                        <h4 style={{ margin: 0 }}>Please check your internet connection</h4>
                    </div>
            )} />
        </>
    )
}

export default CheckConnection