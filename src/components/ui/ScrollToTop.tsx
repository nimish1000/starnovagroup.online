import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  // Extract pathname to track route changes
  const { pathname } = useLocation()

  // Reset scroll position on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
