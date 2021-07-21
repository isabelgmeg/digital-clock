
import styled from 'styled-components'

import HoursDark from './HoursDark';
import MinutesDark from './MinutesDark';


const StyledClock = styled.div`
  width: 4vw;
  height: 4vw;
  margin: auto;
  border-radius: 50%;
  position: relative;
  transform: rotate(270deg);
  overflow: hidden;
  margin-bottom; 2px;
  clip-path: circle(60px at center);
  background-color: #222222;
  box-shadow: inset 4px 4px 8px 0 rgb(0 0 0 / 5%), inset -7px -7px 6px 0 hsl(0deg 0% 0% / 65%), -4px -4px 20px 1px #000, 4px 7px 40px -20px rgb(0 0 0 / 19%)
`
export default function Clock ({ minuteDegrees, hourDegrees, index}) { 

    const finalHourDegrees = Number(hourDegrees + 360)
    const finalMinuteDegrees = Number(minuteDegrees + 360)

    return(
        <StyledClock className={index}>
            <HoursDark index={index} hourDegrees={hourDegrees} finalHourDegrees={finalHourDegrees}/>
            <MinutesDark index={index} minuteDegrees={minuteDegrees} finalMinuteDegrees={finalMinuteDegrees}/>
        </StyledClock>
    )
}