import styled from 'styled-components';

const StyledLetterWrapper = styled.span`
border-bottom: 2px solid #00FFFF;
display: inline-block;
height: 50px;
margin: 5px;
width: ${props =>  1 / props.length * 80 }%;
  span {
    font-size: 42px;
    margin-bottom: 2px;
    padding: 12px;
    visibility: ${props => props.display === "true" ? "visible" : "hidden" };
  }
`


export default StyledLetterWrapper;