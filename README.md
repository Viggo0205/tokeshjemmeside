# Toke's Auto Værksted Website 🔧

En ligetil hjemmeside til et autoværksted. Lavet med Next.js og Tailwind CSS.

## Features

- 📱 Virker på telefoner og computere
- ⚡ Hurtig og simpel
- 🎨 Rent design uden corporate pis
- 🚀 Udruller til GitHub Pages
- 📋 Kontaktformular
- 🛠️ Serviceliste
- ⏰ Åbningstider og info

## Sektioner

- **Hero**: Hovedside med ligetil besked
- **Ydelser**: Hvad vi faktisk laver
- **Om**: Ægte snak om forretningen
- **Kontakt**: Kom i kontakt
- **Footer**: Links og basics

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd TokesHjemmeside
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment", select:
     - **Source**: GitHub Actions

4. The GitHub Actions workflow will automatically deploy your site when you push to the main branch

5. Your site will be available at: `https://<your-username>.github.io/<repository-name>/`

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `/public` folder with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub repository settings

## Customization

### Updating Business Information

Edit the following files to customize the content:

- **Business Name & Logo**: [components/Header.tsx](components/Header.tsx) and [components/Footer.tsx](components/Footer.tsx)
- **Hero Section**: [components/Hero.tsx](components/Hero.tsx)
- **Services**: [components/Services.tsx](components/Services.tsx)
- **Hours & Address**: [components/About.tsx](components/About.tsx)
- **Contact Info**: [components/Contact.tsx](components/Contact.tsx)

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#1e40af',    // Main brand color
      secondary: '#dc2626',  // Accent/CTA color
      accent: '#f59e0b',     // Additional accent
    },
  },
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies
```

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
