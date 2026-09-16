import { initBotId } from 'botid/client/core';

// Only lead submissions are challenged; public pages and crawlers remain accessible.
initBotId({
  protect: [
    { path: '/api/contact/', method: 'POST' },
    { path: '/api/contact', method: 'POST' },
    { path: '/api/roi-lead/', method: 'POST' },
    { path: '/api/roi-lead', method: 'POST' },
  ],
});
