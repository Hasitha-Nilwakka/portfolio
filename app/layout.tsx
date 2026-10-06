import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasitha Nilwakka | Full-Stack & Systems Engineer | AI, Cloud & FinTech",
  description:
    "Senior Hybrid Full-Stack & Systems Engineer with 10+ years of high-performance banking and operations leadership, combining React 19, TypeScript, Next.js 16, Go, Kubernetes, and GenAI inference pipelines.",
  keywords: [
    "Hasitha Nilwakka",
    "Full-Stack Engineer",
    "Software Engineer Espoo Finland",
    "TypeScript",
    "React 19",
    "Next.js",
    "Go",
    "Kubernetes",
    "FinTech Developer",
    "GenAI",
    "RunPod vLLM",
    "Argo CD",
    "DevOps",
  ],
  authors: [{ name: "Hasitha Nilwakka" }],
  openGraph: {
    title: "Hasitha Nilwakka | Full-Stack & Systems Engineer",
    description:
      "10+ Years Banking & Operations Leadership meets Modern Full-Stack (React/Next.js/Go) & Cloud AI.",
    url: "https://resume-radar-hvb3ka7hq-hasitha-nilwakkas-projects.vercel.app/",
    siteName: "Hasitha Nilwakka Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased selection:bg-sky-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
