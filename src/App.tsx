
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransitionLayout from "./components/TransitionLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<TransitionLayout><Home /></TransitionLayout>} />
          <Route path="/about" element={<TransitionLayout><About /></TransitionLayout>} />
          <Route path="/careers" element={<TransitionLayout><Careers /></TransitionLayout>} />
          <Route path="/products" element={<TransitionLayout><Products /></TransitionLayout>} />
          <Route path="/shop" element={<TransitionLayout><Shop /></TransitionLayout>} />
          <Route path="/product/:id" element={<TransitionLayout><ProductDetail /></TransitionLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<TransitionLayout><NotFound /></TransitionLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
