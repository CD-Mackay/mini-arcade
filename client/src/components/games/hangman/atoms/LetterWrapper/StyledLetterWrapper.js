import styled from 'styled-components';

const StyledLetterWrapper = styled.span`
margin: 5px;
border-bottom: 2px solid #00FFFF;
width: ${props =>  1 / props.length * 80 }%;
height: 50px;
display: inline-block;
  span {
    font-size: 42px;
    visibility: ${props => props.display === "true" ? "visible" : "hidden" };
    margin-bottom: 2px;
    padding: 12px;
  }
`


export default StyledLetterWrapper;