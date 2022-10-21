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
    }
`

export const DashInfo = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    max-width: 800px;

    .info-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 25px;

        p {
            color: var(--color-grey-0);
            font-weight: var(--font-weigth-2) ;
            font-size: var(--font-title-2);
        }

        .icon-plus {
            color: var(--color-grey-0);
            border-radius: var(--radius-1);
            background-color: var(--color-grey-3);
            padding: 10px;
        }
    }

    .info-tech {

        h2{
            color: var(--color-grey-0);
            text-align: center;
            font-size: var(--font-title-1);
        }
        .list-tech {
            color: var(--color-grey-0);
            background-color: var(--color-grey-3);
            border-radius: var(--radius-1);

            padding: 25px;

            li {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                padding: 13px 20px;
                background-color: var(--color-grey-4);
                margin-bottom: 25px;
                border-radius: var(--radius-1);

                :hover {
                    background-color: var(--color-grey-2);
                }

                p {
                    color: var(--color-grey-0);
                    font-weight: var(--font-weigth-1);
                    font-size: var(--font-text-1);
                }

                .status-tech {
                    display: flex;
                    gap: 25px;

                    span {
                        color: var(--color-grey-1);
                        font-weight: var(--font-weigth-4);
                        font-size: var(--font-text-2);
                    }

                    button {
                        background-color: var(--color-grey-4);
                        color: var(--color-grey-0);

                        :hover {
                            background-color: var(--color-grey-2);
                }
                    }

                    .icon-trash {
                        display: none;

                        @media (min-width: 769px) {
                            display: block;
                            
                        }
                    }
                }
            }
        }
    }
`