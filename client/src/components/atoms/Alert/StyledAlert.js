import styled from "styled-components";

const StyledAlert = styled.div`
  border: 1px solid ${(props) => props.color};
  padding: 10px;
  border-radius: 10px;
  color: ${(props) => props.color};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2px;
`;
export default StyledAlert;
