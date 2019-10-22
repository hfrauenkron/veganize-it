import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #242623;
  background: #D3E5CC;
}
`;

/*
#FFFFFF -white
#EDFFE6 -lightGreen
#D3E5CC -pistaccio
#E44346 -red
#BEBEBE -lightGrey
#242623 -lightBlack
*/
