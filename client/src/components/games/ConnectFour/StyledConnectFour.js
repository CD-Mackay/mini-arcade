import styled from 'styled-components';

const StyledConnectFour = styled.section`
display: flex;
flex-direction: column;
padding: 10px;
div {
  text-align: center;
  h4 {
    font-size: 28px;
    margin: 10px;
  }
  h6 {
    margin-bottom: 5px;
    font-size: 24px;
  }
}
#scoreboard-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

@media (min-width: 768px) {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
`

export default StyledConnectFour;