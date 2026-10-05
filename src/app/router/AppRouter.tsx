import { Route, Routes } from 'react-router';

import { AboutPage } from '@pages/about';
import { HomePage } from '@pages/home';
import { NotFoundPage } from '@pages/not-found';
import { PlacesPage } from '@pages/places';
import { PracticePage } from '@pages/practice';
import { TaskOnePage } from '@pages/task-01';

import { AppLayout } from '../layouts/AppLayout';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="places" element={<PlacesPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="practice/task-01" element={<TaskOnePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
