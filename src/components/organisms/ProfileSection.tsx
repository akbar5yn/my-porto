import Typography from "../atoms/Typography";
import SocialIcons from "../molecules/SocialIcons";
import ThemeToggle from "../atoms/ThemeToggle";
import { ArrowLeft, ArrowRight, CalendarClock } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  {
    id: "about",
    label: "About Me",
    to: "/about",
    detail: "Profile overview",
  },
  {
    id: "experience",
    label: "Experience",
    to: "/experience",
    detail: "Work history",
  },
  {
    id: "projects",
    label: "Project",
    to: "/projects",
    detail: "Selected work",
  },
] as const;

const ProfileSection = () => {
  const [lastMaintained, setLastMaintained] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const manualNavigationRef = useRef(false);

  const activeItem =
    navigationItems.find((item) => item.to === location.pathname) ||
    navigationItems[0];

  const activeContentId = activeItem.id;

  const moveNavigation = (direction: number) => {
    const currentIndex = navigationItems.findIndex(
      (item) => item.to === location.pathname,
    );
    const nextIndex =
      (currentIndex + direction + navigationItems.length) %
      navigationItems.length;

    manualNavigationRef.current = true;
    navigate(navigationItems[nextIndex].to, {
      state: { navigationSource: "arrow" },
    });
    window.setTimeout(() => {
      manualNavigationRef.current = false;
    }, 800);
  };

  const selectContent = (to: string) => {
    manualNavigationRef.current = true;
    navigate(to, {
      state: { navigationSource: "click" },
    });
    window.setTimeout(() => {
      manualNavigationRef.current = false;
    }, 1000);
  };

  /**
   * Fetch latest repository update.
   */
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/repos/akbar5yn/my-porto/commits?per_page=1", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch repository updates");
        }

        return response.json();
      })
      .then(
        (
          commits: Array<{
            commit?: {
              author?: {
                date?: string;
              };
            };
          }>,
        ) => {
          const latestCommitDate = commits[0]?.commit?.author?.date;

          if (!latestCommitDate) return;

          setLastMaintained(
            new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(new Date(latestCommitDate)),
          );
        },
      )
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  return (
    <div
      id="profile-section"
      className="relative flex w-full flex-col overflow-hidden rounded-2xl bg-(--color-panel)"
    >
      <section
        id="identity-visual"
        className="identity-visual relative flex min-h-95 flex-1 flex-col gap-4 overflow-hidden p-6 pt-18 md:p-8 md:pt-22 xl:min-h-105"
      >
        <div id="social-links" className="absolute -top-px -left-px z-50">
          <SocialIcons />
        </div>

        <div
          id="identity-tools"
          className="absolute right-5 top-4 z-10 flex flex-col items-end gap-3 md:right-7 md:top-4 md:flex-row md:items-center"
        >
          <div
            id="maintenance-meta"
            className="order-2 maintenance-meta flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-(--color-muted) md:order-1"
          >
            <CalendarClock size={14} strokeWidth={1.8} aria-hidden="true" />

            <span>
              {lastMaintained
                ? `Last maintained · ${lastMaintained}`
                : "Checking latest update"}
            </span>
          </div>

          <div className="order-1 md:order-2">
            <ThemeToggle />
          </div>
        </div>

        <div
          id="identity-copy"
          className="identity-copy relative z-10 mt-auto flex flex-col gap-3"
          aria-label="Profile identity"
        >
          <div id="profile-name" className="identity-outline identity-name">
            Akbar Pratama Suryamin
          </div>

          <div id="profile-role" className="identity-outline identity-role">
            Web Developer
          </div>

          <div id="work-status" className="identity-outline identity-status">
            <span className="identity-status-dot" />

            <span id="work-status-copy">
              <strong>Currently working at Alfamart</strong>

              <small>PT Global Loyalty Indonesia</small>
            </span>
          </div>

          <p
            id="profile-description"
            className="identity-outline identity-description"
          >
            Developing responsive and intuitive web applications using modern
            technologies to deliver an optimal user experience.
          </p>
        </div>
      </section>

      <section
        id="navigation-visual"
        className="section-2 relative z-20 w-full space-y-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 bayangan"
      >
        <div
          id="section-navigation"
          className="flex items-center justify-between gap-4"
        >
          <div id="active-section-heading">
            <p
              id="active-section-label"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-muted)"
            >
              Current section
            </p>

            <Typography tag="h2" variantClass="subtitle">
              {activeItem.label}
            </Typography>
          </div>

          <div id="section-arrows" className="flex items-center gap-2">
            <button
              type="button"
              id="previous-section"
              onClick={() => moveNavigation(-1)}
              aria-label="Previous section"
              className="carousel-arrow"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              id="next-section"
              onClick={() => moveNavigation(1)}
              aria-label="Next section"
              className="carousel-arrow"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          id="section-carousel"
          className="profile-carousel"
          aria-label={`${activeItem.label} content sections`}
        >
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              id={`section-item-${item.id}`}
              type="button"
              onClick={() => selectContent(item.to)}
              className={`profile-carousel-item ${
                activeContentId === item.id ? "is-active" : "is-inactive"
              }`}
            >
              <span className="text-[10px] font-bold text-(--color-muted)">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-bold">{item.label}</span>

              <span className="text-xs text-(--color-muted)">
                {item.detail}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;
