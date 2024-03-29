import styled from "styled-components";

export const ButtonRed = styled.button `
    
    padding: 1rem 0;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: var(--radius-1);

    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-size: var(--font-text-1);
    font-weight: var(--font-weigth-3);

    :hover {
        filter: brightness(50%);
    }
`

export const ButtonDarkRed = styled(ButtonRed)`

    background-color: var(--color-primary-negative);
    
`
export const ButtonGrey = styled(ButtonRed)`

    background-color: var(--color-grey-1);
`

