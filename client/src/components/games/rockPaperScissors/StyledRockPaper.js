import styled from 'styled-components';

const StyledRockPaper = styled.section`
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 10px;
align-items: center;

#input-wrapper {
  margin-bottom: 10px;
}
#turn-display {
 display: flex;
 flex-direction: column;
 margin-bottom: 10px;
}

@media (min-width: 768px) {
  width: 100%;
  justify-content: space-between;
  #turn-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
`

export default StyledRockPaper;