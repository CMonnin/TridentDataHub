# TridentDataHub

A React-based static website for browsing and filtering research datasets with links to Borealis and Zenodo repositories. Features an interactive table built with TanStack Table.

## Features

- 🔍 **Filter by datatype and institution** - Easy-to-use dropdown filters
- 📊 **Interactive table** - Sortable columns powered by TanStack Table
- 🔗 **DOI links** - Direct links to Borealis and Zenodo datasets
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- ⚡ **Fast and lightweight** - Static React application with Vite
- 🎨 **Clean UI** - Modern, accessible interface

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TridentDataHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/TridentDataHub/` (or the URL shown in terminal)

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Update the base path in `vite.config.ts`**
   
   If deploying to `https://username.github.io/TridentDataHub/`:
   ```ts
   base: '/TridentDataHub/',
   ```
   
   If deploying to `https://username.github.io/` (user/organization pages):
   ```ts
   base: '/',
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Set Source to "GitHub Actions"

4. **Your site will be deployed automatically** on every push to the `main` branch.

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice

## Customization

### Adding/Editing Datasets

Edit `src/data.ts` to add, remove, or modify datasets:

```typescript
export const datasets: Dataset[] = [
  {
    id: 'unique-id',
    title: 'Dataset Title',
    description: 'Description of the dataset',
    datatype: 'Climate Data', // Your datatype
    institution: 'University Name',
    doi: '10.xxxx/xxxxxx',
    repository: 'borealis', // or 'zenodo'
    year: 2024,
    authors: ['Author Name'],
    tags: ['tag1', 'tag2']
  },
  // Add more datasets...
]
```

The table automatically updates with new datatypes and institutions.

### Styling

- **Global styles**: `src/index.css`
- **Custom styles**: `src/styles.css`
- **Component styles**: Inline Tailwind classes in components

To customize colors, fonts, or layout, modify the respective CSS files or component classes.

## Project Structure

```
TridentDataHub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── data.ts                 # Dataset data and filter options (15 datasets)
│   ├── types.ts                # TypeScript type definitions
│   ├── styles.css              # Custom styles
│   ├── index.css               # Global styles
│   ├── main.tsx                # Application entry point
│   └── App.tsx                  # Main component with table and filters
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies and scripts
├── .gitignore                  # Git ignore patterns
└── README.md                   # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run preview:pages` - Preview with GitHub Pages base path

## Technologies

- **React 19** - UI library
- **TanStack Table 8** - Interactive table with sorting
- **Vite 8** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS (via CDN)

## Dataset Information

Currently includes **15 datasets** from various institutions:
- **Datatypes**: Climate Data, Genomic, Linguistic, Imaging, Environmental, Structural Biology, Energy, Public Health, Ecological, Computational Physics, Social Science, Materials Science, Engineering, Agricultural Science
- **Institutions**: University of Alaska Fairbanks, University of British Columbia, University of Toronto, McGill University, University of Alberta, University of Saskatchewan
- **Repositories**: Borealis, Zenodo

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
