import styled from 'styled-components';

const StyledSidebar= styled.div`
position: absolute;
left: 0;
top: 0;
height: 100vh;
border-right: 1px solid #00FFFF;
width: ${props => props.show === "/" ? "0px" : "100px"};
`

export default StyledSidebar;