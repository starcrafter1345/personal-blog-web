import * as path from "node:path";
import * as fs from "node:fs/promises";

const ARTICLE_PATH = path.join(process.cwd(), "data", "articles");

class Article {
  async create(title, text) {
    const date = new Date();
    const id = Date.now();

    const data = {
      id: id,
      title: title,
      text: text,
      date: date,
    };

    const json = JSON.stringify(data);

    await fs.writeFile(path.join(ARTICLE_PATH, String(id)), json);
  }

  async read(id) {
    return JSON.parse(await fs.readFile(path.join(ARTICLE_PATH, String(id))));
  }

  async update(id, title, text) {
    const date = new Date();

    const data = {
      id: id,
      title: title,
      text: text,
      date: date,
    };

    const json = JSON.stringify(data);

    await fs.writeFile(path.join(ARTICLE_PATH, String(id)), json);
  }
}