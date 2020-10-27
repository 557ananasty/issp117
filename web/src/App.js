import React from "react";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route component={Home} path='/' exact />
          {/* <Route component={} path='/projects' />
          <Route component={Team} path='/team' />
          <Route component={Test} path='/test' /> */}
          {/* <Route component={Home} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
