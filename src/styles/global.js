import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}

html, body, #root{
  height: 100%
}
input, select{
  appearance: none;
}

strong,p{
  letter-spacing: 0.5px;
}

:root {
  --primary-color: #068BF5;
  --background-color: #F9FBFD;
  --secondary-color: #efefef;
  --title-color: #3c4858;
  --title-color2: #8492a6;
  --text-color: #3c4858;
  --text-color2: #8492a6;
  --border-color: #201f1f17;
  --box-shadow-color: #eff0f4;
  --gradient-color: linear-gradient(180deg, #0FAFFf 0%, #1ab2ff 100%);
  --shadow-color: 0px 10px 30px #33bbff;
  --box-shadow: 0px 4px 8px #eff0f4;
  --box-shadow2: 0 0.75rem 1.5rem rgba(18,38,63,.03);
  --border-bottom: 1px solid var(--secondary-color) !important;
  

  /* font family variable */
  --roboto: 'Roboto';
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Roboto', sans-serif;
}

ul::-webkit-scrollbar {
  width: 0.25rem;
}

ul::-webkit-scrollbar-track {
  background: transparent;
}

ul::-webkit-scrollbar-thumb {
  background: var(--secondary-color);
}

button{
  cursor: pointer;
  outline:none !important;
}

a{
  text-decoration: none !important;
  color:inherit;
}
a:hover{
  color: inherit;
}


.button {
  padding: 0.8rem 2.2rem;
  font: normal 500 16px/20px var(--roboto);
  position: relative;
  border: 3px solid transparent;
  border-radius: 4px;
  background: transparent;
}

.secondary-button{
  background: var(--secondary-color);
}

.primary-button {
  background: var(--primary-color);
  color: whitesmoke;
  transition: border 1s cubic-bezier(.5,.01,.52,1), background 0.6s ease, color .8s cubic-bezier(.5,.01,.52,1);
  box-shadow: var(--box-shadow);
}

.btn-danger{
  color: #dc3545 !important;
  background-color: #fff !important;
  border: none !important; 
}



.button.primary-button::after,
.button.secondary-button::after {
  position: absolute;
  top: -2px;
  left: -2px;
  bottom: -2px;
  right: -2px;
  background: var(--gradient-color);
  content: '';

  z-index: -1;
  border-radius: 4px;
}

.card {
    border: 1px solid #F5F7FA;
    border-radius: .375rem;
    border: 1px solid #eff2f7;
    box-shadow: var(--box-shadow2);
    padding: 1rem 1.5rem;


  @media (max-width: 425px){
    padding: 1rem .5rem;
  }

  }

.list-group-item{
  padding: .5rem 1.5rem;
  margin-bottom: -1px !important;
  background-color: #fff;
  border-bottom: 1px solid #eff2f7 !important;
  border: 0px;
}

.adapter-text{
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65%;
}

.icon {
    padding: 1rem;
    border-radius: 50%;
    height: fit-content;
  }
  .purple {
    background: #f2ebfb;
  }

  .blue {
    background: #eef9ff;
  }

  .orange {
    background: #fef3ef;
  }

  .red {
    background: #ffeff2;
  }

.modal-component {
    width:fit-content;
    min-width:fit-content;
    background-color: #fff;
    border-radius:12px;
    z-index:110;
}
.overlay {
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(72, 72, 72, 0.75);
    z-index:100;
  }

.my-node-appear{
  opacity: 0;
  transform: scale(0.7);
}
.my-node-appear-active{
  opacity: 1;
  transform: translateX(0);
  transition: opacity 750ms, transform 750ms;
}
.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 750ms, transform 750ms;
}
.my-node-exit {
  opacity: 1;
  transform: scale(0.7);
}
.my-node-exit-active {
  opacity: 0;
  transform: scale(0);
  transition: opacity 750ms, transform 750ms;
}
`;

export default GlobalStyle;
