addEventListener("fetch", (event) => { 
  event.respondWith( 
    new Response(
      "Hello Deno Deploy [space-mmty-4718]", 
      { 
        status: 200, 
        headers: { server: "denosr", "content-type": "text/plain", }, 
      },
    ), 
  ); 
});
