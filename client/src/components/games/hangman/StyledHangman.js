import styled from 'styled-components';

const StyledHangman = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
width: 80vw;
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
  Button {
    margin-bottom: 10px;
  }
}
`

export default StyledHangman;