import { lazy } from "react";

export const EventPage = lazy(() => import("../pages/event/page.tsx"));
export const LoginPage = lazy(() => import("../pages/login/page.tsx"));
export const SignupPage = lazy(() => import("../pages/signup/page.tsx"));
export const HomePage = lazy(() => import("../pages/home/page.tsx"));
export const ProfilePage = lazy(() => import("../pages/profile/page.tsx"));
export const DiscussionPage = lazy(() => import("../pages/discussion/page.tsx"));
export const JobsPage = lazy(() => import("../pages/jobs/page.tsx"));
export const PollPage = lazy(() => import("../pages/poll/page.tsx"));