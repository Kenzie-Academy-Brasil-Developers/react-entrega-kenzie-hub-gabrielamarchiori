import styled from "styled-components"

export const DivLoad = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 100vw;
    height: 100vh;  

    h2 {
        color: var(--color-grey-0);
        font-size: 32px;  
    }
`

export const DivDash = styled.div `
    display:flex;
    flex-direction:column;

    margin-top:50px;
    height:100vh;  

    .container-dashboard {
        display:flex;
        flex-direction:column;
        align-items: center;  

        .dashboard-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 90%;
            max-width: 800px; 
        }

        .container-perfil {
            width:100%;
            display:flex;
            justify-content:center;

            margin-top:30px;
            margin-bottom:30px;

            border: 1px solid var(--color-grey-3);  

            .dashboard-perfil {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                gap: 10px;
                width: 90%;
                max-width: 800px;

                padding: 35px 10px;  

                h2 {
                    font-size: var(--font-title-1);
                    font-weight: var(--font-weigth-1);

                    color: var(--color-grey-0);  
                }

                p{
                    font-size: var(--font-text-2);
                    font-weight: var(--font-weigth-4);

                    color: var(--color-grey-1); 
                }

                @media (min-width: 769px) {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                        
                    gap: 10px;  
                }
            }
        } 

        .dashboard-info {
            gap: 2rem;
            display: none;
            flex-direction: column;
            width: 90%;
            max-width: 800px;
        
            padding-left: 0.8rem;
            padding-top: 0.8rem; 

            h2 {
                color: var(--color-grey-0);
                font-weight: var(--font-weigth-1);
                font-size: var(--font-title-1); 
            }

            p {
                color: var(--color-grey-0);
                font-weight: var(--font-weigth-4);
                font-size: var(--font-title-2);
            }

            @media (min-width:769px) {
                display: flex; 
            }
        }
    }
`