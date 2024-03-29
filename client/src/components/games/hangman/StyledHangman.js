import styled from 'styled-components';

const StyledHangman = styled.section`
display: flex;
flex-direction: column;
#game-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  #game-information {
    display: flex;
    flex-direction: column;
    width: 60vw;
  }
  #finished-menu {
    display: flex;
    Button {
      margin: 5px;
    }
  }
}

#input-wrapper {
  display: flex;
  justify-content: center;
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

`

export default StyledHangman;