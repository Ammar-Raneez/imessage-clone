import styled from "styled-components";

export const ChatWrapper = styled.div `
    display: flex;
    flex-direction: column;
    flex: 0.65;
    height: 100vh;
    background-color: white;

    > .chat__header {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        background-color: #f5f5f5;
    }

    > .chat__header > h4 {
        font-weight: 500;
        color: gray;
    }

    .chat__name {
        color: black;
    }

    .chat__input {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-top: 1px solid lightgray;
        background-color: #f5f5f5;
    }

    .chat__input > form {
        flex: 1;
    }

    .chat__input > form > input {
        width: 100%;
        outline-width: 0;
        border: 1px solid lightgray;
        border-radius: 999px;
        padding: 5px;
    }

    .chat__input > form > button {
        display: none;
    }

    .chat__messages {
        flex: 1;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .chat__messages::-webkit-scrollbar {
        display: none;
    }
`