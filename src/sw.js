import sw from 'sw-toolbox'
import pushImage from 'assets/flight_delay.png'

sw.router.get(/.(js|css|jpg|png|gif)$/,sw.cacheFirst);
sw.router.get('/',sw.networkFirst);

self.addEventListener('push', function(event) {
  let data = event.data.json();
  const title = data.title;
  const options = data.options;
  var promise = self.registration.showNotification(title, options);
  event.waitUntil(promise);
});

self.addEventListener('notificationclick', function(event) {
  clients.openWindow('/notification/4444');
});
