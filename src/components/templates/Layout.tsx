import { ReactNode } from "react";
import ProfileSection from "../organisms/ProfileSection";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const scrollContainer = document.getElementById("main-scroll");
    const target = document.getElementById(targetId);
    if (!scrollContainer || !target) return;

    requestAnimationFrame(() => {
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + targetTop - containerTop - 24,
        behavior:
          location.state?.navigationSource === "scroll" ? "auto" : "smooth",
      });
    });
  }, [location.hash, location.pathname, location.state]);

  return (
    <div
      id="app-layout"
      className="layout mx-auto grid w-full max-w-screen-2xl items-start gap-8 px-6 py-8 md:px-10 lg:h-[calc(100vh-4rem)] lg:grid-cols-[40%_auto] lg:items-center lg:gap-10 lg:overflow-hidden lg:py-10"
    >
      <div
        id="profile-column"
        className="w-full lg:sticky lg:top-10 lg:self-start"
      >
        <ProfileSection></ProfileSection>
      </div>
      <div
        id="main-content"
        className="main-content relative w-full min-w-0 self-stretch overflow-hidden"
      >
        <div
          id="main-scroll"
          className="main-scroll overflow-y-auto overflow-x-hidden lg:h-full"
        >
          <motion.main
            key={`${location.pathname}${location.hash}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            id="route-content"
            className="route-content w-full"
          >
            {children}
          </motion.main>
        </div>
        <div
          className="main-content-blur main-content-blur-top"
          aria-hidden="true"
        />
        <div
          className="main-content-blur main-content-blur-bottom"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Layout;
