# WEB103 Project 2 - *Demon Slayer • Upper Moons*

Submitted by: **Ray**

About this web app: **A Demon Slayer–themed listicle that showcases the six Upper Moon demons, backed by a PostgreSQL database hosted on Render. Browse the card grid to see each demon's image, then click any card to view their full profile — including rank, ability type, story arc, threat level, and description. Search across all attributes to filter the list in real-time.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [x] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Hover effects with card lift, image zoom, and rank badge reveal animation
- [x] Custom Bebas Neue display font for headings paired with Inter body font
- [x] Responsive 3→2→1 column grid layout
- [x] Database reseeds automatically on every server start

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif?v=2' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

The main challenge was switching from Render's internal database hostname to the external hostname for local development, and restructuring the backend to follow the controller/route pattern from the lab.

## License

Copyright 2026 Raymond Frimpong Amoateng

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
