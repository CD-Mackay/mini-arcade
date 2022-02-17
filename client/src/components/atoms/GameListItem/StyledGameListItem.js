import styled from 'styled-components';

const StyledGameListItem = styled.div`
background: #24282f;
border-radius: 5px;
border: 1px solid #00FFFF;
display: flex;
flex-direction: column;
padding: 15px;
text-align: center;
a {
   text-decoration: none;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
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
   background: #323445;
}
`

export default StyledGameListItem;