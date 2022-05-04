import styled from 'styled-components';

const StyledSnakeGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
.game-square {
  width: 100%;
  height: 80px;
  border: 1px solid #00FFFF;
}

`

export default StyledSnakeGrid;