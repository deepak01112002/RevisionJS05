
fetch(`http://localhost:3000/products`)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    document.getElementById("box").innerHTML = view(res)
})
.catch((err)=>{
    console.log(err)
})

function view(arr){
     return arr.map((el)=>{
          return `<a href="singleProduct.html?id=${el.id}"><div>
              <img src="${el.image}" width="150px">
          </div></a>`
     }).join("")
}