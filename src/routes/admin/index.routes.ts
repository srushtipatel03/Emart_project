import express from 'express';
import adminRoutes from './admin.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import wishlistRoutes from './wishlist.routes';
import reviewRoutes from './review.routes';

const adminsRoutes = express.Router();

adminsRoutes.use('/admin', adminRoutes);
adminsRoutes.use('/product', productRoutes);
adminsRoutes.use('/cart', cartRoutes);
adminsRoutes.use('/wishlist', wishlistRoutes);
adminsRoutes.use('/review', reviewRoutes);

export default adminsRoutes;