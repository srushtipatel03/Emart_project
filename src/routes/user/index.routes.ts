import express from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import wishlistRoutes from './wishlist.routes';
import cartRoutes from './cart.routes';
import orderRoutes from './order.routes';
import reviewRoutes from './review.routes';
import contactRoutes from './contact.routes';

const usersRoutes = express.Router();

usersRoutes.use('/user', userRoutes);
usersRoutes.use('/product', productRoutes);
usersRoutes.use('/wishlist', wishlistRoutes);
usersRoutes.use('/cart', cartRoutes);
usersRoutes.use('/order', orderRoutes);
usersRoutes.use('/review', reviewRoutes);
usersRoutes.use('/contact', contactRoutes);

export default usersRoutes;