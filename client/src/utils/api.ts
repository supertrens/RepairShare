const RANDOM_QUOTE_API = "https://uselessfacts.jsph.pl/random.json";

export async function randomQuote() {
  const res = await fetch(RANDOM_QUOTE_API);
  return res.json();
}
