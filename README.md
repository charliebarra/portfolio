# Charlie Barra Portfolio

<p align="center">
  <img src="assets/images/hero-charlie.png" alt="Charlie Barra portfolio hero image" width="760">
</p>

<p align="center">
  <strong>A hand-coded portfolio for my game design, programming, competitive Pokémon, and interactive world-design work.</strong>
</p>

<p align="center">
  <a href="https://charliebarra.com/">View the Live Site</a>
  ·
  <a href="https://github.com/charliebarra/meteor-mayhem">Meteor Mayhem Repository</a>
  ·
  <a href="https://www.youtube.com/@charlie-barra">Project Videos</a>
</p>

---

## Why I Built This

I wanted one place where someone could see both **what I built** and **how I got there**.

The site started as a way to organize projects for college applications, but it became a record of the questions behind them. Most of the work follows the same pattern: I notice something, wonder why it works that way, build something to test it, and usually end up with another question.

I built the site by hand instead of using a template because I wanted control over the layout, navigation, project pages, and the way everything connects.

## What Is in the Portfolio

### Story

A timeline showing how games, competitive Pokémon, Roblox, Minecraft, programming, and cybersecurity gradually changed the questions I was asking.

### Work

A short project index that leads to the main case studies:

- **Meteor Mayhem** — original multiplayer strategy card game
- **Programming Projects** — four chronological Python projects
- **Interactive World Design** — Roblox Studio and Lua experiments

### Competitive Play

My experience competing in the Pokémon Trading Card Game, including international events and the World Championships.

### Field Notes

Short observations about games, balance, players, interfaces, prototypes, and questions I am still thinking about.

### Resume and Contact

A downloadable résumé and links to GitHub, YouTube, and the rest of the portfolio.

## Featured Case Study

### Meteor Mayhem

Meteor Mayhem is the most complete case study on the site.

It includes:

- the original design question,
- early planning and process images,
- physical prototypes,
- playtesting photos,
- an expandable playtesting journal,
- probability and balancing notes,
- card sheets,
- a video walkthrough,
- and ideas I would explore next.

[Read the Meteor Mayhem case study](https://charliebarra.com/meteor-mayhem.html)

## Technology

The site intentionally uses a simple stack:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **GitHub Pages**
- **YouTube embeds**
- **No framework**
- **No build step**

I kept the setup simple so the project would be easy to understand, update, and deploy.

## Repository Structure

```text
portfolio/
├── index.html                  # Home
├── story.html                  # Personal timeline
├── projects.html               # Work index
├── meteor-mayhem.html          # Flagship case study
├── programming.html            # Python projects
├── world-design.html           # Roblox design studies
├── pokemon.html                # Competitive Pokémon
├── notebook.html               # Field Notes
├── resume.html                 # Résumé overview
├── contact.html                # Contact links
├── styles.css                  # Shared visual system
├── script.js                   # Lightbox and interactions
├── assets/
│   └── images/                 # Optimized site images
├── documents/
│   └── Charlie-Barra-Resume.pdf
├── favicon.ico
├── site.webmanifest
└── README.md
```

Some redirect pages remain in the repository so older links continue to work.

## Design Decisions

### One shared visual system

All main pages use the same navigation, typography, spacing, cards, buttons, and footer styles.

### Mobile first enough to matter

Visitors may open the portfolio on a phone or tablet, so the site includes:

- responsive grids,
- stacked project layouts,
- larger touch targets,
- mobile-friendly navigation,
- reduced-motion support,
- and images that resize without overflowing.

### Process over polish

The site does not only show finished work. It also includes sketches, early versions, playtesting evidence, bugs, changes, and questions that are still open.

That part matters to me because the finished project is usually not the most interesting part of the story.

### Accessibility

The site includes:

- semantic HTML,
- descriptive image alt text,
- visible keyboard focus,
- a skip-to-content link,
- labeled gallery controls,
- reduced-motion support,
- and an accessible image lightbox.

## Run the Site Locally

There is no installation or build process.

### Option 1 — Open directly

Download the repository and open:

```text
index.html
```

in a browser.

### Option 2 — Use a local server

From the repository folder, run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

A local server is useful for checking links and asset paths before deploying.

## Deployment

The site is deployed through GitHub Pages from this repository.

Live site:

**https://charliebarra.com/**

When files are committed to the publishing branch, GitHub Pages rebuilds the site automatically.

## Updating the Portfolio

When I add a new project, I try to include more than a title and a screenshot.

A strong project page should answer:

1. What was I trying to figure out?
2. What did I build?
3. What changed while I was making it?
4. What surprised me?
5. What would I try next?

That makes the site more useful than a list of finished assignments.

## Current Priorities

- Organize the four Python projects into their own GitHub repositories
- Add source-code links and visual READMEs
- Keep documenting playtesting and design changes
- Finish the TCG matchup simulator
- Add new Field Notes when I notice something worth keeping

## Related Links

- [Live Portfolio](https://charliebarra.com/)
- [GitHub Profile](https://github.com/charliebarra)
- [Meteor Mayhem Repository](https://github.com/charliebarra/meteor-mayhem)
- [YouTube Channel](https://www.youtube.com/@charlie-barra)

---

This repository is the technical side of the portfolio. The website tells the story; the files here show how I built and organized it.

## Site Credits and AI Use

This portfolio was developed collaboratively. OpenAI’s ChatGPT supported editorial refinement, content organization, design thinking, accessibility review, quality assurance, and presentation.

My programming projects, game designs, project decisions, reflections, competitive accomplishments, and underlying work are my own unless a page says otherwise. AI helped me organize and present the work; it did not create the original projects or accomplishments.

The visual reference boards on the Interactive World Design page contain third-party images collected through online searches. I selected and arranged those references, but I did not create the individual artworks.
