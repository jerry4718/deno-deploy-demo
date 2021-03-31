addEventListener("fetch", (event) => { 
  event.respondWith( 
    new Response(
      "你懂我的意思吧 [yang-lei-dsb]", 
      { 
        status: 200, 
        headers: { server: "denosr", "content-type": "text/plain", }, 
      },
    ), 
  ); 
});
