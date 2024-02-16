import axios from "axios";


export const quotes = await getQuotes()
async function getQuotes() {
  let { data } = await axios.get(
    `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
  );
  return data;
}
