
async function chamada() {
    const APIBase = 'http://localhost:3000/userRoute'

    const response = await fetch(APIBase, { cache: 'no-cache' })
    const data = await response.json()
    return data
}



window.onload = function () {


    // const div = document.getElementById("BTC");
    // div.innerHTML = Home();
    
    fetch('http://localhost:3000/userRoute')
        .then(res => res.json())
        .then(res => console.log(res));

};