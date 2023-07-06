import React from 'react'
import { ThreeCircles } from "react-loader-spinner"
import styled from '@emotion/styled';


const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: "50%",
    '@media (max-width: 600px)': {
        top: '40%',
    },
});

const Spinner = () => {
    return (
        <LoaderWrapper>
            <ThreeCircles
                height={150}
                width={150}
                color="#4fa94d"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#ff1919"
                innerCircleColor="#ff3232"
                middleCircleColor="#ff4c4c"
            />
        </LoaderWrapper>
    )
}

export default Spinner


