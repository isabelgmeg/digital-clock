
import styled, { keyframes } from 'styled-components'

const animationHour = (hourDegrees, finalHourDegrees) => keyframes`
from {
  transform: rotate(${hourDegrees}deg);
}
to {
  transform: rotate(${finalHourDegrees}deg);
}
`;

const HourStyled = styled.div`
  background-color: #454545;
  transform-origin: center 0;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.2vh;
  height: 150px;
  animation: ${(props) => animationHour(props.hourDegrees, props.finalHourDegrees)} 5s ease-out infinite;
`;

export default function Hours({ hourDegrees, index }){
    const finalHourDegrees = Number(hourDegrees + 360)
    return(
        <HourStyled 
        className={hourDegrees} 
        key={index} 
        hourDegrees={hourDegrees} 
        finalHourDegrees={finalHourDegrees}
        />
    )
}
