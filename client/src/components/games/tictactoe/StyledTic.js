import styled from 'styled-components';

const StyledTic = styled.section`
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 80vw;
#setup-box {
  h4 {
    padding: 10px;
    font-size: 42px;
  }
  #button-wrapper {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    button {
      width: 150px;
      padding: 2px;

    }
  }
}
#game-header {
  h4 {
    font-size: 36px;
    padding: 10px;
  }
  p {
    font-size: 22px;
    padding: 5px;
  }

}
.game-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  margin-bottom: 20px;
}
.game-options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  button {
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media (min-width: 768px) {
  width: 40vw;
  #button-wrapper {
    flex-direction: row;
  }
}
`

export default StyledTic;