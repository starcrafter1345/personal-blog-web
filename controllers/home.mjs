import { read, readAll } from "../model/article.mjs";

export async function homeController(req, res) {
  const artilces = await readAll();

  res.render("user/home", {
    articles: artilces,
  });
}

export async function articleController(req, res) {
  const article = await read(req.params["id"]);

  res.render("user/article", {
    title: article.title,
    article: article,
  });
}
