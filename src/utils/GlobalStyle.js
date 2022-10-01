import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  
}
ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
h1,
h2,
h3,
h4 {
  margin: 0;
}
p {
  margin: 0;
}
.gap {
  &-15 {
    gap: 15px;
  }
}
.loaderStyle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 1101;
}
.animated_background {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  z-index: -1;
}

.animated_background > video {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1920px;
}
@media (min-width: 1920px) {
  .animated_background > video {
    width: 100%;
  }
}
.loaderStyle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 1101;
}
.lockBody {
  overflow: hidden;
}

.centerItem {
  display: flex;
  flex-direction: column;
  align-items: center;

}

`;
