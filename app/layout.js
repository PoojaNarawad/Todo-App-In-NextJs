import "../styles/app.scss";
import Header from "./header";
import { ContextProvider } from "@/components/Clients";

export const metadata = {
  title: "ToDo App in Nextjs",
  description: "This is todo app in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
