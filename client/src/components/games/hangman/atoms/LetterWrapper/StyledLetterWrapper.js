import styled from 'styled-components';

const StyledLetterWrapper = styled.div`
margin: 5px;
border-bottom: 2px solid #00FFFF;
width: 70px;
height: 100px;
  p {
    font-size: 42px;
    display: ${props => props.display === "true" ? "block" : "none" };
    margin-bottom: 2px;
    padding: 12px;
  }

`


export default StyledLetterWrapper;