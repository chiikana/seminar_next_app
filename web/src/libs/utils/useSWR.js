export const fetcher = (url) => fetch(url, { method: "GET" }).then((res) => res.json())
