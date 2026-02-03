import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"
import { navigation } from "../../config/navigation"
import { useDownload } from "../../hooks/useDownload"

export function Navbar() {
  const { triggerDownload } = useDownload();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-0.5 select-none"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="text-xl font-extrabold tracking-tight text-brand-dark">Starnova</span>
          <span className="text-xl font-medium tracking-tight text-text-muted">Group.Online</span>
        </Link>

        <div className="hidden md:flex md:gap-x-8">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-[14px] font-medium text-text-secondary hover:text-brand transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" onClick={triggerDownload}>Download now</Button>
        </div>
      </Container>
    </nav>
  )
}
