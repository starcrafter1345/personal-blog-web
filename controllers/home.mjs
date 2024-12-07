import { Article } from "../model/article.mjs";

const article = new Article();

export async function homeController(req, res) {
  const artilces = await article.readAll();
  
  res.render("home", {
    articles: artilces
  });
}