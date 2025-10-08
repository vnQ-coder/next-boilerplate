"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { Code, Palette, Zap, Package, Database, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js 14 Boilerplate
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
            Production-ready starter with TypeScript, TailwindCSS, Shadcn UI,
            TanStack Query, and Zustand. Built with best practices.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/examples">View Examples</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/components">Components</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-12">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>TypeScript First</CardTitle>
              <CardDescription>
                Fully typed with TypeScript for better developer experience and
                fewer runtime errors.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Shadcn UI</CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI and
                TailwindCSS.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>TanStack Query</CardTitle>
              <CardDescription>
                Powerful data fetching and caching with React Query integration.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Zustand</CardTitle>
              <CardDescription>
                Simple and scalable state management with minimal boilerplate.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Package className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Custom Hooks</CardTitle>
              <CardDescription>
                Collection of reusable hooks for common use cases and patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>
                Built-in theme support with light, dark, and system preferences.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Container>
  );
}

