import { Route, Routes } from 'react-router-dom';
import { routeList } from '@/routes/route-list.ts';
import Base from '@/components/Base.tsx';

export default function RoutesBuilder() {
  return (
    <Routes>
      {routeList.map((route) => {
        const Element = route.element;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Base type={route.type}>
                <Element />
              </Base>
            }
          />
        );
      })}
    </Routes>
  );
}
