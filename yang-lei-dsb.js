addEventListener("fetch", (event) => {
  const response = new Response("你懂我的意思吧 [yang-lei-dsb]", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
