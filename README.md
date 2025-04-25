# Company Search Application

## Features

- 🔍 Real-time search functionality with minimum 3 characters requirement
- 📊 Comprehensive company information display
- 💰 Financial data visualization
- 🎨 Modern, responsive UI with SCSS modules
- ⚡ Fast and efficient in-memory data handling
- 📱 Mobile-friendly design
- 🧪 Comprehensive test coverage with Jest and React Testing Library


## Tech Stack

- React 18
- TypeScript
- SCSS Modules
- Vite
- ESLint
- Jest
- React Testing Library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd company-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Run tests:
```bash
npm test
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm test` - Run tests

## Project Structure

```
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.tsx
│   │   └── SearchBar.module.scss
│   └── CompanyCard/
│       ├── CompanyCard.tsx
│       └── CompanyCard.module.scss
├── utils/
│   ├── hooks/
│   │   ├── useSearch.ts
│   │   ├── useFormat.ts
│   │   └── useDebounce.ts
│   └── format.ts
├── types/
│   └── company.ts
├── data/
│   └── mockData.ts
├── tests/
│   ├── components/
│   │   ├── SearchBar.test.tsx
│   │   └── CompanyCard.test.tsx
│   └── utils/
│       └── format.test.ts
├── App.tsx
├── App.module.scss
└── main.tsx
```

## Testing

The application includes comprehensive test coverage using Jest and React Testing Library:

### Component Tests
- SearchBar component tests
- CompanyCard component tests
- App integration tests

### Utility Tests
- Formatting utilities (currency, numbers, dates)
- Custom hooks
- Search functionality

### Test Setup
- Jest configuration for TypeScript
- React Testing Library setup
- Mock data for testing
- Custom test utilities
