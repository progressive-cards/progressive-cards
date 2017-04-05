var Hapi = require('hapi');
var corsHeaders = require('hapi-cors-headers')
const Inert = require('inert');


const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 2442 });

server.ext('onPreResponse', corsHeaders)
server.register(Inert, () => {});

server.route([
    { method: 'GET', path: '/{param*}', config: {
	    handler: { directory: { path: 'docs', listing: true, index: true } }
	  }
	},
    { method: 'GET', path: '/latest-deals', config: {
	    handler: { file: './latest-deals.json' }
	  }
	}
]);

// return index.html for everything else
server.ext('onPostHandler', (request, reply) => {
  console.log('WORD');
  const response = request.response;
  if (response.isBoom && response.output.statusCode === 404) {
    return reply.file('docs/index.html');
  }
  return reply.continue();
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});