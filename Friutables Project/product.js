let subtotalel = document.getElementById("subtot")
let totalel = document.querySelector("sup")
const items=[
    {
        id:1,
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:2,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:23,
        qty:0
    },
    {
        id:3,
        image:"images/fruite-item-4.jpg",
        name:"Apricots",
        price:3.97,
        stock:21,
        qty:0
    },
    {
        id:4,
        image:"images/fruite-item-3.jpg",
        name:"Banana",
        price:2.39,
        stock:18,
        qty:0
    },
    {
        id:5,
        image:"images/fruite-item-1.jpg",
        name:"Oranges",
        price:4.96,
        stock:20,
        qty:0
    },
    {
        id:6,
        image:"images/featur-1.jpg",
        name:"Apples",
        price:7.90,
        stock:27,
        qty:0
    },
    {
        id:7,
        image:"images/featur-2.jpg",
        name:"Strawberry",
        price:4.92,
        stock:10,
        qty:0
    },
    {
        id:8,
        image:"images/featur-3.jpg",
        name:"Brocolli",
        price:1.30,
        stock:9,
        qty:0
    },
    {
        id:9,
        image:"images/vegetable-item-1.jpg",
        name:"Tomatoes",
        price:2.99,
        stock:24,
        qty:0
    },
    {
        id:10,
        image:"images/vegetable-item-4.jpg",
        name:"Capsicum",
        price:3.99,
        stock:25,
        qty:0
    },
    {
        id:11,
        image:"images/vegetable-item-5.jpg",
        name:"Potatoes",
        price:5.99,
        stock:20,
        qty:0
    },
    {
        id:12,
        image:"images/vegetable-item-6.jpg",
        name:"Parsely",
        price:3.69,
        stock:21,
        qty:0
    },
    {
        id:13,
        image:"images/bread-item-1.jpg",
        name:"Garlic Bread",
        price:2.57,
        stock:13,
        qty:0
    },
    {
        id:14,
        image:"images/bread-item-1.jpg",
        name:"Roasted Bread",
        price:3.45,
        stock:10,
        qty:0
    },
    {
        id:15,
        image:"images/meat-1.jpg",
        name:"Mixed Salad",
        price:1.57,
        stock:12,
        qty:0
    },
    {
        id:16,
        image:"images/meat-2.jpg",
        name:"Chicken Masala",
        price:3.57,
        stock:15,
        qty:0
    }
]
let productel=document.querySelector('.products')
console.log(productel)
function displayproducts()
{
    items.map((prod)=>{
        productel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill"
                   onclick=addtocart(${prod.id})>
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayproducts()
let vegesel=document.querySelector('.veges')
console.log(vegesel)
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        vegesel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayveges()
let fruitel=document.querySelector('.fruites1')
console.log(fruitel)
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayfruits()
let breadel=document.querySelector('.bread1')
console.log(breadel)
function displaybread()
{
    items.slice(12,14).map((prod)=>{
        breadel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybread()
let meatel=document.querySelector('.meat1')
console.log(meatel)
function displaymeat()
{
    items.slice(14,16).map((prod)=>{
        meatel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaymeat()

let bestprod=document.querySelector('.bestprod25')
let bestfruits = [
{
    id:1,
    image:"images/best-product-1.jpg",
    name:"Oranges",
    price:4.99,
    stock:30,
    qty:0
},
{
    id:2,
    image:"images/best-product-2.jpg",
    name:"Raspberries",
    price:5.93,
    stock:23,
    qty:0
},
{
    id:3,
    image:"images/best-product-3.jpg",
    name:"Banana",
    price:3.97,
    stock:21,
    qty:0
},
{
    id:4,
    image:"images/best-product-4.jpg",
    name:"Appricotts",
    price:2.39,
    stock:18,
    qty:0
},
{
    id:5,
    image:"images/best-product-5.jpg",
    name:"Apples",
    price:4.96,
    stock:20,
    qty:0
},
{
    id:6,
    image:"images/best-product-6.jpg",
    name:"Apples",
    price:7.90,
    stock:27,
    qty:0
}
]
console.log(bestprod)
function displaybest()
{
    bestfruits.map((prod)=>{
        bestprod.innerHTML+=`
        <div class="col">
        <div class="card mb-3 p-4 rounded bg-light" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-6">
              <img src=${prod.image} class="img-fluid rounded-circle" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i>
                </p>
                <p class="card-text">${prod.price}</p>
                <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                  <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
}
displaybest()
let bestprodel4 = document.querySelector('.prodbest4')
function displayprodbest()
{
    bestfruits.slice(0,4).map((prod)=>{
        bestprodel4.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5"> 
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i></p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayprodbest()

let cart = JSON.parse(localStorage.getItem("Cart"))||[]
updatecart()
function addtocart(id)
{
  if(cart.some((itm)=>itm.id==id))
  {
    changeqty("plus",id)
  }
  else
  {
      const p = items.find((prod)=>prod.id===id)
      cart.push({
        ...p,
        qty:1
      })
      console.log(cart)
      // localStorage.setItem("Cart",JSON.stringify(cart))
  }
  updatecart()
}

function updatecart() {
  displaycartitem()
  rendersubtotal()
  localStorage.setItem("Cart", JSON.stringify(cart))
}
// totalel.innerHTML = cart.length

let cartel = document.getElementById("cartitem")
console.log(cartel)
function displaycartitem() {
  cart.map((c) => {
    cartel.innerHTML += ` 
    <tr>
    <td><img src=${c.image} height=80 width=80</td>
    <td>${c.name}</td>
    <td>${c.price}</td>
    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle " viewBox="0 0 16 16" onclick="changeqty('minus',${c.id})">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>${c.qty}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${c.id})">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></td>
    <td>${c.price}</td>
    <td><i class="fa-solid fa-trash text-danger fs-4" onclick="removeprod(${c.id})"></i></td></tr>`
  })
}
displaycartitem()
function changeqty(action,id)
{
  cart=cart.map((c)=>{
    let qty=c.qty
    console.log("Quantity",c.qty,"Stock",c.stock)
    if(c.id===id)
    {
      if(action==="minus" && qty>1)
      {
        qty--
      }
      else if(action==="plus" && qty<c.stock)
      {
        qty++
      }
    }
    return {
      ...c,
      qty
    }
  })
  updatecart()
}
function removeprod(id)
{
  cart=cart.filter((item)=>item.id!==id)
  updatecart()
}

function rendersubtotal()
{
  let totalprice=0,totalitems=0;
  cart.forEach((item)=>{
    totalprice+=item.price*item.qty;
    totalitems+=item.qty;
  });
  subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
  totalel.innerHTML = totalitems;
}


