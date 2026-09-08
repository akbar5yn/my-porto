import Typography from "../atoms/Typography";
import SocialIcons from "../molecules/SocialIcons";
import ThemeToggle from "../atoms/ThemeToggle";
import { ArrowLeft, ArrowRight, CalendarClock } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { type MouseEvent, useEffect, useRef, useState } from "react";

const navigationItems = [
  { id: "about", label: "ABOUT", to: "/about", detail: "Profile & skills" },
  {
    id: "experience",
    label: "EXPERIENCE",
    to: "/experience",
    detail: "Work history",
  },
  {
    id: "projects",
    label: "PROJECTS",
    to: "/projects",
    detail: "Selected work",
  },
];

const routeContentItems = {
  about: [
    {
      id: "about-description",
      label: "About me",
      detail: "Profile overview",
      target: "about-description",
    },
    {
      id: "non-technical-skills",
      label: "Non-technical",
      detail: "People skills",
      target: "non-technical-skills",
    },
    {
      id: "technical-skills",
      label: "Technical",
      detail: "Tools & stack",
      target: "technical-skills",
    },
  ],
  experience: [
    {
      id: "experience-carousel",
      label: "Experience",
      detail: "Work history",
      target: "experience-carousel",
    },
  ],
  projects: [
    {
      id: "project-item-1",
      label: "Laboratorium",
      detail: "Laravel / MySQL",
      target: "project-item-1",
    },
    {
      id: "project-item-2",
      label: "Clinic Gora",
      detail: "Vue / Tailwind",
      target: "project-item-2",
    },
  ],
} as const;

const allContentItems = Object.values(routeContentItems).flat();

const ProfileSection = () => {
  const [lastMaintained, setLastMaintained] = useState<string | null>(null);
  const manualNavigationRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeContentId =
    location.hash.replace("#", "") || allContentItems[0].id;
  const activeIndex = Math.max(
    navigationItems.findIndex((item) =>
      routeContentItems[item.id as keyof typeof routeContentItems].some(
        (contentItem) => contentItem.id === activeContentId,
      ),
    ),
    0,
  );
  const activeItem = navigationItems[activeIndex];
  const contentItems = allContentItems;

  const moveNavigation = (direction: number) => {
    const currentIndex = contentItems.findIndex(
      (item) => item.id === activeContentId,
    );
    const nextIndex =
      (currentIndex + direction + contentItems.length) % contentItems.length;
    manualNavigationRef.current = true;
    navigate(`/about#${contentItems[nextIndex].target}`, {
      state: { navigationSource: "arrow" },
    });
    window.setTimeout(() => {
      manualNavigationRef.current = false;
    }, 800);
  };

  const selectContent = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    manualNavigationRef.current = true;
    navigate(`/about#${targetId}`, {
      state: { navigationSource: "click" },
    });

    window.setTimeout(() => {
      manualNavigationRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/repos/akbar5yn/my-porto/commits?per_page=1", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to fetch repository updates");
        return response.json();
      })
      .then((commits: Array<{ commit?: { author?: { date?: string } } }>) => {
        const latestCommitDate = commits[0]?.commit?.author?.date;
        if (!latestCommitDate) return;

        setLastMaintained(
          new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(latestCommitDate)),
        );
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      () => {
        if (manualNavigationRef.current) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const visibleEntry = contentItems
          .map((item) => document.getElementById(item.target))
          .filter((section): section is HTMLElement => section !== null)
          .map((section) => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = containerRect.top + containerRect.height / 2;
            return {
              section,
              distance: Math.abs(sectionCenter - viewportCenter),
              isVisible:
                rect.bottom > containerRect.top &&
                rect.top < containerRect.bottom,
            };
          })
          .filter((item) => item.isVisible)
          .sort(
            (first, second) => first.distance - second.distance,
          )[0]?.section;

        if (!visibleEntry || visibleEntry.id === activeContentId) return;

        navigate(`/about#${visibleEntry.id}`, {
          replace: true,
          state: { navigationSource: "scroll" },
        });
      },
      { root: scrollContainer, threshold: [0.35, 0.55, 0.75] },
    );

    contentItems.forEach((item) => {
      const section = document.getElementById(item.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeContentId, contentItems, navigate]);

  useEffect(() => {
    document.getElementById(`section-item-${activeContentId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeContentId]);

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
          className="absolute right-5 top-5 z-10 flex items-center gap-3 md:right-7 md:top-7"
        >
          <div
            id="maintenance-meta"
            className="maintenance-meta flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-(--color-muted)"
          >
            <CalendarClock size={14} strokeWidth={1.8} aria-hidden="true" />
            <span>
              {lastMaintained
                ? `Last maintained · ${lastMaintained}`
                : "Checking latest update"}
            </span>
          </div>
          <ThemeToggle />
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
          {contentItems.map((item, index) => (
            <NavLink
              key={item.id}
              id={`section-item-${item.id}`}
              to={`/about#${item.target}`}
              onClick={(event) => selectContent(event, item.target)}
              className={`profile-carousel-item ${activeContentId === item.id ? "is-active" : "is-inactive"}`}
            >
              <span className="text-[10px] font-bold text-(--color-muted)">
                0{index + 1}
              </span>
              <span className="font-bold">{item.label}</span>
              <span className="text-xs text-(--color-muted)">
                {item.detail}
              </span>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;
