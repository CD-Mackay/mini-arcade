import styled from 'styled-components';

const StyledHangman = styled.section`
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
`

export default StyledHangman;