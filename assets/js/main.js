const board = document.getElementById('d__frame');
function get(data) {
    console.log(data)
    
    let tempInfo = '';
    for (index = 0; index < data.length; index++) {
        tempInfo += 
        `
            <div class="profile-card">
                <img src=${data[index].thumbnail} alt="${data[index].person.name}" style="width:100%">
                <div class="profile-info">
                    <h1>${data[index].person.name}</h1>
                    <p class="title">CEO & Founder, ${data[index].source}</p>
                    </div>
                    <div style="margin: 24px 0;">
                    <b>Rank</b> <i>${data[index].rank}</i>
                    </div>
                    <p><button>View</button></p>
                    </div>
                    `
                board.innerHTML = tempInfo;
            }
}
fetch('https://forbes400.herokuapp.com/api/forbes400?limit=100')
.then(response => response.json())
.then(data =>{
        get(data)
    }) 
    .catch(err => console.error(err));
    