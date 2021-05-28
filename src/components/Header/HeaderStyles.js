import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${({ theme }) => theme.btnColor};
    color: ${({ theme }) => theme.btnColor};
    margin: 0 1em;
    padding: 0.25em 1em;
`