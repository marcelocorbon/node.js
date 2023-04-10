const axios = require('axios');

const getRandomJoke = async () => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    const { type, setup, delivery, joke } = response.data;
    let jokeText = '';
    if (type === 'twopart') {
      jokeText = `${setup} \n${delivery}`;
    } else {
      jokeText = joke;
    }
    console.log(jokeText);
  } catch (error) {
    console.error(error);
  }
};

getRandomJoke();
