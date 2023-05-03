import config from './config.json';

const key = config.key;
const token = config.token;

fetch(`https://api.trello.com/1/boards/sD0pDTh4/cards?key=${key}&token=${token}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})

  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    data.forEach(task => {
      console.log(task);
    });
  })
  .catch(error => console.log(error));

  // see annab kõik kaartidega seotud info
