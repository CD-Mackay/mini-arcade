import styled from "styled-components";

const StyledSidebar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: ${(props) => (props.show === "/" ? "0px" : "140px")};
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    Button {
      width: 100%;
      margin: 5px;
    }
    h4 {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }
`;

export default StyledSidebar;
