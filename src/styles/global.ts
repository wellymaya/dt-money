import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --background: #F0F2F5;
  --blue:  #5429CC;
  --blue-linear-gradient: linear-gradient(135deg, #8626d1 0%,  #5429cc 100%);
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

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    position: relative;
    padding: 3rem;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
