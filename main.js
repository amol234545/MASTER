const got_strap = async () => (await import("got")).got
got_strap().then(got => {
  got.get("https://google.com").text().then(html => console.log(html))
})