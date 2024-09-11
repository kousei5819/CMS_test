const { createClient } = microcms;
const WEATHER_API_KEY = config.apikey;
console.log(WEATHER_API_KEY);

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "p5aur2gmg1", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: WEATHER_API_KEY,
  // retry: true // Retry attempts up to a maximum of two times.
});

client
  .get({
    endpoint: "member",
  })
  .then((res) => {
    // console.log(res)
    const memberItem = document.querySelector("#memberItem");
    res.contents.forEach((content) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.innerHTML = content.body;
      const p = document.createElement("h3");
      p.textContent = content.title;
      li.appendChild(p);
      li.appendChild(div);
      memberItem.appendChild(li);
    });
  });
