import {lazy} from "react";

export const EventPage = lazy(() => import("../pages/event/page.tsx"));
export const EventProfilePage = lazy(()=> import("../pages/event/eventProfilePage.tsx"))
export const LoginPage = lazy(() => import("../pages/login/page.tsx"));
export const SignupPage = lazy(() => import("../pages/signup/page.tsx"));
export const HomePage = lazy(() => import("../pages/home/page.tsx"));
export const ProfilePage = lazy(() => import("../pages/profile/page.tsx"));
export const DiscussionPage = lazy(() => import("../pages/discussion/page.tsx"));
export const JobsPage = lazy(() => import("../pages/jobs/page.tsx"));
export const PollPage = lazy(() => import("../pages/poll/page.tsx"));
export const AboutPage = lazy(() => import("../pages/about/page.tsx"));
export const MembersPage = lazy(() => import("../pages/members/page.tsx"));
export const MemberProfilePage = lazy(()=> import("../pages/members/memberProfilePage.tsx"))
export const JobProfilePage = lazy(()=> import("../pages/jobs/jobProfilePage.tsx"))
export const GroupPage = lazy(()=> import("../pages/group/page.tsx"));
export const GroupProfilePage = lazy(()=> import("../pages/group/groupProfilePage.tsx"))
export const DiscussionProfilePage = lazy(()=>import('../pages/discussion/discussionProfilePage.tsx'))
