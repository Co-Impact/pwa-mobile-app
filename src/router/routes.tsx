import {createBrowserRouter} from "react-router";
import {
    AboutPage,
    DiscussionPage,
    DiscussionProfilePage,
    EventPage,
    EventProfilePage,
    GroupPage,
    GroupProfilePage,
    HomePage,
    JobProfilePage,
    JobsPage,
    LoginPage,
    MemberProfilePage,
    MembersPage,
    PollPage,
    ProfilePage,
    SignupPage,
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
          children:[
              {
                  path: ":id",
                  element: <EventProfilePage />,
              }
          ]
      },
      {
        path: "discussion",
          children:[
              {
                  index: true,
                  element: (
                      <RouteWrapper isProtected={true}>
                          <DiscussionPage />
                      </RouteWrapper>
                  ),
              },
              {
                  path:":id",
                  element: <DiscussionProfilePage/>
              }
          ]
      },
        {
            path: "members",
            children:[{
                index: true,
                element: (
                    <RouteWrapper isProtected={true}>
                        <MembersPage />
                    </RouteWrapper>
                ),
            },
                {
                    path: ":id",
                    element: <MemberProfilePage />,
                }
            ]
        },
        {
            path: "group",
            children:[{
                index: true,
                element: (
                    <RouteWrapper isProtected={true}>
                        <GroupPage />
                    </RouteWrapper>
                ),
            },
                {
                    path: ":id",
                    element: <GroupProfilePage />,
                }
            ]
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
          children:[{
            index: true,
              element: (
                  <RouteWrapper isProtected={true}>
                      <JobsPage />
                  </RouteWrapper>
              ),
          },
              {
                  path: ":id",
                  element: <JobProfilePage />,
              }
          ]
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
          <RouteWrapper isProtected={true}>
            <PollPage />
          </RouteWrapper>
        ),
      },
        {
            path: "/about-us",
            element: (
                <RouteWrapper>
                    <AboutPage />
                </RouteWrapper>
            ),
        },
    ],
  },
]);
