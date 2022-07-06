var btns = document.querySelectorAll('.bi')
var decrement = document.querySelectorAll('.increase')
var totalCart = document.getElementById('cart-amt')
var quantity = document.querySelectorAll('.quantity')
let counts = 0
let cartCount1 
let cartCount2 
btns.forEach(btn => {
    let count = 1

    btn.addEventListener('click', function (e) {
        if (e.target.classList.contains('bi-dash-lg')) {
            let item = e.target.parentElement.nextElementSibling 
        console.log(item);
        count = item.innerText
        console.log(count);
        if (count <= 0) {
            item.innerText = 0
        }
        else{
            item.innerText = count - 1
        counts = item.innerText
        itemCart1 = 1
        cartCount1 = parseInt(itemCart1)
        console.log(cartCount1);
    //     totalCart.innerText = item.innerText
    // console.log(totalCart);
        }
           
    }
    if (e.target.classList.contains('bi-plus-lg')) {
    
       console.log('hi');
      let item = e.target.parentElement.previousElementSibling 
      count = parseInt(item.innerText)
      console.log(item);
      console.log(count);
      item.innerText = count + 1
      itemCart2 = item.innerText
      cartCount2 = parseInt(itemCart2)
      console.log(cartCount2);
      totalCart.innerText = item.innerText
      console.log(totalCart);
    }
})
    
});
    // increment.forEach(increase => {
    //     let count = 1
    //     increase.addEventListener('click', function (e) {
    //         e.preventDefault
    //         console.log('hello');
            
    //     })
        
    // });