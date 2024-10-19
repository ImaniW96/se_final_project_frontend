const API_KEY = "0aae0889b7d04af88445abbb8b69cbe7";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export { API_KEY, BASE_URL };
