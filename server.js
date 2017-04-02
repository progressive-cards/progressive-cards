var Hapi = require('hapi');
var corsHeaders = require('hapi-cors-headers')
const Inert = require('inert');


const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 2442 });

server.ext('onPreResponse', corsHeaders)
server.register(Inert, () => {});

server.route([
    { method: 'GET', path: '/', config: { 
	    handler: { file: './rover.json' }
	  }
	},
    { method: 'GET', path: '/latest-deals', config: {
	    handler: { file: './latest-deals.json' }
	  }
	}
]);


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});