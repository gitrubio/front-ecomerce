export function formatPrice(price: number = 0) {
    const priceFormated = new Intl.NumberFormat('es-ES', {
        style: "currency",
        minimumFractionDigits: 0,
        currency: "COP"
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}