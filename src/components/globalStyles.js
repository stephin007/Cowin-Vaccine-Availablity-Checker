import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
}

p {
    color: ${({ theme }) => theme.text};
}

h3 a {
    color: ${({ theme }) => theme.text};
}

h4 {
    color: ${({ theme }) => theme.text};
}

.intro__homeText {
    border: 3px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
}

.header__leftImg {
    filter: invert(${({ theme }) => theme.invert});
}

.logo__img {
    filter: invert(${({ theme }) => theme.invert});
}
`;
