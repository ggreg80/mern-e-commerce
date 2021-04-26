import styled from 'styled-components';
import {List, Button, Card} from '@material-ui/core'

export const InfoContainer = styled(List)`
    width: 100%;
   
`
export const StyledButton = styled(Button)`
    background-color: black;
    color: white;
    text-align: center;

    & :hover{
        color: black;
        font-weight:bold;
    }

    
`
export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;
    > * {
        width: 65%;
    }
`

export const Container = styled.div`
    margin-top: 1.5rem;
    
`

export const AddToCartContainer = styled(Card)`
    
    padding: 1rem 1.5rem;

    > * {
        width: 100%;
        margin: 10px auto;
        text-align: center;
    }

`
