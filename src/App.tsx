import React, {Suspense, useState} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Suspense fallback="">
      <Router>
      <>
        <Menu open={open} setOpen={setOpen}></Menu>
      </>
      </Router>
    </Suspense>
  );
}

export default App;