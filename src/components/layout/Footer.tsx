import { Container } from "../ui/Container"
import { Link } from "react-router-dom"
import { navigation } from "../../config/navigation"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {Object.entries(navigation.footer).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[13px] font-semibold text-text-primary mb-4 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-[14px] text-text-muted hover:text-brand transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[14px] text-text-muted hover:text-brand transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-extrabold text-text-primary">Onkra</span>
            <span className="text-sm font-medium text-text-muted">.Online</span>
            <span className="text-xs text-text-muted ml-3">&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <p className="text-xs text-text-muted font-medium">
            Less, on purpose.
          </p>
        </div>
      </Container>
    </footer>
  )
}
