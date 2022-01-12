import styled from 'styled-components';

const StyledGameListItem = styled.div`
background: #24282f;
border-radius: 5px;
border: 1px solid #00FFFF;
display: flex;
flex-direction: column;
margin: 5px;
padding: 10px;
text-align: center;
a {
   text-decoration: none;
   h4 {
      color: #00FFFF;
      font-size: 32px;
      margin-bottom: 5px;
   }
}
p {
   color: #00FFFF;
   font-size: 24px;
}
:hover {
   h4 {
      font-size: 33px;
   }
   p {
      font-size: 25px;
   }
}
`

export default StyledGameListItem;