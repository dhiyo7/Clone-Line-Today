import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import Navbar from "../../Components/Navbar";
import Top from "../Pages/Top/Top";
import Showbiz from "../Pages/Showbiz/Showbiz";
import News from "../Pages/News/News";
import Life from "../Pages/Life/Life";
import Regional from "../Pages/Regional/Regional";
import Intermezzo from "../Pages/Intermezzo/Intermezzo";
import Trending from "../Pages/Trending/Trending";
import Videos from "../Pages/Videos/Videos";
import SciTech from "../Pages/SciTech/SciTech";
import Sports from "../Pages/Sports/Sport";
import Biz from "../Pages/Biz/Biz";
import Movie from "../Pages/Movie/Movie";
import Story from "../Pages/Story/Story";
import Hobbies from "../Pages/Hobbies/Hobbies";
import Otomotif from "../Pages/Otomotif/Otomotif";
import Parenting from "../Pages/Parenting/Parenting";
import Corona from "../Pages/Corona/Corona";
import Games from "../Pages/Games/Games";
import KataGaul from "../Pages/KataGaul/KataGaul";
import English from "../Pages/English/English";
import Music from "../Pages/Music/Music";
import Campus from "../Pages/Campus/Campus";
import Loading from "./Loading";
import { fetchData } from "./redux/action";

function App() {
  const appState = useSelector((state) => state.appState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Helmet
        titleTemplate="%s - LINE TODAY"
        defaultTitle="LINE TODAY"
      ></Helmet>
      {!appState.loading ? (
        <div className="App mx-auto" style={{ maxWidth: "800px" }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/TOP" component={Top} />
            <Route path="/Showbiz" component={Showbiz} />
            <Route path="/News" component={News} />
            <Route path="/Life" component={Life} />
            <Route path="/Regional" component={Regional} />
            <Route path="/Intermezzo" component={Intermezzo} />
            <Route path="/Trending" component={Trending} />
            <Route path="/Videos" component={Videos} />
            <Route path="/Sci-Tech" component={SciTech} />
            <Route path="/Sports" component={Sports} />
            <Route path="/Biz" component={Biz} />
            <Route path="/Movie" component={Movie} />
            <Route path="/Story" component={Story} />
            <Route path="/Hobbies" component={Hobbies} />
            <Route path="/Otomotif" component={Otomotif} />
            <Route path="/Parenting" component={Parenting} />
            <Route path="/Corona-di-RI" component={Corona} />
            <Route path="/Games" component={Games} />
            <Route path="/Kata-Gaul" component={KataGaul} />
            <Route path="/English" component={English} />
            <Route path="/Music" component={Music} />
            <Route path="/Campus" component={Campus} />
            <Route path="/test" component={Carousel} />
          </Switch>
        </div>
      ) : (
        <div className="App mx-auto" style={{ maxWidth: "800px" }}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default App;
