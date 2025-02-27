import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStoe } from "@/stores/checkout-store";

export const generateMessage = () => {
    const { name, adress } = useCheckoutStoe(state => state);
    const { cart } = useCartStore(state => state);

    let orderProducts = [];
    for(let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`);
    }

    return `**DADOS DO CLIENTE**
Nome: ${name}
Endereço: ${adress.street}, ${adress.number}, (${adress.complement}), ${adress.district}, ${adress.city} - ${adress.state}  
=======
**PEDIDO**
${orderProducts.join("\n")}`;
}