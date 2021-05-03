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

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    padding: 10px;

    & > h4{
        margin: 0;
    }

    & > .MuiRating-root{
        margin: 12px;
    }

    & > h5{
        margin: 0px 0 5px 15px;
        font-size: 15px;
        font-weight: 550
    }

`

