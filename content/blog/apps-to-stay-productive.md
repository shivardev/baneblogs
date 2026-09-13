---
title: Free and Open-Source Android Apps I Use Daily
description: A list of free and open-source Android apps I regularly use for
  productivity, media, networking, privacy and managing my self-hosted services.
date: 2026-09-13T12:05:00Z
draft: false
tags:
  - apps
  - android
  - open-source
  - productivity
  - self-hosted
  - privacy
  - networking
category:
  - productive
  - wellbeing
  - android
image: https://i.ibb.co/zTLX9MCq/file-00000000a87c61f9af77c379d2aa0d7d.png
showTOC: true
uuid: c2746cb2-f0b3-45c1-896e-0a22ac157d34
---
### Introduction

There are thousands of apps in the Play Store, but somehow I end up using the same few apps every day. Some of them help me stay productive, some connect to the services running in my homelab and others simply fix small annoyances I regularly face on Android.

A good number of the apps in this list are free and open-source. A few are only free to use, and some require a server or another device to work properly. This is not a list of apps I downloaded only to write a blog post. These are apps I actually use, or have used for a decent amount of time.

I will keep updating this list whenever I find something useful.

## Productivity and Well-being

### 1) [Mindful](https://github.com/akaMrNagar/Mindful)

Mindful is the app I currently use to control my screen time and avoid endlessly scrolling through apps.

Android already has Digital Wellbeing, but Mindful gives me more control over how and when apps should be blocked. It can set app limits, create focus schedules and add some friction before I open distracting apps.

The biggest reason I like it is that it is free, open-source and does not fill the app with ads or trackers. It feels like a proper replacement for many paid focus apps.

### 2) [Habit Pixel](https://play.google.com/store/apps/details?id=com.habitpixel.app)

Habit Pixel is a simple habit-tracking app where every completed habit fills a small pixel in a heatmap.

I like this idea because it gives me a quick visual view of how consistent I have been. It is similar to looking at the contribution graph on GitHub. Missing a day becomes very obvious, which is sometimes the small push I need to complete a task.

It also works offline and does not require an account, which is always a bonus for an app this simple.

### 3) [Hybrid Stopwatch and Timer](https://play.google.com/store/apps/details?id=com.hybrid.stopwatch)

This is one of those apps that does not look very exciting until I actually need it.

I use it for workouts, cooking, tracking how long a task takes and sometimes for setting a timer while doing focused work. It combines a stopwatch and countdown timer in one app and keeps running properly in the background.

There are many newer timer apps available, but this one is simple and has worked reliably for me.

## Reading and Information

### 4) [Feedly](https://play.google.com/store/apps/details?id=com.devhd.feedly)

Feedly is where I keep blogs, technology websites, news sources and other RSS feeds together.

Instead of opening ten different websites or depending on whatever an algorithm decides to show me, I can open Feedly and check updates from sources I actually selected.

The free version is enough for basic reading and organizing feeds, although some advanced search and automation features require a paid subscription.

### 5) [Keepa](https://play.google.com/store/apps/details?id=com.keepa.mobile)

Keepa is mainly useful when I am planning to buy something from Amazon.

Amazon discounts can be confusing because the displayed list price is not always the price the item normally sells for. Keepa shows the product's price history, so I can check whether a deal is actually good or whether the price was increased before the discount.

I do not use it every single day, but whenever I am researching an expensive product, this is one of the first apps I check.

## Music and Media

### 6) [SimpMusic](https://github.com/maxrave-dev/SimpMusic)

SimpMusic is currently one of my preferred music apps. It is an open-source music client that uses YouTube Music as its backend.

It supports background playback, playlists, lyrics, caching and many of the features I normally expect from a music-streaming app. The interface is clean and the app does not feel overloaded.

Since this is an unofficial client, there is always a chance that a YouTube-side change may temporarily break something. Still, it has been a good daily music app for me.

### 7) [Jellyfin](https://play.google.com/store/apps/details?id=org.jellyfin.mobile)

Jellyfin is the app I use to stream movies, shows and other media from my own server.

Unlike regular streaming apps, Jellyfin does not provide the actual content. I host the Jellyfin server myself and point it toward my own media library. The Android app then lets me access that library from my phone.

It works especially well when combined with Tailscale, because I can securely connect to my home server while I am away without exposing Jellyfin directly to the public internet.

### 8) [Immich](https://play.google.com/store/apps/details?id=app.alextran.immich)

Immich is my self-hosted alternative for backing up and browsing photos and videos.

The Android app can automatically upload the photos from my phone to my own Immich server. It also provides a familiar gallery, timeline, albums, search and map-based browsing experience.

Immich requires you to run and maintain your own server, so it is not a direct install-and-forget replacement for Google Photos. However, for someone already running a homelab, it gives much more control over where personal photos are stored.

### 9) HDO Box

HDO Box is an app I have used for discovering and watching movies and television shows.

However, it is not distributed through the Play Store, and there are many copied or fake APK websites using the same name. Its content sources and legality can also vary by location.

Because of that, I would not recommend downloading it from a random APK website. I will add a direct link here only after confirming the exact version and source I use.

## File Sharing and App Discovery

### 10) [LocalSend](https://github.com/localsend/localsend)

LocalSend is probably one of the most useful apps in this entire list.

It lets me transfer files between Android, Windows, Linux, macOS and iOS devices connected to the same local network. There is no account, cloud upload or messaging app involved.

I simply open LocalSend on both devices, select the files and send them directly. I use it for screenshots, APK files, documents and anything else that I quickly need to move between my phone and computer.

### 11) [Komi Store](https://github.com/kurikomi-labs/komi-store)

Komi Store, previously known as GitHub Store, makes discovering applications released through GitHub and other software forges much easier.

GitHub contains many useful open-source Android apps, but finding releases and downloading the correct APK is not always convenient from a phone. Komi presents compatible projects in a more familiar app-store-style interface.

It is especially useful for finding apps that are not available through Google Play or F-Droid.

### 12) [Shelter](https://github.com/PeterCxy/Shelter)

Shelter uses Android's Work Profile feature to create an isolated space for apps.

I mainly use it when I need a second instance of an application or when I want to separate an app from the data in my personal profile. For example, I can keep a second account inside the work profile without constantly logging in and out.

It can also freeze apps inside the profile when I am not using them. Setup is slightly more involved than a normal app, but once configured it is very useful.

## Networking and Homelab

### 13) [Tailscale](https://play.google.com/store/apps/details?id=com.tailscale.ipn)

Tailscale is one of the apps I install almost immediately on a new device.

It creates a private network between my phone, computers, servers and other devices using WireGuard. This lets me access services in my homelab without opening a collection of ports on my router.

I use it for services such as Immich, Jellyfin, SSH and other internal dashboards. Once everything is signed into the same Tailscale network, it mostly just works.

### 14) [PingTools Network Utilities](https://play.google.com/store/apps/details?id=ua.com.streamsoft.pingtools)

PingTools is my small networking toolbox on Android.

It includes ping, traceroute, port scanning, local-network discovery, Whois, iPerf and several other utilities. I mostly use it when something in my home network stops responding and I need to quickly determine whether the device is online.

It is far more convenient than opening a laptop just to ping an IP address.

### 15) [UptimeRobot](https://play.google.com/store/apps/details?id=com.uptimerobot)

UptimeRobot monitors my websites and publicly available services.

If a service becomes unreachable, the app can send a notification instead of leaving me to discover the problem hours later. It can monitor websites, ports, SSL certificate expiry and basic ping availability.

The mobile app is mainly useful for receiving alerts and quickly checking recent outages. I still prefer the web dashboard when creating or editing several monitors.

### 16) [Mobility Print](https://play.google.com/store/apps/details?id=com.papercut.projectbanksia)

Mobility Print makes printing from Android much easier when a compatible PaperCut Mobility Print server is available.

The app does not work by itself. A Mobility Print server must first be installed on a computer or server that can access the printer.

Once configured, the printer appears through Android's normal print menu. This is useful for older or network printers that do not have a good Android application of their own.

### 17) [WiFi FTP Server][https://play.google.com/store/apps/details?id=com.medhaapps.wififtpserver&pcampaignid=web_share](https://play.google.com/store/apps/details?id=com.medhaapps.wififtpserver&pcampaignid=web_share))

WiFi FTP Server lets me access files on my phone using an FTP client while both devices are connected to the same Wi-Fi network.

It is useful when I need access to an entire folder rather than sending a few files through LocalSend. I can start the server on my phone and connect from FileZilla or another FTP client on my computer.

FTP is not something I would expose to the internet. I only use it temporarily on a trusted local network and stop the server after the transfer is complete.

### 18) ZeroTier VPN

I use VPN when I need a quick VPN connection from my phone.

However, I need to confirm the exact app because several unrelated Android applications use the Zero VPN name. Free VPN applications can also have unclear logging, advertising and data-handling policies, so this section should not be published without verifying the developer and privacy policy.

## YouTube and App Patching

### 19) [ReVanced Manager](https://github.com/ReVanced/revanced-manager)

ReVanced Manager is used to apply community-developed patches to supported Android applications.

I mainly use it with YouTube and YouTube Music. Depending on the selected patches, it can change parts of the interface, playback behavior and other application features.

ReVanced Manager patches an application on the device rather than acting as a normal replacement app store. I only download the manager from the official ReVanced website or its verified GitHub repository because there are many fake websites using the ReVanced name.

### 20) YouTube ReVanced and YouTube Music ReVanced

YouTube ReVanced and YouTube Music ReVanced are the patched apps I create through ReVanced Manager.

I use them because they let me adjust parts of the YouTube experience that I find distracting or annoying. ReVanced supports many optional patches, so I can select only the changes I actually need.

These are not separate official applications published by Google or a ready-made APK that I recommend downloading from an unknown website. The safer method is to use the official ReVanced Manager and patch a compatible application package yourself.

## Fitness

### 21) [NOOP](https://github.com/NoopApp/noop)

NOOP is an unofficial, open-source companion application for supported WHOOP fitness bands.

It connects directly to the band using Bluetooth and stores the information locally instead of depending entirely on the official WHOOP cloud service. It can calculate and display information such as sleep, recovery, strain, heart rate and HRV.

This project is still fairly new and unofficial. Setup may require more effort than the normal WHOOP app, and future firmware changes could affect compatibility. I see it as an interesting privacy-friendly alternative, but not yet something I would recommend to a non-technical user without explaining those limitations.

## Apps I Used Previously

The following apps are not necessarily bad or completely discontinued. They are simply apps I used before moving to SimpMusic.

### 22) [RiMusic](https://github.com/fast4x/RiMusic)

RiMusic was one of the open-source YouTube Music clients I used for a while.

It had a nice interface and most of the music features I needed, but over time I moved to SimpMusic because it currently fits my usage better.

I am keeping it in this section because it can still be worth checking if SimpMusic does not work well on a particular device.

### 23) [ViMusic](https://github.com/vfsfitvnm/ViMusic)

ViMusic was one of the first open-source YouTube Music clients I regularly used.

The app was simple, fast and had a clean interface, but the original project is no longer actively developed. Several newer music apps and forks were later built around similar ideas.

I would not choose the original ViMusic for a new installation today, but it deserves a mention because it introduced me to this category of open-source music clients.

## Final Thoughts

This list ended up becoming a mix of productivity apps, self-hosted clients, networking utilities and tools that make Android less restrictive.

Not every app here will be useful to everyone. Immich and Jellyfin only make sense if you run the matching servers, while tools such as PingTools, Tailscale and UptimeRobot are mainly useful for people managing their own network or homelab.

The apps I recommend to almost everyone are Mindful, LocalSend and a proper habit tracker. The others depend more on what you do with your phone.

{{< notice info >}}
If you have a better app recommendation, please forward it to [blazingbane007@gmail.com](mailto:blazingbane007@gmail.com). I will check it out and provide credit wherever it is due.
{{< /notice >}}