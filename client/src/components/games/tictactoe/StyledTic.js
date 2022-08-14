import styled from "styled-components";

const StyledTic = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 80vw;
  #setup-box {
    display: flex;
    h4 {
      font-size: 32px;
      padding: 10px;
    }
    #button-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 auto;
      width: 60%;
      button {
        margin: 5px;
        padding: 2px;
        width: 150px;
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
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0px;
    margin-bottom: 20px;
  }
  .game-options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    button {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  @media (min-width: 768px) {
    max-width: 40vw;
    #button-wrapper {
      flex-direction: row;
    }
  }

  @media (min-width: 992px) {
    max-width: 30vw;
  }
`;

export default StyledTic;
