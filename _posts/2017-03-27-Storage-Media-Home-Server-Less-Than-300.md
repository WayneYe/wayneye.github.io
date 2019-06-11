---
title: Storage+Media home server for less than $300
categories: 
  - Geek
tags: 
  - Geek
  - Hack
toc: true
toc_label: "Table of Contents"
---

### Background

I have been researched and watched many NAS options to setup a home storage+media server during the past year, and so far there was no perfect answer, either lacking features/performance, or way too expensive... An Intel Celeron CPU + 1GB mem with a customized Linux (in other words: closed source )running Plex or something else, and the cost is like $400 (terrible hardware performance), or $800+/$1000+, way too expensive, examples:

*   [Synology DS216J NAS DiskStation (DS216j)](https://www.amazon.com/Synology-DS216J-NAS-DiskStation-DS216j/dp/B01BNPT1EG/ref=sr_1_4?ie=UTF8&qid=1490657211&sr=8-4&keywords=network+attached+storage)
*   [WD My Cloud EX4100 Diskless Expert Series 4-Bay NAS](https://www.amazon.com/EX4100-Diskless-Network-Attached-Storage/dp/B00TB8XMR0/ref=sr_1_13?ie=UTF8&qid=1490657211&sr=8-13&keywords=network+attached+storage)
*   [NETGEAR ReadyNAS 524X High Performance 10GbE 4-bay Network Attached Storage Diskless](https://www.amazon.com/NETGEAR-ReadyNAS-Performance-Attached-RN524X00-100NES/dp/B01M7X2FP2/ref=sr_1_2?s=electronics&ie=UTF8&qid=1490657698&sr=1-2&keywords=network+attached+storage+DS916)

I didn't miss awesome [Free NAS](http://www.freenas.org/), but the [hardware](https://www.amazon.com/FreeNAS-Mini-Network-Attached-Diskless/dp/B00EQJ1BTU/ref=sr_1_2?ie=UTF8&qid=1490657211&sr=8-2-spons&keywords=network+attached+storage&psc=1) to run it costs $999, OMG...

### The $2XX solution

I bought this just right Dell Poweredge T20 for $267, it has an Intel Pentium G3220 3.0GHz CPU, 4GB memory and 1TB hard drive, much more powerful than 90% NAS machines, and with 1TB drive built-in, which saves approximate another $50, i installed Ubuntu 14.04 LTS on it, so that it has tons of customizing ways and I can do all sorts of crazy things on it :) By installing the awesome [Emby Media Server](https://emby.media/), my home thearter finished with last piece, all my movies/videos/photos got stored inside it, I configured it to be auto wake/sleep by adding the following line into crontab:

`0 22 * * * rtcwake -m disk -s 39600`

![Dell Poweredge T20](https://images10.newegg.com/productimage/59-155-115-04.jpg)
