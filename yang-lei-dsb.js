addEventListener("fetch", (event) => {
  const response = new Response(
    new TextEncoder().encode("你懂我的意思吧 [yang-lei-dsb]"),
    {
      headers: { "content-type": "text/plain; charset=utf-8" },
    },
  );
  event.respondWith(response);
});
