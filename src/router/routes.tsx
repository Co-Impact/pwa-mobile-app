import { createBrowserRouter } from "react-router";
import {
    DiscussionPage,
    EventPage,
    HomePage, JobsPage,
    LoginPage, PollPage,
    ProfilePage, SignupPage,
} from "./pages";
import RootRoute from "./RootRoute";
import RouteWrapper from "./RouteWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "",
        element: (
          <RouteWrapper isProtected={true}>
            <HomePage />
          </RouteWrapper>
        ),
      },
      {
        path: "event",
        element: (
          <RouteWrapper isProtected={true}>
            <EventPage />
          </RouteWrapper>
        ),
      },
      {
        path: "discussion",
        element: (
          <RouteWrapper isProtected={true}>
            <DiscussionPage />
          </RouteWrapper>
        ),
      },
      {
        path: "profile",
        element: (
          <RouteWrapper isProtected={true}>
            <ProfilePage />
          </RouteWrapper>
        ),
      },
      {
        path: "jobs",
        element: (
          <RouteWrapper isProtected={true}>
            <JobsPage />
          </RouteWrapper>
        ),
      },
      {
        path: "/login",
        element: (
          <RouteWrapper>
            <LoginPage />
          </RouteWrapper>
        ),
      },
      {
        path: "/signup",
        element: (
          <RouteWrapper>
            <SignupPage />
          </RouteWrapper>
        ),
      },
      {
        path: "/poll",
        element: (
          <RouteWrapper>
            <PollPage />
          </RouteWrapper>
        ),
      },
    ],
  },
]);
