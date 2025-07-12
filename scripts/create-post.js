#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { v4: uuidv4 } = require("uuid");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
  const title = await prompt("Post title: ");
  const description = await prompt("Description: ");
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const date = new Date().toISOString();
  const uuid = uuidv4();
  const fileName = `${slug}.md`;
  const filePath = path.join("content", "blog", fileName);

  const frontMatter = `---
title: ${title}
description: ${description}
date: ${date}
preview: ""
draft: true
tags: []
categories: []
category: []
image: ""
showTOC: false
uuid: "${uuid}"
---
`;

  fs.writeFileSync(filePath, frontMatter);
  console.log(`✅ Post created: ${filePath}`);
  rl.close();
})();
