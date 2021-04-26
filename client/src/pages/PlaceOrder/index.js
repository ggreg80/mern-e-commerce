import { Button, ButtonBase, Card, CardContent, Container, Divider, Grid, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useSelector } from 'react-redux';
import StepperNav from '../../components/StepperNav'
import { OrderItem, ShippingMessage, SummaryItem } from './PlaceOrder.elements';

const PlaceOrder = () => {

    const cart = useSelector( state => state.cart );

    cart.itemsPrice = cart.cartItems.reduce( (acc,item) => acc + item.price * item.qty , 0).toFixed(2)

    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10

    return (
        <div className='placerorder-page'>
            <StepperNav stepNumber={3} />
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <h3>SHIPPING</h3>
                    <p>
                        <strong>Address: </strong>
                        {`${cart.shippingAddress.address}, ${cart.shippingAddress.city}, ${cart.shippingAddress.postalcode} ${cart.shippingAddress.country}`
                        }
                    </p>
                    <Divider />
                    <h3>PAYMENT</h3>
                    <p>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </p>
                    <Divider />
                    <h3>Order Items</h3>
                    {
                        cart.cartItems.length === 0 ? <Alert>Your Cart is Empty</Alert> :
                        
                            cart.cartItems.map( item => (
                                <>
                                <OrderItem>
                                    <img style= {{width: '50px'}} src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{`${item.qty} x ${item.price} = ${item.qty*item.price}`}</p>
                                </OrderItem>
                                <Divider />
                                </>
                                ))
                    }
                </Grid>
                <Grid item xs={12} md={4}>
                    <Container>
                    <Card>
                        <CardContent>
                        <h3>ORDER SUMMARY</h3>
                        <Divider/>
                        <SummaryItem>Items:  <strong>${cart.itemsPrice}</strong></SummaryItem>
                        <SummaryItem>Shipping:  <strong>${cart.shippingPrice}</strong></SummaryItem>
                        <SummaryItem>Total:  <strong>${cart.itemsPrice + cart.shippingPrice}</strong></SummaryItem>
                        <ShippingMessage>(Orders above $100 have free shipping)</ShippingMessage>
                        <Divider />
                        <Button>PLACE ORDER</Button>
                        </CardContent>
                    </Card>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlaceOrder;
