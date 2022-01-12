import styled from 'styled-components';

const StyledHangman = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
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