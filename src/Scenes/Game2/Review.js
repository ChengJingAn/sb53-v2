import React, { useEffect, useContext, useRef, useState } from 'react';
import "../../stylesheets/styles.css";
import BaseImage from '../../components/BaseImage';

import { UserContext } from '../../components/BaseShot';
import { prePathUrl, generateStandardNum } from "../../components/CommonFunctions"

let timerList = []
//-0.5,1.25,5,-5
let randomList = []

export default function Review1({ _baseGeo, nextFunc }) {
    const audioList = useContext(UserContext)
    const starBaseList = Array.from({ length: 10 }, ref => useRef())
    const baseRef = useRef()


    useEffect(
        () => {

            setTimeout(() => {
                starBaseList.map((star, index) => {
                    setTimeout(() => {
                        star.current.className = 'show'
                    }, 300 * index);
                })
            }, 1500);

            setTimeout(() => {
                nextFunc()
            }, 10000);
            return () => {
                randomList = []
            }
        }, []
    )

    return (
        <div ref={baseRef}
            className="aniObject"  >
            <div
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + _baseGeo.width * 0.0 + "px",
                    bottom: _baseGeo.bottom + _baseGeo.height * 0.0 + "px",
                }}>


                {
                    Array.from(Array(10).keys()).map(value =>
                        <div
                            ref={starBaseList[value]}
                            className='hide'
                            style={{
                                position: 'absolute',
                                width: '13%',
                                height: '20%',
                                cursor: 'pointer',
                                top: (0.15 + 0.15 * parseInt((value / 2))) * 100 + '%',
                                left: (0.4 + (value % 2) * 0.16) * 100 + '%',

                            }}>
                            < BaseImage
                                scale={1.1}
                                posInfo={{ t: -0.4, l: -0.4 }}
                                url={'SB_53_Prop-Interactive/SB_53_PI_game2_nut_01.svg'}
                            />
                            < BaseImage
                                scale={0.3}
                                posInfo={{ l: -0.05, t: 0.05 }}
                                url={'SB_53_Text-Interactive/SB_53_TI_Game2_' +
                                    (value < 9 ? '0' : '') + generateStandardNum(value * 5 + 55) + '.svg'}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );

}
