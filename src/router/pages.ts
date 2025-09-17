import { lazy } from "react";

export const UserPage = lazy(() => import("../pages/user/UserPage"));
export const CtfPage = lazy(() => import("../pages/ctf/CtfPage"));
export const LoginPage = lazy(() => import("../pages/login/LoginPage"));
export const HomePage = lazy(() => import("../pages/home/HomePage"));
export const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));
export const PrivacyPolicyPage = lazy(() => import("../pages/privacy-policy/PrivacyPolicy"));
export const TermsOfUsePage = lazy(() => import("../pages/terms-of-use/TermsOfUse"));
export const CyberWarfarePage = lazy(() => import("../pages/cyberwarfare/CyberWarfarePage"));