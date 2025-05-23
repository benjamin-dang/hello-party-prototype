import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import { Box, CssBaseline, Container, Typography } from "@mui/material";
import PageContainer from "./Components/PageContainer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StepperProvider from "./ContextStore/ContextProvider/StepperProvider";
import SurveryProvider from "./ContextStore/ContextProvider/SurveyProvider";
import UserProvider from "./ContextStore/ContextProvider/UserProvider";
import OrderHistoryProvider from "./ContextStore/ContextProvider/OrderHistoryProvider";

export const links: Route.LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: '#FEFDF9' }}>
        <OrderHistoryProvider>
          <UserProvider>
            <StepperProvider>
              <SurveryProvider>
                <CssBaseline />
                <Header />
                <PageContainer>
                  {children}
                </PageContainer>
                <Footer />
              </SurveryProvider>
            </StepperProvider>
          </UserProvider>
        </OrderHistoryProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <Box mt={4} mb={4}>
        <Typography variant="h5" color="text.secondary" align="center">
          Diese Seite ist nicht Teil des Prototypen und dient nur als Platzhalter.
        </Typography>
      </Box>

    </main>
  );
}
