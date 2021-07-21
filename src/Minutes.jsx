
import styled, { keyframes } from 'styled-components'


const animationMinute = (minuteDegrees, finalMinuteDegrees) => keyframes`
from {
  transform: rotate(${minuteDegrees}deg);
}
to {
  transform: rotate(${finalMinuteDegrees}deg);
}
`;

const MinuteStyled = styled.div`
  height: 25%;
  background-color: #454545;
  transform-origin: center 0;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.2vh;
  height: 150px;
  animation: ${(props) =>
      animationMinute(props.minuteDegrees, props.finalMinuteDegrees)}
    5s ease-out infinite;
`;


export default function Minutes ({minuteDegrees, index, finalMinuteDegrees}) {
    
    return (
        <MinuteStyled 
        className={minuteDegrees} 
        key={index} 
        minuteDegrees={minuteDegrees} 
        finalMinuteDegrees={finalMinuteDegrees}/>
    )
}