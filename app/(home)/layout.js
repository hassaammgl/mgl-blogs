import NavBar from "@/components/shared/Navbar";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from "@/components/shared/theme-provider"
import Footer from "@/components/shared/Footer";



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
            className={`antialiased`}
          >
            <NavBar />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}