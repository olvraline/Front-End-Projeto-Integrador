$(() => {
    $(".add-to-cart-button").click(() => {
        const productJson = {
            name: $(".product-name")[0].innerHTML,
            originalPrice: parseFloat($(".product-original-price")[0].innerHTML.replace(",", ".")),
            price: parseFloat($(".product-price")[0].innerHTML.replace(",", ".")),
            discountPercentage: $(".discount-tag")[0].innerHTML,
            quantity: parseInt($(".product-quantity-setter")[0].value),
            freight: parseFloat($(".product-freight")[0].innerHTML.replace(",", ".")),
            volunteers: parseInt($(".product-volunteers")[0].innerHTML) + 1,
            volunteersNeeded: $(".product-volunteers-needed")[0].innerHTML
        }
        productJson.totalPrice = (productJson.price * productJson.quantity) + productJson.freight;
        console.log(productJson)
    })

    $(".buy-button").click(() => {
        const productJson = {
            name: $(".product-name")[0].innerHTML,
            originalPrice: $(".product-original-price")[0].innerHTML.replace(",", "."),
            price: $(".product-price")[0].innerHTML.replace(",", "."),
            discountPercentage: $(".discount-tag")[0].innerHTML,
            quantity: $(".product-quantity-setter")[0].value,
            freight: $(".product-freight")[0].innerHTML.replace(",", "."),
            volunteers: String(parseInt($(".product-volunteers")[0].innerHTML) + 1),
            volunteersNeeded: $(".product-volunteers-needed")[0].innerHTML
        }
        console.log(productJson)
    })
})