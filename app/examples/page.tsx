"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useCounterStore, useModalStore } from "@/lib/store/use-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDebounce, useToggle, useCopyToClipboard } from "@/hooks";

export default function ExamplesPage() {
  const { toast } = useToast();
  const { count, increment, decrement, reset } = useCounterStore();
  const { isOpen, closeModal, openModal } = useModalStore();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [isToggled, toggle] = useToggle(false);
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard("Hello from Next.js Boilerplate!");
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied successfully.",
    });
  };

  return (
    <Container>
      <div className="py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Examples</h1>
          <p className="text-muted-foreground">
            Explore various examples showcasing the boilerplate features.
          </p>
        </div>

        <Tabs defaultValue="state" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="state">State Management</TabsTrigger>
            <TabsTrigger value="hooks">Custom Hooks</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
          </TabsList>

          <TabsContent value="state" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Zustand Counter Example</CardTitle>
                <CardDescription>
                  A simple counter using Zustand for state management with
                  persistence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-6xl font-bold">{count}</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <Button onClick={decrement}>Decrement</Button>
                  <Button onClick={increment}>Increment</Button>
                  <Button onClick={reset} variant="outline">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modal Store Example</CardTitle>
                <CardDescription>
                  Global modal state management with Zustand.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => openModal("example")}>Open Modal</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hooks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>useDebounce Hook</CardTitle>
                <CardDescription>
                  Debounce user input to optimize performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Type something..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Immediate value: <strong>{searchTerm}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Debounced value: <strong>{debouncedSearch}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useToggle Hook</CardTitle>
                <CardDescription>
                  Simple boolean state toggling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button onClick={toggle}>
                    {isToggled ? "Turn Off" : "Turn On"}
                  </Button>
                  <p className="text-sm">
                    Status: <strong>{isToggled ? "ON" : "OFF"}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useCopyToClipboard Hook</CardTitle>
                <CardDescription>
                  Copy text to clipboard with feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleCopy}>
                  {isCopied ? "Copied!" : "Copy to Clipboard"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles and sizes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>
                  Show toast notifications to users.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button
                  onClick={() =>
                    toast({
                      title: "Success",
                      description: "Your action was completed successfully.",
                    })
                  }
                >
                  Show Toast
                </Button>
                <Button
                  variant="destructive"
                  onClick={() =>
                    toast({
                      title: "Error",
                      description: "Something went wrong.",
                      variant: "destructive",
                    })
                  }
                >
                  Show Error
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sample Form</CardTitle>
                <CardDescription>
                  Form with validation and submission.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    toast({
                      title: "Form Submitted",
                      description: "Your form has been submitted successfully.",
                    })
                  }
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog open={isOpen} onOpenChange={closeModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Example Modal</DialogTitle>
              <DialogDescription>
                This is a modal managed by Zustand state.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Modal content goes here. You can put any component inside this
                dialog.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button onClick={closeModal}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
}

