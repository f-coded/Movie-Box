import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page Title";
        metaDescription = "Meta description for the home page.";
        break;
      case "/other-route":
        title = "Other Route Title";
        metaDescription = "Meta description for the other route.";
        break;
      // Add more cases for other routes as needed

      default:
        // Handle unknown routes here
        break;
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
