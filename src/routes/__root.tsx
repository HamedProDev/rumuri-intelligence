import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { motion } from "motion/react";
import { MeshWave } from "@/components/site/MeshWave";
import { ThemeProvider } from "@/hooks/use-theme";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <MeshWave />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-md text-center"
      >
        <h1 className="text-8xl font-bold text-gradient-neon">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          This page wandered off into the Rwandan hills. Let's get you back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] glow-neon"
          >
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rumuri Intelligence — AI for Rwanda & Africa" },
      {
        name: "description",
        content:
          "Rumuri Intelligence is a Rwandan AI research and product company building foundational NLP, speech, vision, accessibility, and autonomous systems for Africa.",
      },
      { name: "author", content: "Rumuri Intelligence" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "Rumuri Intelligence — AI for Rwanda & Africa" },
      {
        property: "og:description",
        content:
          "Rumuri Intelligence is a Rwandan AI research and product company building foundational NLP, speech, vision, accessibility, and autonomous systems for Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Rumuri Intelligence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rumuri Intelligence — AI for Rwanda & Africa" },
      {
        name: "twitter:description",
        content:
          "Rumuri Intelligence is a Rwandan AI research and product company building foundational NLP, speech, vision, accessibility, and autonomous systems for Africa.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6c68127-f498-44c0-9e13-30d30cc2d683/id-preview-38da704c--e1f11878-8537-44a7-a118-df7de155a1d7.lovable.app-1783272362939.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6c68127-f498-44c0-9e13-30d30cc2d683/id-preview-38da704c--e1f11878-8537-44a7-a118-df7de155a1d7.lovable.app-1783272362939.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
