import styled from 'styled-components';

const StyledTutorialHeader = styled.div`
width: 90vw;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 20px;

a {
  font-size: 24px;
  text-decoration: none;
  color: #00FFFF;
  border: 1px solid #00FFFF;
  border-radius: 10px;
  padding: 5px;
}
div {
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
    padding-top: 5px;
    margin-right: 5px;
  }
  a {
    margin-right: 5px;
  }
}

@media (min-width: 576px) {
  div {
    flex-direction: row;
    margin: 0 auto;
  }
}
`

export default StyledTutorialHeader;