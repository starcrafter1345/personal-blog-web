import { readAll } from "../model/article.mjs";

export async function adminController(req, res) {
  const articles = await readAll();

  res.render("admin/admin", {
    articles: articles,
  });
}
