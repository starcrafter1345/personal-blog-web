import { Article } from "../model/article.mjs";

const articleClass = new Article();

export async function homeController(req, res) {
  const artilces = await articleClass.readAll();

  res.render("user/home", {
    articles: artilces,
  });
}

export async function articleController(req, res) {
  const article = await articleClass.read(req.params["id"]);

  res.render("user/article", {
    title: article.title,
    article: article,
  });
}
