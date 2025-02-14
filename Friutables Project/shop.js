let proel = document.querySelector(".pross")
let fruit = [
    {
        id: 1,
        image: "images/fruite-item-5.jpg",
        name: "Grapes",
        price: 4.99,
        stock: 30,
        qty: 0
    },
    {
        id: 2,
        image: "images/fruite-item-2.jpg",
        name: "Raspberries",
        price: 5.93,
        stock: 23,
        qty: 0
    },
    {
        id: 3,
        image: "images/fruite-item-4.jpg",
        name: "Apricots",
        price: 3.97,
        stock: 21,
        qty: 0
    },
    {
        id: 4,
        image: "images/fruite-item-3.jpg",
        name: "Banana",
        price: 2.39,
        stock: 18,
        qty: 0
    },
    {
        id: 5,
        image: "images/fruite-item-1.jpg",
        name: "Oranges",
        price: 4.96,
        stock: 20,
        qty: 0
    },
    {
        id: 6,
        image: "images/featur-1.jpg",
        name: "Apples",
        price: 7.90,
        stock: 27,
        qty: 0
    },
    {
        id: 7,
        image: "images/featur-2.jpg",
        name: "Strawberry",
        price: 4.92,
        stock: 10,
        qty: 0
    },
    {
        id: 8,
        image: "images/fruite-item-5.jpg",
        name: "Grapes",
        price: 4.99,
        stock: 30,
        qty: 0
    },
    {
        id: 9,
        image: "images/fruite-item-2.jpg",
        name: "Raspberries",
        price: 5.93,
        stock: 23,
        qty: 0
    }


]
function displayprod() {
    fruit.forEach((f) => {
        proel.innerHTML += `
        <div class="col">
        <div class="card">
        <img src=${f.image} class="card-img-top h-100 w-100" alt="...">
        <div class="card-body text-center">
          <h4 class="card-title">${f.name}</h4>
          <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
          <h5>${f.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill">
            <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>`
    })
}
displayprod()