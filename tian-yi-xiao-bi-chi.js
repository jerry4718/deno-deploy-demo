addEventListener("fetch", (event) => {
  const response = new Response(
    "天毅小碧池 [tian-yi-xiao-bi-chi]",
    {
      headers: { "content-type": "text/plain; charset=utf-8" },
    },
  );
  event.respondWith(response);
});
