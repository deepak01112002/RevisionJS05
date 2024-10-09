

function render() {

    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`http://localhost:3000/products?id=${id}`)
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

function view(arr){
    return `<div>
          <img src="${arr[0].image}" width="150px">
    </div>`
}

render()