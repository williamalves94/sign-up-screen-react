import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #b15fec;
    h1{
        font-size: 40px;
        margin-bottom: 30px;
    }
`;

export const SignUpDiv = styled.div`
    background-color: #fff;
    width: 400px;
    height: auto;
    border: none;
    text-align: center;
    flex-direction: column;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 0px 10px 40px #00000056;
`;

export const Form = styled.form`    
    input{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        border: none;
        border-radius: 12px;
        background-color: #4B0082;
        outline: none;
        padding: 5px;
        color: #fff;
        font-weight: 600;
        font-size: 15px;       
    }
`;

export const Checkbox = styled.div`

`;

export const ButtonSignUp = styled.button`
    width: 100%;
    height: 40px;
    background-color: #4B0082;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #fff;
    &:hover{
            background-color:#581688;
        }  

`;
