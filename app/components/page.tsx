import { Container } from "@/components/shared/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const components = [
  {
    category: "UI Components",
    items: [
      {
        name: "Button",
        description:
          "Versatile button component with multiple variants and sizes.",
      },
      {
        name: "Card",
        description: "Flexible card container with header, content, and footer.",
      },
      {
        name: "Dialog",
        description: "Modal dialog with overlay and focus management.",
      },
      {
        name: "Input",
        description: "Text input with built-in styling and validation support.",
      },
      {
        name: "Label",
        description: "Form label component for accessibility.",
      },
      {
        name: "Select",
        description: "Dropdown select component with search and keyboard navigation.",
      },
      {
        name: "Switch",
        description: "Toggle switch for boolean values.",
      },
      {
        name: "Tabs",
        description: "Tab navigation component for organizing content.",
      },
      {
        name: "Toast",
        description: "Notification toast with customizable variants.",
      },
      {
        name: "Dropdown Menu",
        description: "Context menu with nested items and separators.",
      },
    ],
  },
  {
    category: "Shared Components",
    items: [
      {
        name: "ThemeToggle",
        description: "Theme switcher with light, dark, and system modes.",
      },
      {
        name: "Navbar",
        description: "Responsive navigation bar with theme toggle.",
      },
      {
        name: "LoadingSpinner",
        description: "Animated loading spinner with size variants.",
      },
      {
        name: "Container",
        description: "Responsive container with consistent padding.",
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <Container>
      <div className="py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Components</h1>
          <p className="text-muted-foreground">
            Pre-built components using Shadcn UI and custom shared components.
          </p>
        </div>

        {components.map((category) => (
          <div key={category.category} className="space-y-4">
            <h2 className="text-2xl font-bold">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((component) => (
                <Card key={component.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Component Structure</CardTitle>
            <CardDescription>
              All components follow best practices and are fully typed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">UI Components</h3>
              <p className="text-sm text-muted-foreground">
                Located in <code className="bg-muted px-1 py-0.5 rounded">components/ui/</code>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with Radix UI primitives and TailwindCSS
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shared Components</h3>
              <p className="text-sm text-muted-foreground">
                Located in <code className="bg-muted px-1 py-0.5 rounded">components/shared/</code>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Reusable business logic components
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

