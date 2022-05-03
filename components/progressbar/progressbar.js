import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./progressbar.module.css"

function ProgressBar({
    size,
    progress,
    strokeWidth,
    circleTwoStroke,
    name
}) {
    const [offset, setOffset] = useState(0);



    const circleRef = useRef(null);

    const center = size / 2;

    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;


    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);



        circleRef.current.style = 'transition: stroke-dashoffset 850ms  ease-in-out'

    }, [setOffset, progress, offset, circumference,]);



    return (

        <svg
            className={styles.svg}

        >
            <circle
                className={styles.svgCircleBg}
                r={30 + "%"}
                cx={center + "%"}
                cy={center + "%"}
                stroke=" rgb(236, 238, 240)"
                strokeWidth={strokeWidth}
            />
            <circle
                className={styles.svgCircle}
                r={30 + "%"}
                cx={center + "%"}
                cy={center + "%"}
                stroke={circleTwoStroke}
                strokeWidth={strokeWidth}

                ref={circleRef}
                strokeDasharray={circumference + "%"}
                strokeDashoffset={offset + "%"}
            />
            <text className={styles.svgText} x={center + "%"} y={center + "%"}>
                {progress}%
            </text>

        </svg>

    )

}

export default ProgressBar;
