
import styled, { keyframes } from 'styled-components'



export default function Clock ({ minuteDegrees, hourDegrees}) { 

    const finalHourDegrees = Number(hourDegrees + 360)

    const finalMinuteDegrees = Number(minuteDegrees + 360)

    console.log("hour", hourDegrees, finalHourDegrees)


      const Clock = styled.div`
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
        background-color: #ecf0f3;
        position: relative;
        transform: rotate(270deg);
        overflow: hidden;
        box-shadow: 3px 3px 3px 0px #d1d9e6 inset, -3px -3px 3px 0px #ffffff inset;
        inset -20px -20px 60px #ffffff;
        clip-path: circle(60px at center)
        
        
      `

      //hour
      const animationHour = keyframes`
      from {
        transform: rotate(${hourDegrees}deg);
      }
      to {
        transform: rotate(${finalHourDegrees}deg);
      }
      `

      const HourStyled = styled.div`
        background-color: #9e9e9e;
        transform-origin: center 0;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0.3vh;
        height: 150px;
        animation: ${animationHour} 4s ease-out infinite;
      `


      //minutes
      const animationMinute = keyframes`
      from {
        transform: rotate(${minuteDegrees}deg);
      }
      to {
        transform: rotate(${finalMinuteDegrees}deg);
      }
      `


      const MinuteStyled = styled.div`
        width: 10px;
        height: 25%;
        background-color: #9e9e9e;
        transform-origin: center 0;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0.3vh;
        height: 150px;
        animation: ${animationMinute} 4s ease-out infinite;
      `

    return(
        <Clock>
          <HourStyled/>
          <MinuteStyled/>
        </Clock>
    )
}