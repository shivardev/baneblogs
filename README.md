# Building robinvanderknaap.dev
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