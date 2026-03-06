import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Clients } from "./pages/Clients";
import { ClientDetail } from "./pages/ClientDetail";
import { Cases } from "./pages/Cases";
import { CaseDetail } from "./pages/CaseDetail";
import { TimeTracking } from "./pages/TimeTracking";
import { Billing } from "./pages/Billing";
import { Documents } from "./pages/Documents";
import { Calendar } from "./pages/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "clients", Component: Clients },
      { path: "clients/:id", Component: ClientDetail },
      { path: "cases", Component: Cases },
      { path: "cases/:id", Component: CaseDetail },
      { path: "time-tracking", Component: TimeTracking },
      { path: "billing", Component: Billing },
      { path: "documents", Component: Documents },
      { path: "calendar", Component: Calendar },
    ],
  },
]);
