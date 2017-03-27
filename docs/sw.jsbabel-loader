import sw from 'sw-toolbox';

sw.route(/.(js|css)/, sw.cacheFirst);
sw.route('/', sw.networkFirst);