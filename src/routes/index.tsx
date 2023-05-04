import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Welcome } from '../pages/Welcome/Welcome';
import { TypoHint } from '../pages/typo-hint/TypoHint';
import ProtectedRoute from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Welcome />} />
      <Route
        path="typo-hint"
        element={
          <ProtectedRoute>
            <TypoHint />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
