const server = require('./server');
const router = require('./router');
const { start, upload } = require('./requestHandlers');

const handle = {
  '/': start,
  '/start': start,
  '/upload': upload,
};

server.start(router.route, handle);

