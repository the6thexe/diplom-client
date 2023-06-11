import Admin from "./pages/Admin"
import AdminStudent from "./pages/AdminStudent"
import AdminGroup from "./pages/AdminGroup"
import AdminSpec from "./pages/AdminSpec"
import AdminDiscipline from "./pages/AdminDiscipline"

import Auth from "./pages/Auth"
import Pad from "./pages/Pad"
import StudentPage from "./pages/StudentPage"
import Tab from "./pages/Tab"
import { ADMIN_ROUTE, PAD_ROUTE, STUDENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, ADMIN_STUDENT, ADMIN_DISCIPLINE, ADMIN_GROUP, ADMIN_SPEC, ADMIN_TEACHER } from "./utils/consts"
import AdminTeacher from "./pages/AdminTeacher"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMIN_STUDENT,
        Component: AdminStudent
    },
    {
        path: ADMIN_DISCIPLINE,
        Component: AdminDiscipline
    },
    {
        path: ADMIN_GROUP,
        Component: AdminGroup
    },
    {
        path: ADMIN_SPEC,
        Component: AdminSpec
    },
    {
        path: ADMIN_TEACHER,
        Component: AdminTeacher
    },

    {
        path: PAD_ROUTE,
        Component: Pad
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: STUDENT_ROUTE + '/:id',
        Component: StudentPage
    },

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Tab
    },
    
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]