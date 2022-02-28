import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --background: #F0F2F5;
  --blue:  #5429CC;
  --blue-light: #6933ff;
  --green: #33CC95;
  --red: #E52E4D;

  --shape: #ffffff;
  --text-title: #363F5F;
  --text-body: #969CB2;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html { 
    @media(max-width: 1080px) {
      font-size: 93.75; //15px
    }
    @media(max-width: 720px) {
      font-size:87.5%; //14px
    }
  }

  body{
    background-color: var(---background);
    --webkit-font-smoothing: antialiased;
    font-family: 'Poppins';
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  } 



`