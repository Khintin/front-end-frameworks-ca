import { create } from 'zustand';

export const useCartStore = create((set) => ({

    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (id) => set((state) => {
        const duplicate = state.cart.findIndex((entry) => entry.id === id);

        if (duplicate !== -1) {
            const newCart = [...state.cart];
            newCart[duplicate].count += 1;
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        }
        else {
            const newCart = { cart: [...state.cart, { id: id, count: 1 }] };
            localStorage.setItem("cart", JSON.stringify(newCart.cart));
            return newCart;
        }
    }),
    clearCart: () => set(() => {
        localStorage.removeItem("cart");
        return { cart: [] };
    }),
    getCart: () => { return useCartStore.getState().cart },
    getItemCount: () => {
        let cart = useCartStore.getState().cart;
        let count = 0;
        cart.forEach(item => {
            count += item.count;
        });

        return count;
    }

}));