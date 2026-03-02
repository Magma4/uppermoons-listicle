# WEB103 Project 1 - *Demon Slayer • Upper Moons*

Submitted by: **Ray**

About this web app: **A Demon Slayer–themed listicle that showcases the six Upper Moon demons. Browse the card grid to see each demon's image, then click any card to view their full profile — including rank, ability type, story arc, threat level, and description. Built with Express, vanilla HTML/CSS/JS, and PicoCSS.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3001/uppermoons/kokushibo` and `localhost:3001/uppermoons/doma`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation*
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Hover effects with card lift, image zoom, and rank badge reveal animation
- [x] Custom Bebas Neue display font for headings paired with Inter body font
- [x] Gradient accent hero CTA button with glow effect
- [x] Responsive 3→2→1 column grid layout

## Video Walkthrough

Here's a walkthrough of implemented required features:

https://github.com/Magma4/uppermoons-listicle/blob/main/walkthrough.webp

GIF created with Antigravity browser recorder

## Notes

The main challenge was ensuring the data file and image filenames matched correctly (case sensitivity issues with `Kokushibo.webp` vs `kokushibo.webp`). Also had to remove an auto-augment function that was creating phantom card entries from mismatched image filenames in the public directory.

## License

Copyright 2026 Ray

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
