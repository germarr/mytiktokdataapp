import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/components/Navbar";
import tailwindstyles from "~/styles/tailwind.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwindstyles,
    },
  ];
};

export default function index() {
  return (
    <div>
      <Navbar pos="sticky top-0 z-50" />
      <div>
        <Link prefetch="intent" to="./search">
          Go to search
        </Link>
      </div>
    </div>
  );
}
