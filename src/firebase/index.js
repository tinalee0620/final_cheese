import firebase from "firebase/app";

// Initialize Firebase
// let config = {
//   apiKey: "AIzaSyD89dSF5uMoN5Oig4mkUu0g4kDgf7f6cJ0",
//   authDomain: "vuexslack.firebaseapp.com",
//   databaseURL: "https://vuexslack.firebaseio.com",
//   projectId: "vuexslack",
//   storageBucket: "vuexslack.appspot.com",
//   messagingSenderId: "520664506704"
// };

let config = {
  apiKey: "AIzaSyBWkL1ZDkWwGW8IaEVFEhniEJFfM284wwE",
  authDomain: "f2e2018-10e3d.firebaseapp.com",
  databaseURL: "https://f2e2018-10e3d.firebaseio.com",
  projectId: "f2e2018-10e3d",
  storageBucket: "f2e2018-10e3d.appspot.com",
  messagingSenderId: "315995849194",
  appId: "1:315995849194:web:5103d9e1d0bc2da0"
};
// let config = {
//   apiKey: "AIzaSyD0N63UO9KYWA06068H_mPqXzgwzLcnE-Y",
//   authDomain: "cheesecake-d8fb4.firebaseapp.com",
//   databaseURL: "https://f2e2018-10e3d.firebaseio.com",
//   projectId: "cheesecake-d8fb4",
//   storageBucket: "cheesecake-d8fb4.appspot.com",
//   messagingSenderId: "315995849194",
//   appId: "1:315995849194:web:5103d9e1d0bc2da0"
// };
// var firebaseConfig = {
//   apiKey: "AIzaSyD0N63UO9KYWA06068H_mPqXzgwzLcnE-Y",
//   authDomain: "cheesecake-d8fb4.firebaseapp.com",
//   databaseURL: "https://cheesecake-d8fb4.firebaseio.com",
//   projectId: "cheesecake-d8fb4",
//   storageBucket: "cheesecake-d8fb4.appspot.com",
//   messagingSenderId: "517969434137",
//   appId: "1:517969434137:web:ada9e29e292f9841"
// };
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(config);

window.firebase = firebase;
