---
title: 'Setup Caddy with HTTPS in 2min 🚀 (Windows)'
date: 2024-11-12T21:25:29-05:00
draft: false
category:
  - dev
  - guide
tags:
  - Caddy
  - reverse proxy
  - self-hosting
  - https

description: A simple guide to setup Caddy with HTTPS in 2Min 🚀 (Windows) for your personal website. Quick and easy setup.
image: 'https://i.ibb.co/Xbq1d4V/Listen-in-your-PC.png'
showTOC: true
---
### Introduction

This guide will help you setup Caddy, Most people use caddy for its ease of use on Settingup HTTPS on self-hosting websites.
There are other alternatives like Nginx, but I prefer caddy because it is very easy to setup and use. No complex configurations needed such as LetsEncrypt, Certbot, etc.

### Step 1 – Install Caddy

Download the latest version of Caddy from the official website. https://caddyserver.com/docs/install
Make sure you download the right format of installer Configuration is mosly same for Windows, Linux, and MacOS.
Once downloaded, run the installer and follow the instructions.

### Step 2 – Create a Caddyfile

Caddyfile is the best way to configure our reverse proxy or a file based web server, its simple and easy to use.

You can create this file in any directory, it doesn’t matter.

> Name of the file should be 'Caddyfile' No extension.

```json {title="./Caddyfile"}
:80 {
	root * ./html
	file_server
}

http://immich.blazingbane.com {
	reverse_proxy publicIP:2283
}

http://media.blazingbane.com {
	reverse_proxy publicIP:8096
}

immich.blazingbane.com {
	reverse_proxy localhost:2283
}

media.blazingbane.com {
	reverse_proxy localhost:8096
}

```

#### Explanation 

In this file we have defined 3 domains, immich.blazingbane.com, media.blazingbane.com, and localhost. 

localhost is the domain of our local machine, which is the one we are using to access our website.

immich.blazingbane.com and media.blazingbane.com are the domains of my [Immich](https://immich.app/) and [FileBrowser](https://filebrowser.org) websites.


Instead of port forwarding 2283 and 8096 we are using reverse proxy to access the ports of our local machine.

You can use any domain you own or any domain which you want to access your website.

{{< warning >}}
You much port forward 80 and 443 or else Caddy will not work.
.{{< /warning >}}

### Step 3 – Run Caddy

Open a terminal and navigate to the directory where you have downloaded the caddy installer.

Run the following command to start the caddy server.

```shell {title="shell"}
caddy run --watch
```

You would see a some logs. if any error occurs you can check the logs in the terminal.

### Conclusion

I have wasted a lot of time using Nginx and LetsEncrypt, but I finally decided to use Caddy. Its very easy to setup and use. Make sure you port forward 80 and 443 or else Caddy will not work.

