import styled from 'styled-components';

const StyledSnakeGrid = styled.div`
width: 400px;
height: 400px;
display: flex;
flex-wrap: wrap;
border: 2px solid #00FFFF;
.game-square {
  width: 40px;
  height: 40px;
}

.snake {
  color: blue;
}

.apple {
  color: red;
}

`

export default StyledSnakeGrid;