function FetchingData() {
    fetch(`http://localhost:3000/cart`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.getElementById("box").innerHTML = view(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

function view(arr) {
    return arr.map((el) => {
        return `<div>
              <img src="${el.image}" width="150px">
              <button>-</button> <input value="${el.quantity}" disabled> <button>+</button>
              <button onclick="DeleteData(${el.id})">Delete</button>
          </div>`
    }).join("")
}


function DeleteData(id){
    fetch(`http://localhost:3000/cart/${id}`,{
        method : "DELETE"
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            FetchingData()
        })
        .catch((err) => {
            console.log(err)
        })
}

FetchingData()