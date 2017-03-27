import sw from 'sw-toolbox'

sw.router.get(/.(js|css|jpg|png|gif)$/,sw.cacheFirst);
sw.router.get('/',sw.networkFirst);
