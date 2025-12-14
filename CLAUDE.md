# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

All commands run from the `client/` directory:

```bash
npm run dev      # Start Vite dev server with hot reload
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint on all files
npm run preview  # Preview production build locally
```

## Technology Stack

- **React 19** with TypeScript (strict mode)
- **Vite** for build tooling
- **React Router v7** for client-side routing
- **TanStack React Query** for server state and API caching
- **React Context API** for local state (cart, filters)
- **React Hook Form** + **Zod** for form validation
- **Fake Store API** (`https://fakestoreapi.in/api/products/category?type={type}`) for product data

## Architecture Overview

### State Management Pattern

The app uses a split state approach:
- **Server state** (products): Managed by React Query with query keys like `["products", categoryName]`
- **Local state** (cart, filters): Managed by React Context providers

Provider nesting in App.tsx:
```
FilterProvider → CartProvider → QueryClientProvider → RouterProvider
```

### Key Directories

```
client/src/
├── components/     # Reusable UI components (ScrollToTop)
├── features/       # Context providers and state logic
│   ├── cart/       # CartContext - items, add, remove, quantity
│   └── products/   # FilterContext - maxPrice, sort order
├── pages/          # Route-based page components
└── services/       # API-connected components (ProductService)
```

### Routing Structure

Routes defined in `App.tsx` using `createBrowserRouter`:
- `/` → HomePage (category grid)
- `/category/:name` → Products (filtered by category)
- `/search?q=query` → SearchResults (cross-category search)
- `/cart` → Cart
- `/login`, `/register` → Auth pages
- `/StudentDiscount` → Laptops with 5% discount

### Data Flow Patterns

**Cart operations**: Components call `useCart()` hook → CartContext updates state → Nav re-renders cart badge

**Product filtering**: URL params (`?maxPrice=20`) read via `useSearchParams` → FilterContext applies client-side filtering/sorting

**Search**: Parallel API calls to all categories → client-side filter by title/description match

### Authentication

Uses localStorage for user persistence:
- Users stored as JSON array under `"users"` key
- Registration validates with Zod schema (email format, password strength)
- Login checks credentials against stored users

## Important Files

- `client/src/App.tsx` - Router configuration and provider setup
- `client/src/features/cart/CartContext.tsx` - Cart state management
- `client/src/features/products/FilterContext.tsx` - Filter/sort state
- `client/src/services/ProductService.tsx` - Products component with API fetching
- `client/src/navbar.tsx` - Navigation with search and responsive menu
