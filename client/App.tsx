import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import DoctorsPage from "./pages/DoctorsPage";
import AiAssistantPage from "./pages/AiAssistantPage";
import YogaPage from "./pages/YogaPage";
import MedicinesPage from "./pages/MedicinesPage";
import HealthToolsPage from "./pages/HealthToolsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TelemedicinePage from "./pages/TelemedicinePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
          <Route path="/yoga" element={<YogaPage />} />
          <Route path="/medicines" element={<MedicinesPage />} />
          <Route path="/health-tools" element={<HealthToolsPage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
