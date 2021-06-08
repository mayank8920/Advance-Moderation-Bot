const app = require('express')();

app.get('/', (req, res) => res.send('Moderation Bot Developed By Coding Wallah Youtube Channel Is Online '));

module.exports = () => {
  app.listen(3000);
}