import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const FolderPage = lazy(() => import("./folder-page"));
const MessagePage = lazy(() => import("./message-page"));

export const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <FolderPage />
          </Suspense>
        }
      />
      <Route
        path="/:name"
        element={
          <Suspense>
            <FolderPage />
          </Suspense>
        }
      />
      <Route
        path="/:name/:id"
        element={
          <Suspense>
            <MessagePage />
          </Suspense>
        }
      />
    </Routes>
  );
};
