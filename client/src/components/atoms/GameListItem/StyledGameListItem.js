import styled from "styled-components";

const StyledGameListItem = styled.div`
  background: #24282f;
  border-radius: 5px;
  border: 1px solid #00ffff;
  padding: 5px;
  text-align: center;
  :hover {
    background: #323445;
  }
  .game-grid {
    display: flex;
    flex-direction: column;
  }
  .grid-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    svg {
      margin: 0 auto;
    }
  }
  a {
    text-decoration: none;
    h4 {
      color: #00ffff;
      font-size: 32px;
      margin-bottom: 5px;
    }
  }
  p {
    display: none;
  }

  @media (min-width: 576px) {
    padding: 15px;
  }

  @media (min-width: 768px) {
    .game-grid {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
    p {
      display: inline;
      color: #00ffff;
      font-size: 24px;
    }
  }
`;

export default StyledGameListItem;
