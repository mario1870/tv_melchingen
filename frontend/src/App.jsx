import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Lazy Loading der Seitenkomponenten
const Home = lazy(() => import("./pages/Home"));
const Aktive = lazy(() => import("./pages/Aktive"));
const Jugend = lazy(() => import("./pages/Jugend"));
const Yoga = lazy(() => import("./pages/Yoga"));
const Gymnastik = lazy(() => import("./pages/Gymnastik"));
const Kinderturnen = lazy(() => import("./pages/Kinderturnen"));
const Roundnet = lazy(() => import("./pages/Roundnet"));
const Sponsoren = lazy(() => import("./pages/Sponsoren"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Sportheim = lazy(() => import("./pages/Sportheim"));
const Veranstaltungen = lazy(() => import("./pages/Veranstaltungen"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Admin = lazy(() => import("./pages/Admin"));

// Zentrale Verwaltung der Routen
const routes = [
  { path: "/", element: <Home /> },
  { path: "/aktive", element: <Aktive /> },
  { path: "/jugend", element: <Jugend /> },
  { path: "/yoga", element: <Yoga /> },
  { path: "/gymnastik", element: <Gymnastik /> },
  { path: "/kinderturnen", element: <Kinderturnen /> },
  { path: "/roundnet", element: <Roundnet /> },
  { path: "/sponsoren", element: <Sponsoren /> },
  { path: "/kontakt", element: <Kontakt /> },
  { path: "/sportheim", element: <Sportheim /> },
  { path: "/veranstaltungen", element: <Veranstaltungen /> },
  { path: "/impressum", element: <Impressum /> },
  { path: "/admin", element: <Admin /> },
];

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-violet-500 min-h-screen">
          <Suspense fallback={<div className="w-full min-h-full flex flex-col left-0 fixed bg-blue-900 justify-center items-center" style={{zIndex: "999"}}></div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;