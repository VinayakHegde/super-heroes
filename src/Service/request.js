import http from "http";

const path = "https://s3.eu-west-2.amazonaws.com/build-circle/characters.json";
const request = () =>
  new Promise((resolve, reject) => {
    http.get({ path }, response => {
      let data = "";
      response.on("data", chunk => (data += chunk));
      response.on("end", () => {
        try {
          const { items } = JSON.parse(data);
          resolve(items);
        } catch (e) {
          reject({ error: "Cannot parse the response to JSON object" });
        }
      });
      response.on("error", e => reject({ error: e.message }));
    });
  });

export default request;
