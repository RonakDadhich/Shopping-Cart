let label = document.getElementById('label')
let ShoppingCart = document.getElementById('shopping_cart')

let basket = JSON.parse(localStorage.getItem('data')) || []

let calculate = () => {
    let cartIcon = document.getElementById('cart_amount')
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}


let generate_Cart_item = () => {
    if(basket.length !== 0){
        return(ShoppingCart.innerHTML= basket.map((x)=>{

            let {id,name,price,item,desc,img} = x;

            return `
                <div class='cart_item'>
                    <p>${name}</p>
                    <div class="cart_item_img">
                        <img width='100px' src="${img}" alt="" />
                    </div>

                    <p>${price}</p>
                    <button class="rmv_btn" onclick = "remove_from_cart(${id})">Remove</button>
                </div>
            `
        })
        
        )
    }else {
        ShoppingCart.innerHTML = `<h3>Shopping cart is empty <i class="fa-solid fa-cart-shopping"></i></h3>`;
      }
}

generate_Cart_item()

calculate()

// =================remove_from_cart=================
let remove_from_cart = (id) => {
    
    basket = basket.filter((x) => x.id != id)
    localStorage.setItem('data',JSON.stringify(basket))
    calculate()
    generate_Cart_item()
}

// ================Total function================
let Total_amount = () => {
    let total_amount = 0
    basket.map((item) => {
        total_amount += item.item * item.price
    })

    label.innerHTML = `
        <div class='checkout_area'>
            <h2>Total Price : ${total_amount}</h2>
            <button class="update" onclick=window.location.reload()>Update</button>
            <button class="checkout" onclick=window.location.reload()>Checkout</button>
        </div>
    `
}
Total_amount()