const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(`A API retornou ${response.data.length} posts.`);
    console.log(`O primeiro post tem o título: "${response.data[0].title}".`);
  })
  .catch(error => {
    console.log(error);
  });
