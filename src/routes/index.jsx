import UserRoot from "../UserRoot";
import Accident from "../pages/accident";
import ControlPanel from "../pages/controlPanel";

export const ROUTES = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
          {
            path: "/",
            element: <ControlPanel />,
          },
          {
            path: "/accident",
            element: <Accident />,
          },
        ],
      },
]