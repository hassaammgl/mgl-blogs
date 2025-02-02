import NavBar from "@/components/shared/Navbar";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from "@/components/shared/theme-provider"
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "hassaammgl",
  description: "hassaammgl.com - Personal Blogs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/api"
      signUpFallbackRedirectUrl="/api"
    >
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body
            className={`antialiased overflow-hidden`}
          >
            <NavBar />
            {children}
            <Toaster />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}