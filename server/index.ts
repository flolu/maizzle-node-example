import express from 'express'
import * as fsPromises from 'fs/promises'
import * as path from 'path'

const app = express();
const basePath = path.join(__dirname, "../", "build_production");

async function renderEmail<T extends Record<string, string>>(
  templatePath: string,
  substitutions: T
) {
  const filepath = path.join(basePath, `${templatePath}.html`);
  const rawTemplate = (await fsPromises.readFile(filepath)).toString();
  let template = rawTemplate;

  for (const sub in substitutions) {
    template = template.replace(`{{${sub}}}`, substitutions[sub]);
  }

  return template;
}

app.get("**", async (req, res) => {
  const path = req.path;
  const substitutions = req.query as Record<string, string>;
  const email = await renderEmail(path, substitutions);
  res.send(email);
});

app.listen(3000, () =>
  console.log(
    "Open http://localhost:3000/test?url=https://maizzle.com&message=Maizzle!"
  )
);
