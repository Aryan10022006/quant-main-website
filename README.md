# Quant Community, IIT Bombay - Official Website# Quant Community, IIT Bombay - Official Website



[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)](https://nextjs.org/)A professional, production-ready website for the Quant Community at IIT Bombay, built with Next.js 14, TypeScript, and Tailwind CSS.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)## 🚀 Features

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS, and Framer Motion

A modern, professional website for the Quant Community at IIT Bombay, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.- **Fully Responsive**: Beautiful design that works seamlessly on all devices

- **Professional Design**: Clean, modern aesthetic with cyan accent colors

## 🚀 Live Demo- **Smooth Animations**: Subtle micro-interactions using Framer Motion

- **SEO Optimized**: Proper meta tags and semantic HTML

Visit: [quantcommunity-iitb.vercel.app](https://quantcommunity-iitb.vercel.app) *(Update with actual URL)*- **Fast Performance**: Optimized for speed and Core Web Vitals



## ✨ Features## 📁 Project Structure



- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion```

- **Fully Responsive**: Optimized for mobile, tablet, and desktopquant-community-iitb/

- **Professional Design**: Dark theme with cyan accent (#00BFFF) and glassmorphism effects├── app/                          # Next.js App Router pages

- **Smooth Animations**: Framer Motion for micro-interactions and page transitions│   ├── layout.tsx               # Root layout with Navbar & Footer

- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimizations│   ├── page.tsx                 # Homepage

- **Image Optimization**: Next.js Image component with Instagram photo integration│   ├── about/page.tsx           # About Us page

- **Fast Performance**: Optimized for Core Web Vitals│   ├── projects/page.tsx        # Projects showcase (Summer of Quant)

│   ├── events/page.tsx          # Events archive

## 📁 Project Structure│   ├── team/page.tsx            # Team members page

│   ├── join/page.tsx            # Recruitment information

```│   └── globals.css              # Global styles & Tailwind imports

quant-community-iitb/│

├── app/                              # Next.js 14 App Router├── components/                   # React components

│   ├── layout.tsx                   # Root layout with Navbar & Footer│   ├── ui/                      # Reusable UI components

│   ├── page.tsx                     # Homepage with HeroSectionV2│   │   ├── Button.tsx           # Button component

│   ├── about/page.tsx               # About Us│   │   └── Card.tsx             # Card component

│   ├── events/page.tsx              # Events archive with Instagram photos│   ├── layout/                  # Layout components

│   ├── team/page.tsx                # Team members showcase│   │   ├── Navbar.tsx           # Navigation bar with mobile menu

│   ├── join/page.tsx                # Recruitment & community info│   │   └── Footer.tsx           # Site footer

│   ├── sponsors/page.tsx            # Partners & sponsors page│   ├── sections/                # Homepage sections

│   └── globals.css                  # Global styles & Tailwind│   │   ├── HeroSection.tsx      # Hero banner

││   │   ├── PillarsSection.tsx   # Three pillars showcase

├── components/│   │   └── PartnersSection.tsx  # Partners & collaborators

│   ├── ui/                          # Reusable UI components│   ├── EventCard.tsx            # Event display card

│   │   ├── Button.tsx              # Styled button component│   ├── ProjectCard.tsx          # Project display card

│   │   └── Card.tsx                # Card component│   └── TeamMemberCard.tsx       # Team member card

│   ├── layout/                      # Layout components│

│   │   ├── Navbar.tsx              # Navigation with mobile menu├── public/                       # Static assets

│   │   └── Footer.tsx              # Site footer│   └── images/                  # Images and logos

│   ├── sections/                    # Page sections│       └── qc_logo_dark.png     # Community logo

│   │   ├── HeroSectionV2.tsx       # Hero with rotating QC logo│

│   │   └── SponsorsBanner.tsx      # Animated sponsors banner├── tailwind.config.ts            # Tailwind configuration

│   ├── EventModal.tsx               # Event details modal├── tsconfig.json                 # TypeScript configuration

│   └── TeamMemberCard.tsx           # Team member display card└── package.json                  # Dependencies and scripts

│```

├── public/

│   └── images/## 🎨 Design System

│       ├── qc_white_logo.png           # White QC logo

│       ├── qc_logo_dark.png            # Dark QC logo### Color Palette

│       ├── instagram_photos/           # Instagram event photos- **Background**: White (#FFFFFF) and Light Grey (#F9FAFB)

│       │   └── quant.iitb/            # 75 event images- **Text**: Black (#111827) for headings, Dark Grey (#4B5563) for body

│       ├── imc.png                     # Sponsor logos- **Accent**: Professional Cyan (#06B6D4) for buttons, links, and highlights

│       ├── optiver.png- **Typography**: Inter font family for a clean, modern look

│       ├── tower_research_capital.png

│       ├── CQF_institute.png### Components

│       ├── qrt.png- **Button**: Three variants (primary, secondary, outline) with hover effects

│       └── dtl.png- **Card**: Elevated cards with hover animations and shadows

│- **Navbar**: Sticky navbar with glassmorphism effect and mobile menu

├── tailwind.config.ts               # Tailwind configuration- **Footer**: Comprehensive footer with links and contact information

├── tsconfig.json                    # TypeScript config

├── next.config.js                   # Next.js config## 🛠️ Getting Started

└── package.json                     # Dependencies

```### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

## 🎨 Design System- Git



### Color Palette### Installation

- **Background**: `#0A0A0A` (Almost black)

- **Primary Accent**: `#00BFFF` (Cyan)1. **Install Dependencies**

- **Secondary Accents**: `#0EA5E9`, `#0891B2`   ```bash

- **Text**: White (`#FFFFFF`), Gray (`#A0A0A0`)   npm install

   ```

### Typography

- **Headings**: Space Grotesk (900 weight)2. **Run Development Server**

- **Body**: Inter font family   ```bash

- **Letter Spacing**: 0.02em for headlines   npm run dev

   ```

### Key Design Elements

- **Glassmorphism**: `backdrop-blur-xl`, `bg-opacity-10`3. **Open Your Browser**

- **Glow Effects**: Box shadows with cyan color   Navigate to [http://localhost:3000](http://localhost:3000)

- **Animations**: Framer Motion with easeInOut

- **Responsive Breakpoints**: Mobile-first approach### Build for Production



## 🛠️ Getting Started```bash

npm run build

### Prerequisitesnpm start

- Node.js 18+ ```

- npm, yarn, or pnpm

- Git## 📄 Pages Overview



### Installation### Homepage (`/`)

- **Hero Section**: Compelling headline and call-to-actions

1. **Clone the repository**- **Pillars Section**: Three core activities (Research, Workshops, Competitions)

   ```bash- **Partners Section**: Industry partners and IITB-Citadel Lab highlight

   git clone https://github.com/quant-community-iitb/website.git

   cd website### About (`/about`)

   ```- Mission statement and community overview

- Introduction to quantitative finance

2. **Install dependencies**- Benefits of joining

   ```bash- Key statistics

   npm install --legacy-peer-deps

   ```### Projects (`/projects`)

- Summer of Quant (SoQ) program overview

3. **Run development server**- Showcase of past projects with descriptions and tags

   ```bash- Call-to-action to join

   npm run dev

   ```### Events (`/events`)

- Archive of past workshops, competitions, and guest lectures

4. **Open browser**- Event cards with type badges and dates

   Navigate to [http://localhost:3000](http://localhost:3000)- Multiple event categories



### Build for Production### Team (`/team`)

- Leadership team showcase

```bash- Team member cards with roles and LinkedIn links

npm run build- Recruitment CTA

npm start

```### Join (`/join`)

- Two-column layout for Freshers and Sophomores

## 📄 Pages Overview- Detailed recruitment information

- Timeline and process overview

### Homepage (`/`)- Contact information

- **Hero Section**: Animated QC logo (horizontal rotation), typing animation, statistics

- **Community Stats**: 900+ Members, 1000+ SoQ Participants, 20+ Team Members, 20+ Events## 🚢 Deployment

- **CTA Buttons**: "Explore Our Work" and "Join the Community"

- **Sponsors Banner**: Scrolling partner logos### Deploy to Vercel (Recommended)



### Events (`/events`)1. Push your code to GitHub

- **15 Events**: Mapped to Instagram photos by timestamp2. Import project to [Vercel](https://vercel.com)

- **Featured Banner**: Summer of Quant 20253. Vercel will auto-detect Next.js and deploy

- **Event Cards**: Image, title, partner, date, platform details

- **Modal System**: Click to view full event details### Deploy to Netlify



### Team (`/team`)1. Build the project: `npm run build`

- **2 Managers**: Siva Shankar Chitlanchya Madhav, Prabhat Dubey2. Deploy the `.next` folder to Netlify

- **9 Core Team Members**: Aryan, Mudil, Swayam, Hrisika, Abhinav, Devansh, Raaj, Gunjan, Divyansh

- **LinkedIn Integration**: Direct links to profiles### Other Platforms

- AWS Amplify

### Join (`/join`)- DigitalOcean App Platform

- **Community Engagement**: For all members vs. Core researchers- Cloudflare Pages

- **Manager Contacts**: 

  - Siva: +91 86391 47440## 📝 Customization

  - Prabhat: +91 90763 73141

- **WhatsApp & Email**: Contact options### Update Content



### Sponsors (`/sponsors`)1. **Homepage Sections**: Edit files in `components/sections/`

- **6 Partners**: IMC, Optiver, Tower Research, CQF Institute, QRT, DTL2. **Team Members**: Update the `leadership` array in `app/team/page.tsx`

- **Uniform Logo Sizing**: 80px container with responsive scaling3. **Projects**: Modify the `projects` array in `app/projects/page.tsx`

- **Hover Effects**: Opacity transitions4. **Events**: Update the `events` array in `app/events/page.tsx`



## 🖼️ Image Management### Change Colors



### Instagram Photos IntegrationEdit `tailwind.config.ts`:

- **75 Photos**: Located in `/public/images/instagram_photos/quant.iitb/`

- **Formats**: `.jpg`, `.webp`, `.heic````typescript

- **Timestamp-based**: Unix timestamps in filenames for event mappingtheme: {

- **Event Mapping**: Correctly matched to 15 events by date  extend: {

    colors: {

### Sponsor Logos      accent: {

- **Standardized Sizing**: All logos fit in 80px (h-20) containers        DEFAULT: "#06B6D4",  // Change this

- **Special Handling**: CQF Institute scaled to `w-32` for visibility        hover: "#0891B2",    // And this

- **Default Sizing**: Most logos use `max-h-12` constraint      },

- **Alignment**: Centered vertically and horizontally    },

  },

## 🚢 Deployment},

```

### Vercel (Recommended)

1. Push code to GitHub### Replace Logo

2. Import to [Vercel](https://vercel.com)

3. Auto-deploy on pushReplace `public/images/qc_logo_dark.png` with your logo (recommended size: 200x200px)



### Environment Setup## 🤝 Contributing

No environment variables required for basic deployment.

1. Fork the repository

### Custom Domain2. Create a feature branch (`git checkout -b feature/AmazingFeature`)

Configure in Vercel dashboard: Settings → Domains3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

## 📝 Customization Guide5. Open a Pull Request



### Update Events## 📧 Contact

Edit `app/events/page.tsx`:

```typescript**Quant Community, IIT Bombay**

const eventsData = [- Email: quantcommunity@iitb.ac.in

  {- LinkedIn: [Quant Community IIT Bombay](https://www.linkedin.com/company/quant-community-iit-bombay)

    title: "Event Name",- GitHub: [quant-community-iitb](https://github.com/quant-community-iitb)

    partner: "Partner Name",

    image: "/images/instagram_photos/quant.iitb/filename.jpg",## 📜 License

    date: "Event Date",

    description: "Event description",This project is licensed under the MIT License.

  },

];## 🙏 Acknowledgments

```

- IIT Bombay for hosting the community

### Update Team Members- Industry partners: Citadel Securities, AlgoBulls, IMC Trading, QuantInsti

Edit `app/team/page.tsx`:- All community members and contributors

```typescript

const managers = [---

  { name: "Name", role: "Manager", linkedIn: "URL" },

];Built with ❤️ by the Quant Community, IIT Bombay

```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#00BFFF",  // Change accent color
}
```

### Update Sponsors
Edit `app/sponsors/page.tsx` and add logo to `/public/images/`

## 🧹 Maintenance

### Unused Files Removed
- ✅ `DEPLOYMENT_CHECKLIST.md`
- ✅ `ERRORS_RESOLVED.md`
- ✅ `GRAND_REDESIGN_COMPLETE.md`
- ✅ `LAUNCH_READY.md`
- ✅ `PROJECT_SUMMARY.md`
- ✅ `QUICKSTART.md`
- ✅ `REFINEMENT_GUIDE.md`
- ✅ `STATUS.md`
- ✅ `components/sections/HeroSectionElegant.tsx` (unused)
- ✅ `components/ui/WireframeGlobe.tsx` (unused)

### Keep Updated
- Event images and descriptions
- Team member list
- Sponsor/partner information
- Contact details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

## 📧 Contact

**Quant Community, IIT Bombay**

- **Email**: quantcommunity@iitb.ac.in
- **Managers**:
  - Siva Shankar Chitlanchya Madhav: +91 86391 47440
  - Prabhat Dubey: +91 90763 73141
- **LinkedIn**: [Quant Community IIT Bombay](https://www.linkedin.com/company/quant-community-iit-bombay)
- **Instagram**: [@quant.iitb](https://www.instagram.com/quant.iitb)

## 📊 Statistics (October 2025)

- **900+** Community Members
- **1000+** Summer of Quant Participants
- **20+** Team Members
- **20+** Events Conducted
- **6** Industry Partners

## 🙏 Acknowledgments

- **Industry Partners**: IMC Trading, Optiver, Tower Research Capital, CQF Institute, QRT, DTL
- **Academic Partner**: IIT Bombay
- **Contributors**: All community members and core team

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ by the Quant Community, IIT Bombay**

*Last Updated: October 30, 2025*
