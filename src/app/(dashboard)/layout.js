import "./globals.css";
import CustomCursor from "@/components/shared/Cursor";
import Navbar from "@/components/shared/Menu";
import { fonts } from "../fonts";
import {
  ClerkProvider
} from "@clerk/nextjs";
import Scroll from "@/components/Scroll";
import { ThemeProvider } from "@/components/shared/theme-provider";
import {  MantineProvider } from '@mantine/core';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/api"
      signInForceRedirectUrl="/api"
    >
      <html lang="en">
        <body
          className={`${fonts.Amatic_SC.variable}  antialiased`}
        >
          <MantineProvider>

          <Scroll >
            <CustomCursor />
            <Navbar />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              {children}
            </ThemeProvider>
          </Scroll>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
