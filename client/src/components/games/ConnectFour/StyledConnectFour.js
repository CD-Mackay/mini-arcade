import styled from "styled-components";

const StyledConnectFour = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  #game-wrapper {
    text-align: center;
    border: 1px solid #00ffff;
    padding: 10px;
    margin-bottom: 10px;
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

  #setup-wrapper {
    button {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

export default StyledConnectFour;
