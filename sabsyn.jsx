addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // Handle different request methods (GET, POST, etc.) and routes
    switch (request.method) {
      case 'GET':
        return handleGetRequest(request)
      case 'POST':
        return handlePostRequest(request)
      default:
        return new Response('Method Not Allowed', { status: 405 })
    }
  }
  
  async function handleGetRequest(request) {
    // Extract the requested URL path
    const url = new URL(request.url)
    const path = url.pathname
  
    // Serve different content based on the URL path
    if (path === '/') {
      // Serve homepage
      const html = '<h1>Welcome to my website!</h1>'
      return new Response(html, { headers: { 'Content-Type': 'text/html' } })
    } else if (path === '/about') {
      // Serve about page
      const html = '<h2>About me</h2><p>I am a Cloudflare Worker.</p>'
      return new Response(html, { headers: { 'Content-Type': 'text/html' } })
    } else {
      // Handle 404 Not Found
      return new Response('Page not found', { status: 404 })
    }
  }
  
  async function handlePostRequest(request) {
    // Handle POST request logic
    // ...
  }
  