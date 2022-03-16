import styled from 'styled-components';

const StyledHangman = styled.section`
display: flex;
flex-direction: column;
margin: 0 auto;
#game-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  #finished-menu {
    display: flex;
    Button {
      margin: 5px;
    }
  }
}
#setup-menu {
  margin: 0 auto;
  text-align: center;
  h4 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  div {
    display: flex;
    Button {
      margin-bottom: 10px;
      margin-right: 5px;
    }
  }
}
@media (min-width: 768px) {
  display: grid;
  grid-template-columns: ${props => props.phase === "play" ? "1fr 1fr" : "1fr"};
}
`

export default StyledHangman;