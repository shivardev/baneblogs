---
title: "10 Lesser-Known Go Packages I Use All the Time"
description: "A personal list of underrated but incredibly useful Go packages that improve productivity, debugging, and development experience. No web frameworks"
date: 2024-12-10T04:43:24.997Z
slug: top-go-packages-i-use
preview: ""
draft: false
tags: 
    - golang
    - go packages
    - developer tools
    - productivity
    - backend

category: ["Go", "Development"]
image: "https://i.ibb.co/4Rjy7Yp8/Listen-in-your-PC.png"
showTOC: true
uuid: "8d0053cc-5047-47ff-b391-3b51ff7e9eda"
---

## 📝 Introduction

Go (or GoLang) is a wonderfully capable language — it's my first choice whenever I need to build an application, CLI tool, or lightweight service. It’s fast, easy to work with, and compiles down to a single binary, which makes deployment a breeze.

That said, while the Go ecosystem has matured a lot over the years, there are still times when I run into limitations — especially when looking for very specific packages or niche functionality. But despite that, Go’s standard library and the growing number of high-quality third-party packages make it a joy to work with in most cases.

> This post is not another roundup of popular web frameworks like `gin`, `fiber`, or `echo`. Those are great — and widely known. Instead, I want to highlight Go packages that **aren’t talked about as much**, but have genuinely improved my day-to-day developer experience. These are tools that help with things like data structures, debugging, file watching, or ergonomics — and I keep finding myself coming back to them.

This isn’t a “Top 10 because it’s trending on GitHub” list. It’s a personal collection of packages that help me get things done — faster, cleaner, and happier.

---

## 🔟 My Go Package Picks

### [Air](https://github.com/cosmtrek/air)  
A live reload tool for Go applications. It watches your source code and automatically rebuilds and restarts your app on save. Perfect for development — saves time and mental load.

### [GoDUmp](https://github.com/k0kubun/pp)  
A pretty-printer for Go structs, similar to `fmt.Println()` but with colors and indentation. Makes debugging large nested structures way easier.

### [modernc.org/sqlite](https://pkg.go.dev/modernc.org/sqlite)  
A pure-Go implementation of SQLite — no CGO dependencies. Great for embedded databases or when you need portability across platforms.

### [gods](https://github.com/emirpasic/gods)  
A rich data structures library for Go. Includes sets, trees, stacks, queues, and more — great when the standard library isn’t enough.

### [copier](https://github.com/jinzhu/copier)  
Copy structs in Go with ease — even if they have different field names or types. Very useful when dealing with DTOs, API layers, or migrations.

### [go-pretty](https://github.com/jedib0t/go-pretty)  
Builds beautiful tables, progress bars, and text-based UI elements in the terminal. Fantastic for CLI tools or reporting scripts.

### [gookit/color](https://github.com/gookit/color)  
A simple, powerful library to add color to your terminal output. Supports themes, styles, and nesting. Helpful for improving CLI UX.

### [vhs](https://github.com/charmbracelet/vhs)  
Record terminal sessions as GIFs or SVG animations by writing them in Markdown-like syntax. Great for demos and docs.

### [go-multierror](https://github.com/hashicorp/go-multierror)  
Allows you to combine multiple errors into one. Especially useful when you want to return multiple errors from a function without losing any context.

### [immer](https://github.com/benbjohnson/immutable)  
Provides immutable data structures for Go, inspired by the popular JS library `immer`. Makes working with state and concurrency safer and cleaner.

---

## Final Thoughts

These Go libraries may not dominate Hacker News or GitHub trending pages, but they’ve quietly earned their place in my stack. They’re the kind of tools that solve very real, everyday developer problems — and make Go even more enjoyable to work with.

If you're tired of the same old "top 10 Go libraries" lists filled with web frameworks and ORMs, give these a try. You might just find your next favorite utility.

