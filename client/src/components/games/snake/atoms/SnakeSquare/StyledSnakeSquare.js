import styled from "styled-components";

const StyledSnakeSquare = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.status === "snake"
      ? "blue"
      : props.status === "apple"
      ? "red"
      : "green"};
`;

export default StyledSnakeSquare;
