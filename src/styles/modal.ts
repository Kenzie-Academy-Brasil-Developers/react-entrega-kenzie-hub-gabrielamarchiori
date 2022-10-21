import styled from "styled-components";

export const DivModal = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 101;

    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .35);

        .screen-modal {
            width: 90%;
            max-width: 400px;
            position: relative;
            display: flex;
            justify-content: center;

            .my-modal {
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: var(--color-grey-3);
                border-radius: var(--radius-1);

                .modal-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                width: 100%;
                padding: 10px 16px;
                background-color: var(--color-grey-2);
                border-radius: 4px 4px 0px 0px;

                margin-bottom: 15px;

                h3 {
                    color: var(--color-grey-0);
                    font-weight: var(--font-weigth-1);
                    font-size: var(--font-text-1);
                }
                .icon-close {
                    color: var(--color-grey-1);
                    height: 25px;
                }
            }
            }

            
        }
    }
`