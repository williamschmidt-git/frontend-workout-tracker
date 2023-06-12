import {Outlet, useLoaderData} from '@remix-run/react';

export default function LoginRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
