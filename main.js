

//  #api importeren# //
const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/197';
 
const myURL = baseURL + endpointMe;

async function getData(URL) {
    return fetch(URL)
        .then(response => response.json())
        .then(jsonData => jsonData.data); // Zorg dat we direct bij de 'data' eigenschap komen

}

// #api importeren# //
// naam //

getData(myURL).then(data => {
    console.log(data);
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Good Morning, ${data.data.name}!`;
});

// avatar //
getData(myURL).then(data => {
    console.log(data);
    const avatarImg = document.getElementById("avatar");
    avatarImg.src = data.data.avatar;
});


async /*9*/ function getData(URL) {
    return ( //8
        fetch(URL) //1
            .then( //2
                response /*3*/ => response.json() //4
            )
            .then( //5
                jsonData /*6*/ => { return jsonData } //7
            )
    );
}


