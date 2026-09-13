# Building robinvanderknaap.dev

## Browser-based editing

This repository is configured for [Pages CMS](https://pagescms.org/) in `.pages.yml`. It is a hosted GitHub editor, so there is no CMS server or database to deploy. Sign in at [app.pagescms.org](https://app.pagescms.org/), authorize the `shivardev/baneblogs` repository, and open the `main` branch. The **Blog posts** collection edits `content/blog/*.md`; uploads go to `static/uploads` and appear at `/uploads/` on the built site. New posts start as drafts. The body editor has a source mode for Hugo shortcodes and custom HTML.

To publish through Cloudflare Pages, connect this GitHub repository to a Pages project, set the production branch to `main`, the build command to `npm run deploy`, and the output directory to `public`. Install Hugo Extended (at least 0.112.0) and Node.js in the build environment. Every CMS save commits to GitHub and triggers a new Pages build; posts marked `draft: true` remain unpublished. If the Cloudflare project uses Direct Upload instead of Git integration, CMS commits will not trigger deployments.

Pages CMS edits content and media. For Hugo layouts, Alpine.js, vanilla JavaScript, or new shortcodes, edit the repository in your development environment or [GitHub's browser editor](https://github.dev/shivardev/baneblogs), then commit to `main`. Those code changes go through the same Cloudflare build. Decap CMS could place a content editor at `/admin`, but on Cloudflare Pages its GitHub login needs an OAuth service or Pages Function, which adds server-side code and secret management.
Public repository containing the end result of my blog article [Everything I learned about Hugo: Building robinvanderknaap.dev](https://robinvanderknaap.dev/blog/building-robinvanderknaap-dev/).

## Prerequisites
- [NodeJS](https://nodejs.org/), use a reasonably recent version.

## Usage
Clone repository

```
git clone git@github.com:robinvanderknaap/baneblogs.git
```

or [download source code](https://github.com/robinvanderknaap/baneblogs/archive/refs/heads/main.zip) and unpack.

From the root folder of the source code install dependencies
```
npm install
```

Start
```
npm start
```

Visit [http:localhost:1313](http://localhost:1313)

## Visual Studio Code
You should install the following extensions to assist you during development:
- [Tailwind CSS Intellisense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Hugo language and syntax support extension](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode)

## To generate pagefind

``` bash
npx -y pagefind --site public --serve
```

#### Blogs directory was not rendering because of the following mistake,

If we want to add a new homepage for a directory, we need to create a new file named `_index.md` in that directory.

For example, if we want to add a new homepage for `blog` directory, we need to create a new file named `_index.md` in `blog` directory.

### To Deploy
Once all changes are added run 

```bash
npm run deploy
``` 


### Important links
- [Get Time stamps for the blogs](https://www.unixtimestamp.com/)
- [Generate UUID for unique blog ID](https://www.uuidgenerator.net/) 


#### learnings 
- _index.md needs to be used to show a list kind of a thing and needs to have list.html in the same folderstucture in layouts
- to show a single page or static page we need to use index.md and have a single.html to show content for a single static simple page
