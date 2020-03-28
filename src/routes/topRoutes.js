import LatestTweets from "../components/views/latestTweets";
import Home from "../components/views/home";

var TopRoutes = [
  { 
    path: '/home', 
    name: 'Home', 
    icon: 'ti-loop', 
    component: Home 
  },{ 
      path: '/latestTweet', 
      name: 'Latest Tweets', 
      icon: 'ti-loop', 
      component: LatestTweets 
    },
    { path: '/', pathTo: '/home', name: 'Home', redirect: true }
  ];
  export default TopRoutes;