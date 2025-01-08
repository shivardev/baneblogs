---
title: How to check logs / activity for EZVIZ CCTV camera
description: A step by step guide on how to view and analyze camera operation using logs using EZVIZ Studio
date: 2025-01-07T22:26:59.554Z
draft: false
tags:
    - ezviz
    - cctv
category:
    - guide
image: "https://i.ibb.co/xGgZKBx/android-as-streaming-pc-1.png"
showTOC: true
uuid: ea77f630-4f78-4245-9c0b-47e506a07933
keywords:
    - cctv
    - Ezviz
    - logs
    - camera
---

### Introduction

I own two Ezviz CCTV cameras, and they have been working fine. However, one day both cameras failed to record a specific movement within a given time frame. Initially, I suspected a fault with the cameras or that someone might have tried to turn them off. But it turned out that the cause was a brief power outage in my area, lasting only about two to four minutes. During this time, the cameras were turned off and then turned back on once the power was restored. To confirm this, I need to check the camera logs to verify that the power outage is what caused the issue.

### Tools needed. 

- Windows Laptop
- EZVIZ Studio 

### EZVIZ Studio

EZVIZ provides a Windows application that allows users to monitor and make adjustments to their cameras. The desktop version offers more functionality and settings options compared to the mobile app. While the application may not have the most attractive interface, it gets the job done effectively.

[Offical Downlaod Link](https://support.ezviz.com/download)

Download the windows pieces software and install it on your machine. This machine needs to be connected to the same Wi-fi which the cameras are connected to.

After a successful installation, simply log into your account and ensure that the application performs a default scan to detect all the cameras connected to the same Wi-Fi network. Once the scan is complete, this is what the interface will look like.

{{<image url="https://i.ibb.co/j4D6PLV/image.png">}}

### Application Guide

{{<image url="https://i.ibb.co/tMz1B5G/image.png">}}

Once logged in to the application, on the left side please scroll to the sectino shown in the image, where you will find all the camera linked to the account. 

Once logged into the application. what you need to do is navigate. to the shown section in the image above. This section is known as device. This online, which will be showing all the cameras which are connected to the same Wi-fi.

{{<image url="https://i.ibb.co/SJ3hTj1/image.png">}}

Click on All Devices 

{{<image url="https://i.ibb.co/XX070q2/image.png">}}

{{<image url="https://i.ibb.co/7Y38LtQ/image.png">}}

Click on Advanced Button on desired camera 

This will open a new modal window 

{{<image url="https://i.ibb.co/zQ4Jf6B/image.png">}}

Select Log from the left side and perform a search, depending on the data size after few sec/min all the logs shall be fetched. 

This is how we view logs of EZVIZ cctv camera using a windows laptop


