import { ReactNode, useEffect } from "react";
import ProfileSection from "../organisms/ProfileSection";
import { motion } from "motion/react";
import { useLocation } from "react-router";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    if (!scrollContainer) return;

    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      id="app-layout"
      className="
        layout
        mx-auto
        grid
        w-full
        max-w-screen-2xl
        items-start
        gap-8
        px-6
        py-8
        md:px-10
        lg:h-[calc(100vh-4rem)]
        lg:grid-cols-[40%_auto]
        lg:items-center
        lg:gap-10
        lg:overflow-hidden
        lg:py-10
      "
    >
      <div
        id="profile-column"
        className="
          w-full
          lg:sticky
          lg:top-10
          lg:self-start
        "
      >
        <ProfileSection />
      </div>

      <div
        id="main-content"
        className="
          main-content
          relative
          w-full
          min-w-0
          self-stretch
          overflow-hidden
        "
      >
        <div
          id="main-scroll"
          className="
            main-scroll
            overflow-x-hidden
            overflow-y-visible
            lg:h-full
            lg:overflow-y-auto
          "
        >
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
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
