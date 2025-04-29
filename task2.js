async function display() {
    let data = await fetch("https://dummyjson.com/products")
    let data2 = await data.json()
    let data3 = data2.products
    console.log(data3)



    const cardsdata = document.getElementById("dummycards")
    cardsdata.innerHTML = "";
    // const finaldata = data3;
    // console.log(finaldata);


    data3.forEach(a => {
        let card = document.createElement("div");
        card.id="cards"
        card.innerHTML = `
        <img src=${a.images} width="200"/>
        <h3>${a.title}</h3>
        <h4>${a.price}</h4>
        `

        cardsdata.appendChild(card)
    });
}

async function fackstore(){
    let dta=await fetch("https://fakestoreapi.com/products")
    let dta2=await dta.json()
    console.log(dta2)
    const finaloutput=dta2
    console.log(finaloutput)


    const fackstore=document.getElementById("dummycards")
    fackstore.innerHTML=""

    finaloutput.forEach(b=>{
        let cards=document.createElement("div")
        cards.id="cards"
        cards.innerHTML=`
        <img src=${b.image} width="200"/>
        <h3>${b.title}</h3>
        <h4>${b.price}</h4>
        `
        fackstore.appendChild(cards)
    })

}

