import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
//import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>oi</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
