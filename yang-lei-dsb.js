addEventListener("fetch", (event) => { 
  event.respondWith( 
    new Response(
      "Hello Deno Deploy [yang-lei-dsb]", 
      { 
        status: 200, 
        headers: { server: "denosr", "content-type": "text/plain", }, 
      },
    ), 
  ); 
});
