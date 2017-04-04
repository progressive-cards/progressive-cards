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
    { method: 'GET', path: '/notification/4444', config: {
	    handler: { file: 'docs/index.html' }
	  },
    { method: 'GET', path: '/deal/4444', config: {
	    handler: { file: 'docs/index.html' }
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