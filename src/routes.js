import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import NotFound from "@/pages/NotFound"

export const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { path: "*", component: NotFound }
]