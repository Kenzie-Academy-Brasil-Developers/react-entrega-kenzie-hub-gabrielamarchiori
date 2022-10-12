import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkHeader = styled(Link) `
    padding: 0.4rem 1rem;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);

    color: var(--color-grey-0);
    font-size: var(--font-text-2);
    font-weight: var(--font-weigth-2);
`

export const StyledLinkRegister = styled(Link)`
    padding: 1rem 0;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: var(--radius-1);

    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    font-size: var(--font-text-1);
    font-weight: var(--font-weigth-3);
`