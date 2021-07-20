
import styled from 'styled-components'

import Hours from './Hours';
import Minutes from './Minutes';


const StyledClock = styled.div`
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