import { OrderType } from "@/types/order";
import { ProductType } from "@/types/product";

export const sendToWhatsApp = (order: OrderType, products: ProductType[]) => {
        const phone = "573245766090"; // Teléfono del negocio, con código de país

        const shippingInfo = `📦 Envío a:\n  Nombre: ${order.NameCustomer}\n  📧Email: ${order.emailCustomer}\n  Teléfono: ${order.PhoneCustomer}\n  Dirección: ${order.AddressCustomer}\n`;
      
        const productLines = products.map((item, index) =>
          `#${index + 1} slug:${item.slug}\n ${item.productName}\n  Categoria: ${item.category.categoryName}`
        );
      
        const fullMessage = `¡Hola! 👋\nQuisiera realizar el siguiente pedido:\n\n${shippingInfo}\n\n🛍️ Productos:\n\n${productLines.join('\n\n')}\n\nGracias. Quedo atento(a) a tu confirmación.`;
      
        const encodedMessage = encodeURIComponent(fullMessage);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;
      
        window.open(url, '_blank');
      };
      