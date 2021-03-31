addEventListener("fetch", (event) => {
  const response = new Response("Hello Deno Deploy [space-mmty-4718]", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
