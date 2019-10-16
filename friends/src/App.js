
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />

        {/* If the user is not logged in, the Private Route will redirect to the Login */}
        <PrivateRoute exact path="/" component={FriendList} />
      </Router>
    </div>
  );
}

export default App;


// import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// import PrivateRoute from './utils/privateRoute';

// import FriendsDashboard from './components/Friends';
// import Navigation from './components/navigation';
// import LandingPage from './components/landingPage';
// import Login from './components/Login';

// const App = () => (
//   <>
//     <Navigation />
//     <Switch>
//       <PrivateRoute path="/private" component={FriendsDashboard} />
//       <Route path="/login" component={Login} />
//       <Route exact path="/" component={LandingPage} />
//     </Switch>
//   </>
// );
// export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Friends from './components/Friends';
// import FriendForm from './components/FriendForm';
// import { getFriends } from './actions/index';
// import { connect } from 'react-redux';
// import Login from './components/Login';

// class App extends Component {
//   componentDidMount() {
//     this.props.getFriends();
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-Title">{`Ryan's Friends`}</h1>
//           <Login />
//           <FriendForm />
//         </header>
//         {this.props.error ? <h3>Error Fetching Friends</h3> : null}
//         <div className="Flex-Container">
//           {this.props.gettingFriends ? (
//             <img src={logo} className="App-logo" alt="logo" />
//           ) : (
//             <Friends friends={this.props.friends} />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const { friendsReducer } = state;
//   return {
//     friends: friendsReducer.friends,
//     error: friendsReducer.error,
//     gettingFriends: friendsReducer.gettingFriends
//   };
// };

// export default connect(mapStateToProps, { getFriends })(App);






// // import React from "react";
// // import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// // import Login from "./components/Login";
// // import FriendList from "./components/AllFriends";
// // import PrivateRoute from "./actions/privateRoute";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div className="App">
// //         <ul>
// //           <li>
// //             <Link to="/">Login</Link>
// //           </li>
// //           <li>
// //             <Link to="/friendlist">FriendList</Link>
// //           </li>
// //         </ul>
// //         <Switch>
// //           <Route exact path="/" component={Login} />
// //           <PrivateRoute path="/friendlist" component={FriendList} />
// //         </Switch>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;