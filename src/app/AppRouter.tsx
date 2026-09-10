import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { LessonDetailPage } from "@/features/lessons/detail/pages/LessonDetailPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/dersler/:lessonSlug" element={<LessonDetailPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
