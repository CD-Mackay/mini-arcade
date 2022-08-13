import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.location === "/" ? "center" : "space-between"};
  margin: 0 auto;
  text-align: center;
  width: 100vw;
  h1 {
    font-size: 42px;
    padding: 10px;
  }

  .nav {
    display: flex;
    flex-shrink: 3;
    gap: 10px;
  }

  .drop-wrapper {
    display: none;
    Button {
      margin: 0 auto;
    }
    a {
      margin: 0 auto;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    Button {
      margin: 0 auto;
    }
    a {
      margin: 0 auto;
    }
  }

  @media (min-width: 576px) {
    width: 90vw;
    .drop-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default StyledHeader;
