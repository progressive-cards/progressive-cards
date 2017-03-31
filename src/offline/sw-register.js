import runtime from 'serviceworker-webpack-plugin/lib/runtime';
let registration = null;

if ('serviceWorker' in navigator) {
  registration = runtime.register();
}

export default registration
  .then( instance => {
     instance.addEventListener('push', console.log );
  });

