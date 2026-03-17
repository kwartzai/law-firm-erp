import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Dashboard } from "./pages/Dashboard";
import { Clients } from "./pages/Clients";
import { Cases } from "./pages/Cases";
import { TimeTracking } from "./pages/TimeTracking";
import { Billing } from "./pages/Billing";
import { Documents } from "./pages/Documents";
import { Calendar } from "./pages/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "clients", Component: Clients },
      { path: "cases", Component: Cases },
      { path: "time-tracking", Component: TimeTracking },
      { path: "billing", Component: Billing },
      { path: "documents", Component: Documents },
      { path: "calendar", Component: Calendar },
    ],
  },
]);
