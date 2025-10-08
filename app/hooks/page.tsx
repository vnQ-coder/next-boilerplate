import { Container } from "@/components/shared/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const hooks = [
  {
    name: "useLocalStorage",
    description:
      "Store and retrieve data from localStorage with automatic JSON serialization.",
    usage: `const [value, setValue] = useLocalStorage("key", initialValue);`,
  },
  {
    name: "useMediaQuery",
    description:
      "React to media query changes with presets for mobile, tablet, and desktop.",
    usage: `const isMobile = useIsMobile();\nconst matches = useMediaQuery("(min-width: 768px)");`,
  },
  {
    name: "useDebounce",
    description: "Debounce any value with customizable delay.",
    usage: `const debouncedValue = useDebounce(value, 500);`,
  },
  {
    name: "useMounted",
    description:
      "Check if component is mounted (useful for preventing hydration issues).",
    usage: `const mounted = useMounted();`,
  },
  {
    name: "useCopyToClipboard",
    description: "Copy text to clipboard with automatic feedback.",
    usage: `const { isCopied, copyToClipboard } = useCopyToClipboard();\ncopyToClipboard("text");`,
  },
  {
    name: "useToggle",
    description: "Toggle boolean state with a simple interface.",
    usage: `const [value, toggle, setValue] = useToggle(false);`,
  },
  {
    name: "useClickOutside",
    description: "Detect clicks outside of an element.",
    usage: `useClickOutside(ref, () => console.log("clicked outside"));`,
  },
  {
    name: "useScrollPosition",
    description: "Track scroll position of the window.",
    usage: `const { x, y } = useScrollPosition();`,
  },
];

export default function HooksPage() {
  return (
    <Container>
      <div className="py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Custom Hooks</h1>
          <p className="text-muted-foreground">
            A collection of useful React hooks ready to use in your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hooks.map((hook) => (
            <Card key={hook.name}>
              <CardHeader>
                <CardTitle className="text-xl font-mono">{hook.name}</CardTitle>
                <CardDescription>{hook.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">{hook.usage}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>
              All hooks are exported from a central index file for easy imports.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
                {`import { useLocalStorage, useMediaQuery, useDebounce } from "@/hooks";`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

