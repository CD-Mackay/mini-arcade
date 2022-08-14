import styled from "styled-components";

const StyledSidebar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    left: 0;
    padding-top: 50px;
    position: absolute;
    top: 0;
    width: ${(props) => (props.show === "/" ? "0px" : "140px")};
    Button {
      margin: 5px;
      width: 100%;
    }
    h4 {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }
`;

export default StyledSidebar;
