import { ArrowUpRight } from "lucide-react";
import type { ExpertiseLink } from "@/lib/expertise";
import s from "./Expertise.module.css";

/** Keep secondary reading together, after the primary call to action. */
export default function RelatedExpertise({
  links,
}: {
  links: ExpertiseLink[];
}) {
  if (!links.length) return null;
  return (
    <nav className={s.readNext} aria-label="Pour approfondir">
      <span>Pour approfondir</span>
      {links.slice(0, 2).map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
