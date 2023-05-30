import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dictionary from './Components/Dictionary/Dictionary';
import Header from './Components/Header/Header';
import { Flashcard } from './Components/Flashcards/Flashcard';
import { Hangman } from './Components/Hangman/Hangman';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Dictionary />  
      </>
    ),
  },
  {
    path: "/quiz",
    element: (
      <>
        <Header />
        <Flashcard />
      </>
    ),
  },
  {
    path: "/hangman",
    element: (
      <>
        <Header />
        <Hangman />
      </>
    ),
  },

  {
    path: "/word/:wordId",
    element: (
      <>
        <Header />
        <Dictionary />     
      </>
    ),
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback='loading'>
  <Provider store={store}> 
      <RouterProvider router={router} />
  </Provider>
</Suspense>
);

