---
title: ฝากถอนไม่มีขั้นต่ำ เปิดรับทุกช่องทางทั้งธนาคารและวอเลทสุดคุ้มสะดวกมั่นใจ
description: "ใครที่กำลังมองหาเว็บที่คุ้มค่า ไม่เรื่องมาก ฝากถอนไม่มีขั้นต่ำ และเป็นเว็บตรงไม่ผ่านเอเย่นต์ มีโปรโมชั่นที่คุ้มค่า มีเกมให้เล่นที่หลากหลาย หากยังหาไม่มี ต้องจัดเว็บของเรานี่แหละ"
hero: "https://i.postimg.cc/KzpRj3sZ/01.jpg"
keywords: "ฝากถอนไม่มีขั้นต่ำ, ถอนไม่มีขั้นต่ำ, ฝากไม่มีขั้นต่ำ,"
pubDate: "2022-12-10"
tags: ["astro"]
layout: "../../layouts/BlogPostLayout.astro"
---
Typically the convenience of a CSS framework like Bulma comes at the cost of sending loads of unused css to the browser increasing load times and hindering user experience. So just don't use Bulma (or Bootstrap, Tailwind, or otherwise) right? No, that can't be the answer. These frameworks add to the designer's experience and ability to quickly turn around a finished design. 

Enter [Purge CSS](https://www.purgecss.com/). Purge CSS crawls through your html and css comparing them and removing any unused selectors from your stylesheets at build time so that they can be as slim as possible. So all those useful classes that Bulma has but you just aren't using right now won't slow down your site. And then maybe you decide to use one of them in the future. BOOM, it's there next time you compile with no thought on your part. 

Since Awake is built on the JAM Stack, it can easily take advantage of this technology and so Purge CSS is baked right in. It's that simple. Use Bulma to your hearts content without the bloat.



# Caveats

There are some caveats to Purge CSS especially around dynamically created classes. Since these classes aren't fully fleshed out in the .vue files, Purge CSS doesn't know they exist and therefore will strip out their  corresponding css. The fix is pretty simple though, Purge CSS allows us to whitelist classes that should never be purged whether they are found in the html or not. The whitelisting process is described in full in the [Purge CSS docs](https://www.purgecss.com/whitelisting). You can set the `whitelist` option as well as any other purge css option in `config/build.js`.
Sometimes when dev mode and adding markup that uses classes that have not previously been in use, you must restart dev mode for Purge CSS to pick up on the change. 
