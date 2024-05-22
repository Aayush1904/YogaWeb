// import { createBrowserRouter } from 'react-router-dom';


// import MainLayout from '../layout/MainLayout';
// import Home from '../pages/Home/Home';
// import Instructor from '../pages/Instructors/Instructor';
// import Classes from '../pages/Classes/Classes';
// import Login from '../pages/user/Login'
// import Register from '../pages/user/Register';
// import YogaSutras from '../pages/Yoga/YogaSutras';
// import Chapter1 from '../pages/Yoga/Chapters/Chapter1';
// import Chapter2 from '../pages/Yoga/Chapters/Chapter2';
// import Chapter3 from '../pages/Yoga/Chapters/Chapter3';
// import Chapter4 from '../pages/Yoga/Chapters/Chapter4';
// import Chapter5 from '../pages/Yoga/Chapters/Chapter5';
// import Chapter6 from '../pages/Yoga/Chapters/Chapter6';
// import Chapter7 from '../pages/Yoga/Chapters/Chapter7';
// import Chapter8 from '../pages/Yoga/Chapters/Chapter8';
// import Chapter9 from '../pages/Yoga/Chapters/Chapter9';

//  export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children : [
//         {
//             path: "/",
//             element: <Home />
//         },
//         {
//             path: "/yoga",
//             element: <YogaSutras />,
//             children : [
//                 {
//                     path : "pada1/chapter1",
//                     element: <Chapter1 />
//                 },
//                 {
//                     path : "pada1/chapter2",
//                     element: <Chapter2 />
//                 },
//                 {
//                     path : "pada1/chapter3",
//                     element: <Chapter3 />
//                 },
//                 {
//                     path : "pada1/chapter4",
//                     element: <Chapter4 />
//                 },
//                 {
//                     path : "pada1/chapter5",
//                     element: <Chapter5 />
//                 },
//                 {
//                     path : "pada1/chapter6",
//                     element: <Chapter6 />
//                 },
//                 {
//                     path : "pada1/chapter7",
//                     element: <Chapter7 />
//                 },
//                 {
//                     path : "pada1/chapter8",
//                     element: <Chapter8 />
//                 },
//                 {
//                     path : "pada1/chapter9",
//                     element: <Chapter9 />
//                 },
                
//             ]
//         },
//         {
//             path: "instructors",
//             element: <Instructor />
//         },
//         {
//             path: "classes",
//             element: <Classes />
//         },
//         {
//             path: "/login",
//             element : <Login />
//         },
//         {
//             path: "/register",
//             element : <Register />
//         }
//     ]
//     }
// ]);


import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Instructor from '../pages/Instructors/Instructor';
import Classes from '../pages/Classes/Classes';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import YogaSutras from '../pages/Yoga/YogaSutras';
import Chapter1 from '../pages/Yoga/Chapters/Chapter1';
import Chapter2 from '../pages/Yoga/Chapters/Chapter2';
import Chapter3 from '../pages/Yoga/Chapters/Chapter3';
import Chapter4 from '../pages/Yoga/Chapters/Chapter4';
import Chapter5 from '../pages/Yoga/Chapters/Chapter5';
import Chapter6 from '../pages/Yoga/Chapters/Chapter6';
import Chapter7 from '../pages/Yoga/Chapters/Chapter7';
import Chapter8 from '../pages/Yoga/Chapters/Chapter8';
import Chapter9 from '../pages/Yoga/Chapters/Chapter9';
import ChapterP1 from '../pages/Yoga/Chapters2/ChapterP1';
import ChapterP2 from '../pages/Yoga/Chapters2/ChapterP2';
import ChapterP3 from '../pages/Yoga/Chapters2/ChapterP3';
import ChapterP4 from '../pages/Yoga/Chapters2/ChapterP4';
import ChapterP5 from '../pages/Yoga/Chapters2/ChapterP5';
import ChapterP6 from '../pages/Yoga/Chapters2/ChapterP6';
import ChapterP7 from '../pages/Yoga/Chapters2/ChapterP7';
import Chapter31 from '../pages/Yoga/Chapters3/Chapter31';
import Chapter32 from '../pages/Yoga/Chapters3/Chapter32';
import Chapter33 from '../pages/Yoga/Chapters3/Chapter33';
import Chapter34 from '../pages/Yoga/Chapters3/Chapter34';
import Chapter35 from '../pages/Yoga/Chapters3/Chapter35';
import Chapter41 from '../pages/Yoga/Chapters4/Chapter41';
import Chapter42 from '../pages/Yoga/Chapters4/Chapter42';
import Chapter43 from '../pages/Yoga/Chapters4/Chapter43';
import Chapter44 from '../pages/Yoga/Chapters4/Chapter44';
import Chapter45 from '../pages/Yoga/Chapters4/Chapter45';
import Yoga1 from '../pages/Classes/Cards/Yoga1'
import Yoga2 from '../pages/Classes/Cards/Yoga2';
import Yoga3 from '../pages/Classes/Cards/Yoga3';
import Spirituality from '../pages/Spirituality/Spirituality';
import Chanting from '../pages/Chanting/Chanting';
import Mantras from '../pages/Mantras/Mantras'
import Mudras from '../pages/Mudras/Mudras';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/yoga",
        element: <YogaSutras />,
      },
      // Routes for individual chapters within pada1
      {
        path: "/yoga/pada1/chapter1",
        element: <Chapter1 />
      },
      {
        path: "/yoga/pada1/chapter2",
        element: <Chapter2 />
      },
      {
        path: "/yoga/pada1/chapter3",
        element: <Chapter3 />
      },
      {
        path: "/yoga/pada1/chapter4",
        element: <Chapter4 />
      },
      {
        path: "/yoga/pada1/chapter5",
        element: <Chapter5 />
      },
      {
        path: "/yoga/pada1/chapter6",
        element: <Chapter6 />
      },
      {
        path: "/yoga/pada1/chapter7",
        element: <Chapter7 />
      },
      {
        path: "/yoga/pada1/chapter8",
        element: <Chapter8 />
      },
      {
        path: "/yoga/pada1/chapter9",
        element: <Chapter9 />
      },
      {
        path: "/yoga/pada2/chapter1",
        element: <ChapterP1 />
      },
      {
        path: "/yoga/pada2/chapter2",
        element: <ChapterP2 />
      },
      {
        path: "/yoga/pada2/chapter3",
        element: <ChapterP3 />
      },
      {
        path: "/yoga/pada2/chapter4",
        element: <ChapterP4 />
      },
      {
        path: "/yoga/pada2/chapter5",
        element: <ChapterP5 />
      },
      {
        path: "/yoga/pada2/chapter6",
        element: <ChapterP6 />
      },
      {
        path: "/yoga/pada2/chapter7",
        element: <ChapterP7 />
      },
      {
        path: "/yoga/pada3/chapter1",
        element: <Chapter31 />
      },
      {
        path: "/yoga/pada3/chapter2",
        element: <Chapter32 />
      },
      {
        path: "/yoga/pada3/chapter3",
        element: <Chapter33 />
      },
      {
        path: "/yoga/pada3/chapter4",
        element: <Chapter34 />
      },
      {
        path: "/yoga/pada3/chapter5",
        element: <Chapter35 />
      },
      {
        path: "/yoga/pada4/chapter1",
        element: <Chapter41 />
      },
      {
        path: "/yoga/pada4/chapter2",
        element: <Chapter42 />
      },
      {
        path: "/yoga/pada4/chapter3",
        element: <Chapter43 />
      },
      {
        path: "/yoga/pada4/chapter4",
        element: <Chapter44 />
      },
      {
        path: "/yoga/pada4/chapter5",
        element: <Chapter45 />
      },
      {
        path: "/spirituality",
        element: <Spirituality />
      },
      {
        path: "/chanting",
        element: <Chanting />
      },
      {
        path: "/mantra",
        element: <Mantras />
      },
      {
        path: "/mudras",
        element: <Mudras />
      },
      {
        path: "/instructors",
        element: <Instructor />
      },
      {
        path: "/classes",
        element: <Classes />
      },
      {
        path : "/class/yoga1",
        element: <Yoga1 />
      },
      {
        path : "/class/yoga2",
        element: <Yoga2 />
      },
      {
        path : "/class/yoga3",
        element: <Yoga3 />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);
