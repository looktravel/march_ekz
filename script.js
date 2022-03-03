

fetch('dbHeroes.json', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(response => response.json())
    .then(data => {

        let list = document.querySelector('.cards')
        let key;
        for( key in data){
            let deadClass = "";
            if(data[key].status === "deceased" ){
                deadClass = 'card_deceased'
            }
            list.innerHTML += `
                <div class="card ${deadClass}">
                    <img src="${data[key].photo}" alt="img" class="card_img">
                    <div class="card_text card_name">Name: ${data[key].name}</div>
                    <div class="card_text card_realName">Real Name:${data[key].realName}</div>
                    <div class="card_text card_species">species:${data[key].species}</div>
                    <div class="card_text card_citizenship">Citizenship:${data[key].citizenship}</div>
                    <div class="card_text card_gender">Gender: ${data[key].gender}</div>
                    <div class="card_text card_status">Status:${data[key].status}</div>
                    <div class="card_text card_actors">Actors: ${data[key].actors}</div>
                    <div class="card_text card_movies">Movies: ${data[key].movies}</div>
                </div>
              `
            
            
            
        }
    })


// console.log(heros);