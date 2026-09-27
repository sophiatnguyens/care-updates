# Care Updates

A mobile web app that gives families a daily window into their loved one's life in skilled nursing care. The same kind of real-time updates that daycare and pet-boarding apps have normalized, brought to elder care, where it's been missing.

## Why I built this

After volunteering at several nursing homes for over 3 years, I saw firsthand how disconnected families often feel from their loved one's day-to-day life. Mood, meals, activities, were all part of small moments that matter but rarely get communicated. Meanwhile, apps for daycare and pets do this kind of update sharing as a standard feature. This project applies that same idea to elder care.

## Features

- **Care Updates feed** — a daily stream of health, activity, and meal updates from staff, tagged and attributed
- **This Week's Activities** — a quick-glance calendar of facility activities, with today highlighted
- **Messaging** — real-time (client-side) messaging between family and the care team
- **Schedule a Visit** — a guided flow to request a visit (with the resident, a nurse, billing staff, or a day trip/outing), pick a date and time, and add a note

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- Tailwind CSS

## Running Locally

```bash
git clone https://github.com/sophiatnguyens/care-updates.git
cd care-updates
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Roadmap

This currently covers the family-facing side of the app. Planned next: a staff-facing side, including a quick-tap daily logging tool (to reduce typing burden on nursing staff) and in-app-only photo capture for HIPAA-conscious photo sharing with families.