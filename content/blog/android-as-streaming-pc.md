---
date: 2024-11-29T01:17:45.441Z
category:
    - streaming
    - content creation
draft: true
tags:
    - android
    - streaming
    - pc
    - guide
    - how to
description: I found a possbible way to use my Android smartphone as a streaming PC. I will write about it here.
image: https://i.ibb.co/0b2b1tB/Android-as-Streaming-PC.png
title: How to use Android smartphone as a streaming PC (Android)
showTOC: true
uuid: fdd682b9-d546-42e3-ab41-23a30b170078
---

### Introduction

I found a possible way to use my Android smartphone as a streaming PC. Many people use their Primary PC as a gaming PC. If its powerful enough to run a game also stream to Youtube or Twitch Its awesome, but we all know all PC's are not as powerful for gaming and streaming at the same time. 

If you are a gamer and a want to stream or already a streamer, Just thinking to get a PC for streaming alone but you don't to, at least for now. 

We can use our Android/Iphone as a streaming PC.

- Modern phones are 100% capable to stream using H264 / H265 / HVEC codecs.
- You already have a Phone give it a try. 
- Complete free and open source software apps available for Phones to stream. 

### Hardware requirements

- **Modern Android phone**
  Too old phones can't pull this off., 

- **Capture card**

    The only reasons to use a capture card it to get the best quality of the video from Gaming PC to smart phone.

    With out a capture card we have to you a network based video feed transfer which will have extra load on Gaming PC as well as the Smart Phone causing lags and frame drops.

    which looses the purpose of using a smartphone as a streaming PC.
    cheap USB capture cards are available for a few dollars / rupees anything would work.

    - Suggested capture cards
        - [Capture card 1](https://amzn.to/3BbtAhP) India. 
        - [Capture card 2 Best](https://www.amazon.com/Capture-External-Camcorder-Recorder-Streaming/dp/B0C9ZZPTH3/ref=sr_1_6?crid=JH9RNKAOOPTK&dib=eyJ2IjoiMSJ9.Tfup76r8Q1bpYGxQCWANZZ7FL9qi9N8sVdlkIyCR7MFzerAuYLASEdXq4Zfu_2cWtkHuGXfBKC8dlBybC7NxdM-XFYJpCVuR9tq9CcV_Vr643g8n9XX_vb2UJVJEY9WFlz9zkuZVafqyX8Fv-aPk3UoePSkaedgku3SC0NMJrdv5l1AjE7TzpvNN7y1euOcmOqoWtUMjlmPnqMWZ4L53twPBuT8PlOdBxwXxq4Q8Uec.iBbU4Gu5CfeddiGv-09Ny-YpxvfBEwpTNNr5iiJ7La4&dib_tag=se&keywords=camlink&qid=1733803009&sprefix=camlink%2Caps%2C113&sr=8-6) USA.

{{< notice warning >}}
**Elgato capture card** will not be supported in this procedure, For some reason Elgato HD60S was not being detected by my Android device. Please refrain from using Elgato capture card.
{{< /notice >}}

- **HDMI cable**

    This is going to be used to transfer the visuals from One device to an other.

- **USB Dock**
    - For type-C to box typed USB port to connect capture card. 
    - provide power to the phone as well as Capture card.
    - Suggested capture cards
        -  [Anker](https://www.amazon.com/Anker-DisplayPort-Delivery-Ethernet-microSD/dp/B09Q5V9G5P/ref=sr_1_10?crid=25PXBAI95M38E&dib=eyJ2IjoiMSJ9.5yhcDEZKxfubgYe0TvubBnQ6gLDhtjfXMCCqHjCoD5ZSRlb74veHlKk4tG9vkGeBSmBbCfj8qPqZEC4Dl9fC1tcdMlVQH9mucoQCKhjU1kISBFh5WblFnQyrvqHiyGTbCMppD3bxy2zuPvlUUJEmPdt3q2ywpISknPvUnZZXnvBkeTsfXhtDKnNAwfgfPIrfaB5GLUVukoOhfTgf4b6JQZ2mBFUZDB7sZ0qWYDrFfoBdfnm6judKuP02L5tSpFpXUIvK411LU45tiSS_ciwI6mVyKR__rDsVJL2xL39jNfo.FuHQAaLRuPEHMMsk2wmf9QD4ubQg4Hr7WmwiFlV1-cs&dib_tag=se&keywords=anker+docking+station&qid=1733804015&s=electronics&sprefix=anker+docking+station+%2Celectronics%2C92&sr=1-10) Can get anything cheaper but must support usb 3.0 and Power delivery starting from 65watt.
    I highly suggest getting one as the streaming phones battery will be draining fast then we notice, A usb duck will help your device to charge while 
    also transferring HDMI data

### Steps to Follow

Here is the plan, We project our OBS screen to the captured card and will be connected to phone via USB cable

#### Configuration of Gaming PC

I would assume everyone reading this might be using [OBS](https://obsproject.com/) or [Streamlabs OBS](https://streamlabs.com/). Any of them there is an option to project the entire OBS to the capture card. 

Fire up your OBS application as an **Administrator**, in the preview window ***right click*** and scroll to the option named 'Fullscreen Projector (Preview)' 

{{<image url="https://i.ibb.co/s3rXNkh/preview-Click.png">}}
{{<image url="https://i.ibb.co/R9t1JQg/select-capture-card.png">}}

In the section of your-capture-card, one should be seeing there capture card name most likely it will be 'USB CAPTURE 3.0' or something like that. 
By clicking it the projection will be enabled. 

#### Setting up Android phone
Connect capture card to Phone using USB. I personal use an app called [CameraFi Live](https://play.google.com/store/apps/details?id=com.vaultmicro.camerafi.live&hl=en-US&pli=1) which has a lot more features and options but for this post will stick to using capture card for streaming. 

- install the app, Don't open it. 
- connect the capture card to your Phone ( This is where a USB dock can be used if its Type C or USB A).
- open *CameraFi* app and there should be a popups. 

{{< notice idea >}}
Accept all the below shows popups in order this process to work.
{{< /notice >}}

Accept this to give cameraFi permission to fetch the data from the USB3.0 cature card.
{{<image url="https://i.ibb.co/LgDGqbW/Screenshot-20241128-212328.png">}}

Accept this to make OBS scene as main camera source.
{{<image url="https://i.ibb.co/mJkQmZN/Screenshot-20241128-212335.png">}}

Accept this to make OBS audio as primary source.
{{<image url="https://i.ibb.co/Xt89LFw/Screenshot-20241128-212341.png">}}

Final output will be your desktop / What ever scene which is currently active in OBS.
{{<image url="https://i.ibb.co/fY935H5/Screenshot-20241128-212346.png">}}

Thats it!!. Press the live / camera button below to stream to your favoriate streaming platform using you Smartphone.

{{< notice info >}}
 Note that, Mobile device can get hot while streaming make sure to keep it in a cool shade place with a proper airFlow.
{{< /notice >}}