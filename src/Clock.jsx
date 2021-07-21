
import styled from 'styled-components'

import Hours from './Hours';
import Minutes from './Minutes';


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
  background-color: #f2f0f6;
  box-shadow: inset 4px 4px 8px 0 rgba(0, 0, 0, 0.05), inset -7px -7px 6px 0 hsla(0, 0%, 100%, 0.65), -4px -4px 20px 1px #fff, 4px 7px 40px -20px rgba(0, 0, 0, 0.19);
`
export default function Clock ({ minuteDegrees, hourDegrees, index}) { 

    const finalHourDegrees = Number(hourDegrees + 360)
    const finalMinuteDegrees = Number(minuteDegrees + 360)

    return(
        <StyledClock className={index}>
            <Hours index={index} hourDegrees={hourDegrees} finalHourDegrees={finalHourDegrees}/>
            <Minutes index={index} minuteDegrees={minuteDegrees} finalMinuteDegrees={finalMinuteDegrees}/>
        </StyledClock>
    )
}