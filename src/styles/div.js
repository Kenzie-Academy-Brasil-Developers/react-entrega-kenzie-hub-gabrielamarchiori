import styled from "styled-components";

export const DivForm = styled.div `
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);

    margin-bottom: 1.5rem;

    h2 {
        color: var(--color-grey-0);
        font-size:var(--font-text-1);
        font-weight: var(--font-weigth-1);

        margin-bottom: 20px;
        margin-top: 2rem;   
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%; 
    }

    label {
        font-size: var(--font-text-3);
        font-weight: var(--font-weigth-4);
        color: var(--color-grey-0);

        margin-bottom: 1rem;
    }

    input, select {

        padding: 0.8rem 0.3125rem;
        width: 100%;
        margin-bottom: 1.4rem;
        
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);

        background-color: var(--color-grey-2);

        font-size: var(--font-text-1);
        color: var(--color-grey-0);
    }

    input::placeholder {

       font-size: var(--font-text-1);
       color: var(--color-grey-0);
    }

    span {
        color: var(--color-grey-1);
        font-weight: var(--font-weigth-3);
        font-size: var(--font-text-3);
        text-align: center;

        margin-bottom: 1.25rem;
    }
`

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;

    margin-bottom: 2rem;

    img{
        width: 100px;
        height: 17px;
    }
`