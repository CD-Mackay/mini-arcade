
   
import styled from 'styled-components';

const StyledTutorial = styled.section`
border: 1px dotted #00FFFF;
margin: 0 auto;
padding: 10px;
text-align: center;
width: 90vw;
h2 {
  font-size: 32px;
}
div {
  padding: 10px;
  text-align: left;
  h4 {
    font-size: 28px;
    margin-bottom: 5px;
    text-decoration: underline;
  }
  p {
    font-size: 20px;
  }
  a {
    border: 1px solid #00FFFF;
    border-radius: 10px;
    color: #00FFFF;
    font-size: 24px;
    padding: 5px;
    text-decoration: none;
  }
}

@media (min-width: 1200px) {
  max-width: 1200px;
}
`

export default StyledTutorial;