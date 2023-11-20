import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UseStateDemo from './UseStateDemo';
import TodoUseState from './TodoUseState';
import { UseEffectSorting } from './UseEffectSorting';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDemo } from './ReactQueryDemo';
import { ErrorBoundaryDemo } from './ErrorBoundaryDemo';
import { CatFacts } from './CatFacts';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/useState",
    element: <UseStateDemo />,
  },
  {
    path: "/todoUseState",
    element: <TodoUseState />,
  },
  {
    path: "/useEffectSortingExercise",
    element: <UseEffectSorting />
  },
  {
    path: "/reactQueryDemo",
    element: <ReactQueryDemo />
  },
  {
    path: "/testedComponent",
    element: <div>Tested component</div>
  },
  {
    path: "/errorBoundaryDemo",
    element: <ErrorBoundaryDemo />
  },
  {
    path: "/catFacts",
    element: <CatFacts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
