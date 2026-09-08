import { ReactNode } from "react";
import { NavLink } from "react-router";

type LinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
};
const Link = (props: LinkProps) => {
  const { children, className, to } = props;

  return (
    <NavLink
      to={`${to}`}
      key={to}
      className={({ isActive }) =>
        `${className} text-[13px] lg:text-base border border-[var(--color-border)] px-2 rounded-md transition-all duration-300 font-semibold ${isActive ? "border-[var(--color-strong)] bg-[var(--color-strong)] text-[var(--color-inverse)]" : "bg-[var(--color-surface)] text-[var(--color-text)]"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default Link;
