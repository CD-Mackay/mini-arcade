import styled from 'styled-components';

const StyledGameListItem = styled.div`
background: #24282f;
border-radius: 5px;
border: 1px solid #00FFFF;
padding: 15px;
text-align: center;
.game-grid {
   display: grid;
   grid-template-columns: 4fr 1fr;
}
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
   background: #323445;
}
`

export default StyledGameListItem;