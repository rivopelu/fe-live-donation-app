import { Route, Routes } from 'react-router-dom';
import Base from '@/components/Base.tsx';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/routes/route-list';

export default function RoutesBuilder() {
  return (
    <Routes>
      {[...PUBLIC_ROUTE, ...PRIVATE_ROUTE].map((route) => {
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
