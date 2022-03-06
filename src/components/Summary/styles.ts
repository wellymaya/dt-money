import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding:1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-ttile);
    box-shadow: 0 1px #c4c4c4;

    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

    &.highlight-background {
    background-color: var(--green)
  }
  }
`;