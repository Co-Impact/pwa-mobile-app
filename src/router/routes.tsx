import { createBrowserRouter } from "react-router";
import {
  CtfPage,
  CyberWarfarePage,
  HomePage,
  LoginPage,
  PrivacyPolicyPage,
  ProfilePage,
  TermsOfUsePage,
  UserPage,
} from "./pages";
import RootRoute from "./RootRoute";
import RouteWrapper from "./RouteWrapper";
import SignUpPage from "../pages/signup/SignUpPage";

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
        path: "user",
        element: (
          <RouteWrapper isProtected={true}>
            <UserPage />
          </RouteWrapper>
        ),
      },
      {
        path: "ctf",
        element: (
          <RouteWrapper isProtected={true}>
            <CtfPage />
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
        path: "cyberwarfare",
        element: (
          <RouteWrapper isProtected={true}>
            <CyberWarfarePage />
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
            <SignUpPage />
          </RouteWrapper>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <RouteWrapper>
            <PrivacyPolicyPage />
          </RouteWrapper>
        ),
      },
      {
        path: "/terms-of-use",
        element: (
          <RouteWrapper>
            <TermsOfUsePage />
          </RouteWrapper>
        ),
      },
    ],
  },
]);
