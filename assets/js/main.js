// ACCESSING THE DOM
const board = document.getElementById('d__frame');
const loaderContainer = document.getElementById('loader-container');


// Function that populate each person profile to the DOM
function get(data) {
    let tempInfo = '';
    for (index = 0; index < data.length; index++) {
        tempInfo += 
        `
            <div class="profile-card">
                <img 
                    src=${data[index].thumbnail === undefined ? data[index].squareImage : data[index].thumbnail} 
                    alt="${data[index].person.name}" 
                    style="width:100%"
                >
                <div class="profile-info">
                    <h1>${data[index].person.name}</h1>
                    <p class="title">CEO & Founder, ${data[index].source}</p>
                </div>
                <div style="margin: 24px 0;">
                    <b>Rank</b> <i>${data[index].rank}</i>
                </div>
                <p><button onClick=showProfile(${index})>View</button></p>
            </div>
                    `
                board.innerHTML = tempInfo;
            }
}


// Function the list and get response from the API
const fetchData=()=>{
    var errorOccur =  false;
    fetch('https://forbes400.herokuapp.com/api/forbes400?limit=100')
    .then(response => response.json())
    .then(data =>{
        get(data);
        loaderContainer.style.display = 'none';
    }) 
    .catch(err =>{
        console.error(err)
        loaderContainer.innerHTML = (`
        <i class="fas fa-spinner fa-pulse"></i>
        <span class="errorMessage">
            Error fetching data...check your internet connection
        </span> `);
    })
};


// Loading function that takes a callback
const loader=(cb)=>{
    loaderContainer.innerHTML = (`<i class="fas fa-spinner fa-pulse"></i>`);
    cb();
};

// Invoke loading function and pass fetchData function as callback
loader(fetchData)



// Search function
const lookUpName = () =>{

}