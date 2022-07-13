
   
import styled from 'styled-components';

const StyledTutorial = styled.section`
width: 90vw;
border: 1px dotted #00FFFF;
margin: 0 auto;
padding: 10px;
text-align: center;
h2 {
  font-size: 32px;
}
div {
  padding: 10px;
  text-align: left;
  h4 {
    font-size: 28px;
    text-decoration: underline;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
  }
  a {
    font-size: 24px;
    text-decoration: none;
    color: #00FFFF;
    border: 1px solid #00FFFF;
    border-radius: 10px;
    padding: 5px;
  }
}



@media (min-width: 1200px) {
  max-width: 1200px;
}
`

export default StyledTutorial;