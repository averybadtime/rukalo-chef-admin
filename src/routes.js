import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import Home from "@/partials/Home"
import Customers from "@/partials/dashboard/Customers"
import NotFound from "@/pages/NotFound"

export const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: Home,
        name: "dashboard"
      }
    ]
  },
  { path: "*", component: NotFound }
]