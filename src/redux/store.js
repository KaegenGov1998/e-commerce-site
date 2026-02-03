import { setCart, selectCartItems, selectCartTotal } from '../redux/cartSlice';
import cartReducer from './cartSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
