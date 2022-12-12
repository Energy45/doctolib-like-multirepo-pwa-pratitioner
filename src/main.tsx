import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RegisterForm } from './components/RegisterForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { CalendarAppointment } from './components/CalendarAppointment';
import { AppointmentsTaken } from './components/AppointmentsTaken';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppointmentsTaken/>
  },
  {
    path: '/register',
    element: <RegisterForm/>
  },
  {
    path: '/login',
    element: <LoginForm/>
  }
])

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
