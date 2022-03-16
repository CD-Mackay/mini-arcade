import styled from 'styled-components';

const StyledRockPaper = styled.section`
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 10px;
#turn-display {
 display: flex;
 flex-direction: column;
}

@media (min-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  #turn-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
`

export default StyledRockPaper;