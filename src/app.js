const app = require('express')();
const http = require('http');
const bodyParser = require('body-parser');

const port = 3000;
app.set('port', port);

app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(port, () => {
  console.debug(`Server running on port ${port}`);
});