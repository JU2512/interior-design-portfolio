import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import DuplexResidence from "./pages/DuplexResidence";
import SpaceGallery from "./pages/SpaceGallery";
import RestaurantInterior from "./pages/RestaurantInterior";
import Extracurricular from "./pages/Extracurricular";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Zoning from "@/pages/Zoning";
import FurnitureLayout from "@/pages/FurnitureLayout";
import CeilingLayout from "@/pages/CeilingLayout";
import LightingLayout from "@/pages/LightingLayout";
import KitchenLayout from "@/pages/KitchenLayout";
import RestaurantOrthographic from "./pages/RestaurantOrthographic";

const queryClient = new QueryClient();

const ScrollToTop = () => {
const { pathname } = useLocation();

useEffect(() => {
window.scrollTo(0, 0);
}, [pathname]);

return null;
};

const AppRoutes = () => (
<> <ScrollToTop />

```
<Routes>

  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />

  {/* DUPLEX PROJECT */}
  <Route path="/projects/duplex-residence" element={<DuplexResidence />} />

  {/* AUTOCAD DRAWINGS */}
  <Route path="/projects/duplex-residence/autocad/zoning" element={<Zoning />} />
  <Route path="/projects/duplex-residence/autocad/furniture-layout" element={<FurnitureLayout />} />
  <Route path="/projects/duplex-residence/autocad/ceiling-layout" element={<CeilingLayout />} />
  <Route path="/projects/duplex-residence/autocad/lighting-layout" element={<LightingLayout />} />
  <Route path="/projects/duplex-residence/autocad/kitchen-layout" element={<KitchenLayout />} />

  {/* RESTAURANT */}
  <Route path="/projects/restaurant-interior" element={<RestaurantInterior />} />
  <Route
    path="/projects/restaurant-interior/orthographic"
    element={<RestaurantOrthographic />}
  />

  {/* OTHER PAGES */}
  <Route path="/extracurricular" element={<Extracurricular />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/contact" element={<Contact />} />

  {/* DYNAMIC ROUTE ALWAYS LAST */}
  <Route path="/projects/duplex-residence/:space" element={<SpaceGallery />} />

  <Route path="*" element={<NotFound />} />

</Routes>
```

</>
);

const App = () => ( <QueryClientProvider client={queryClient}> <TooltipProvider> <Toaster /> <Sonner />

```
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>

</TooltipProvider>
```

  </QueryClientProvider>
);

export default App;
