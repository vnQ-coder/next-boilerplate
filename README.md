# Next.js 14 Boilerplate

A production-ready Next.js 14 boilerplate with TypeScript, TailwindCSS, Shadcn UI, TanStack Query, and Zustand.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **TailwindCSS** for styling
- 🧩 **Shadcn UI** components
- 🔄 **TanStack Query (React Query)** for data fetching
- 🗃️ **Zustand** for state management
- 🎯 **TypeScript** for type safety
- 🌙 **Dark mode** support with next-themes
- 🪝 **Custom hooks** collection
- 📦 **Best practices** and **production-ready** code

## 📁 Project Structure

```
nextjs-boilerplate/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── examples/            # Example pages
│   ├── hooks/               # Hooks documentation page
│   └── components/          # Components documentation page
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   └── shared/              # Reusable shared components
│       ├── navbar.tsx
│       ├── theme-toggle.tsx
│       ├── loading-spinner.tsx
│       └── container.tsx
├── hooks/                    # Custom React hooks
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   ├── use-debounce.ts
│   ├── use-mounted.ts
│   ├── use-copy-to-clipboard.ts
│   ├── use-toggle.ts
│   ├── use-click-outside.ts
│   ├── use-scroll-position.ts
│   └── index.ts
├── lib/
│   ├── providers/           # React providers
│   │   ├── theme-provider.tsx
│   │   ├── query-provider.tsx
│   │   └── index.tsx
│   ├── store/               # Zustand stores
│   │   └── use-store.ts
│   └── utils.ts             # Utility functions
├── public/                   # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd nextjs-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Documentation

### Custom Hooks

All custom hooks are located in the `hooks/` directory and exported from `hooks/index.ts`:

#### useLocalStorage
Store and retrieve data from localStorage with automatic JSON serialization.

```typescript
const [value, setValue] = useLocalStorage("key", initialValue);
```

#### useMediaQuery
React to media query changes with presets for mobile, tablet, and desktop.

```typescript
const isMobile = useIsMobile();
const isTablet = useIsTablet();
const isDesktop = useIsDesktop();
const matches = useMediaQuery("(min-width: 768px)");
```

#### useDebounce
Debounce any value with customizable delay.

```typescript
const debouncedValue = useDebounce(value, 500);
```

#### useMounted
Check if component is mounted (useful for preventing hydration issues).

```typescript
const mounted = useMounted();
```

#### useCopyToClipboard
Copy text to clipboard with automatic feedback.

```typescript
const { isCopied, copyToClipboard } = useCopyToClipboard();
copyToClipboard("text");
```

#### useToggle
Toggle boolean state with a simple interface.

```typescript
const [value, toggle, setValue] = useToggle(false);
```

#### useClickOutside
Detect clicks outside of an element.

```typescript
useClickOutside(ref, () => console.log("clicked outside"));
```

#### useScrollPosition
Track scroll position of the window.

```typescript
const { x, y } = useScrollPosition();
```

### Zustand State Management

Zustand stores are located in `lib/store/use-store.ts`. Example stores included:

#### Counter Store

```typescript
import { useCounterStore } from "@/lib/store/use-store";

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

#### User Store

```typescript
import { useUserStore } from "@/lib/store/use-store";

function Profile() {
  const { user, setUser, clearUser } = useUserStore();
  
  return <div>{user?.name}</div>;
}
```

#### Modal Store

```typescript
import { useModalStore } from "@/lib/store/use-store";

function Modal() {
  const { isOpen, openModal, closeModal } = useModalStore();
  
  return (
    <button onClick={() => openModal("example")}>Open Modal</button>
  );
}
```

### TanStack Query (React Query)

TanStack Query is configured in `lib/providers/query-provider.tsx` with sensible defaults:

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";

function Example() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  
  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate and refetch
    },
  });
  
  return <div>...</div>;
}
```

### Shadcn UI Components

All UI components are located in `components/ui/`. Import and use them:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

### Theme Support

Dark mode is supported out of the box using `next-themes`:

```typescript
import { useTheme } from "next-themes";

function ThemeExample() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

Or use the built-in `ThemeToggle` component:

```typescript
import { ThemeToggle } from "@/components/shared/theme-toggle";

function Header() {
  return <ThemeToggle />;
}
```

### Toast Notifications

Show toast notifications using the `useToast` hook:

```typescript
import { useToast } from "@/components/ui/use-toast";

function Example() {
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "Success",
      description: "Your action was completed.",
    });
  };
  
  return <button onClick={showToast}>Show Toast</button>;
}
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize your color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}
```

### Fonts

Update fonts in `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🚀 Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy to Vercel by connecting your repository.

### Other Platforms

Build the application:

```bash
npm run build
```

The output will be in `.next/` directory. Follow your hosting provider's instructions for deploying Next.js applications.

## 🧪 Best Practices

This boilerplate follows these best practices:

- ✅ TypeScript for type safety
- ✅ Proper file structure and organization
- ✅ Reusable components and hooks
- ✅ State management with Zustand
- ✅ Server and client component separation
- ✅ Accessibility with Radix UI
- ✅ Responsive design
- ✅ Dark mode support
- ✅ SEO friendly
- ✅ Performance optimized

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📞 Support

For support, create an issue in the repository.

---

Built with ❤️ using Next.js 14

# next-boilerplate
