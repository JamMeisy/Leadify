import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leadify - Lead + Amplify | Psychology of Voters and Candidates",
  description: "Empowering informed decision-making through deeper understanding of campaign dynamics, voter behavior, and political psychology.",
  keywords: "voter psychology, political campaigns, informed voting, democracy, Philippines, civic engagement",
  authors: [{ name: "Leadify" }],
  openGraph: {
    title: "Leadify - Lead + Amplify",
    description: "Understanding the Psychology of Voters and Candidates",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
