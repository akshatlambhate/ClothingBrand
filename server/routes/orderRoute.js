import express from 'express'
import {placeOrder, placeOrderRazorpay, allOrders,placeOrderStripe,updateStatus,userOrders, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js';
const orderRouter = express.Router();

//admin features
orderRouter.post('/status',adminAuth,updateStatus);
orderRouter.post('/list',adminAuth,allOrders);
//payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razoypay',authUser,placeOrderRazorpay);
//User Features
orderRouter.post('/user-orders',authUser,userOrders);

orderRouter.post('/verifyStripe',authUser, verifyStripe);

export default orderRouter