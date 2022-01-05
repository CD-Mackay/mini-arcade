import styled from 'styled-components';

const StyledTic = styled.section`

#setup-box {
  width: 40vw;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  h4 {
    padding: 5px;
    font-size: 42px;
  }
  #button-wrapper {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    button {
      width: 150px;
      padding: 2px;

    }
  }
  .game-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`

export default StyledTic;