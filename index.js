function onFetch(event) {
  const response = new Response('Hello, World!', {
    headers: {
      'content-type': 'text/plain'
    }
  });

  event.respondWith(response);
}

addEventListener('fetch', onFetch, false);
