import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service Termination Tracker — Monitor Vendor Shutdowns",
  description: "Alert system for when cloud providers or SaaS tools terminate services in your region. Real-time alerts via email, Slack, or webhooks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5a6d3891-6450-45cc-a82b-f2afe598ceb4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
