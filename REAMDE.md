<div align="center">
  <a href="https://github.com/flolu/maizzle-node--example">
    <img width="100px" height="auto" src="maizzle.png" />
  </a>
  <br>
  <h1>Maizzle Node Example</h1>
  <p>
    Render beautiful emails with dynamic content with Maizzle and Node.js
  </p>
</div>

# Usage

**Setup**

- `yarn install`

**Development**

- `yarn dev` (Start development server, http://localhost:3000)

**Server**

- `yarn build` (Build production)
- `yarn server` (Start server, http://localhost:3000)

# How it works

1. Set configurable parts in your templates with `@{{name_of_variable}}`

   ```html
   <p class="m-0 mb-24">Substitution in action: @{{message}}</p>
   ```

2. Server listens for get requests to `/<some_path>`
3. Server takes query params from url and replaces variables
   - For example http://localhost:3000/test?url=https://maizzle.com&message=Maizzle!

# Codebase

**Services**

- [`server`](server) **Node.js server** (Render emails with dynamic content to HTML)
- [`src`](src) **Maizzle templates** (Email templates)
