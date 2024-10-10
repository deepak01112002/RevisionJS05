

function render() {

    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`http://localhost:3000/products?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.getElementById("box").innerHTML = view(res)
            document.getElementById("btn").addEventListener("click",()=>{
                fetch(`http://localhost:3000/cart?id=${id}`)
                .then((Res)=>Res.json())
                .then((Res)=>{
                    if(Res.length > 0){
                        alert("Item is Already Present")
                    }else{
                        PostData(res[0])
                        
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })


}

function view(arr){
    return `<div>
          <img src="${arr[0].image}" width="150px">
          <button id="btn">Add To Cart</button>
    </div>`
}

function PostData(data){
   fetch(`http://localhost:3000/cart`,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({...data,quantity : 1})
   })
   .then((Res)=>Res.json())
   .then((res)=>{
    alert("Data Added Successfully")
   })
   .catch((Err)=>{
    console.log(Err)
   })
}




render()