import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Collection from "./Components/Collection";
import ErrorPage from "./Components/ErrorPage";
import Root from "./Components/Root";

function App() {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root playStatus={playStatus} heroCount={heroCount} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
          ),
        },
        {
          path: 'contacts',
          element: <Contact />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'collection',
          element: <Collection />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
