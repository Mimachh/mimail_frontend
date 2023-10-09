// Menu components Desktop
import { LayoutDashboard, Settings, KeyRound, User, Layers } from "lucide-react"

export const navLinkComponent: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/register",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]


export const sidebarRoutes = [
  {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
     
  },
  {
      label: "Mes sites",
      icon: Layers,
      href: "/1",
      color: 'text-sky-400'
  },
  {
      label: "Mes clés API",
      icon: KeyRound,
      href: "/2",
      color: "text-violet-500"
  },
  {
      label: "Mon profil",
      icon: User,
      href: "/profile",
      color: "text-pink-700",
      beta: true
  },
  {
      label: "Paramètres",
      icon: Settings,
      href: "/video",
      color: "text-orange-700",
      beta: true
  }
]