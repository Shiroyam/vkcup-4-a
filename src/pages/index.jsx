import { Routes, Route } from "react-router";
import { lazy } from "react";

const FolderPage = lazy(() => import("./folder-page"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<FolderPage />} />
      <Route path="/:name" element={<FolderPage />} />
    </Routes>
  );
};
