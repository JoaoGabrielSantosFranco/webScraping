window.onload = function () {
    // Faz uma solicitação HTTP GET para obter o valor de pageContent do servidor Node.js
    axios.get('http://localhost:3000')
        .then(response => {
            const pageContent = response.data;
            const div = document.getElementById("BTC");
            div.innerHTML = pageContent.BTC;
        })
        .catch(error => {
            console.error(error);
        });
};



