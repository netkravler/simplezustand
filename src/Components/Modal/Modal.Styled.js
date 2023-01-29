import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */

  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  display: ${(props) => (props.showmodal === "block" ? "grid" : "none")};
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;

  > main {
    display: grid;

    grid-template-rows: auto 1fr;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};

    padding: 0.5rem 1rem 1rem 1rem;
    border: 3px solid #888;
    width: 80%;
    margin: auto;

    > span {
      display: grid;
      justify-content: right;

      button {
        border: solid 2px #ccc;
        border-radius: 50%;
        text-align: center;
        padding: 2px;
        width: 30px;
        aspect-ratio: 1/1;
        color: #aaa;
        background-color: #fff;

        font-size: 20px;
        font-weight: bold;

        &:hover,
        &:focus {
          background-color: #ccc;
          color: #fff;
          cursor: pointer;
        }
      }
    }

    > div {
      margin-top: 0.5rem;
      border: solid 1px #ccc;
      border-radius: 3px;
      min-height: 2rem;
    }
  }
`;
