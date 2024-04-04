import styled from "styled-components";

export const StyledConverterParaRomano = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: gray;

  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: gray;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .content {
      display: flex;
      flex-direction: column;
      background-color: #414141;
      margin-top: 10rem;
      padding-top: 40px;
      padding-bottom: 40px;
      width: 40%;
      border: 1px solid black;
      border-radius: 4px;
      .box {
        display: flex;
        padding: 0;
        justify-content: center;
        width: 100%;
        .button {
          margin-left: 5px;
          margin-right: 5px;
          height: 40px;
          width: 20%;
          background-color: #b705fd;
          border-radius: 4px;
          border-color: #ae00f3;
          cursor: pointer;
        }
        .button:hover {
          background-color: #a80be6;
        }
        .numberInput {
          width: 70%;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      .value {
        width: 30%;
        margin-left: 30px;
        margin-right: 20px;
      }
    }
  }
`;
