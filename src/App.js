import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import BasicInfo from './components/BasicInfo';
import QuickActions from './components/QuickActions';

function App() {
const [loading, setLoading] = useState(false);
const [adpushup, setAdpushup] = useState({});
const [adpushupMail, setAdpushupMail] = useState("");
const [adpushupPassword, setAdpushupPassword] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [loggedIn, setLoggedIn] = useState(false);
const [infoTab, setInfoTab] = useState(true);
  useEffect(function () {
    chrome.tabs && chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'GET_DOM' }, function (response) {
            console.log(response);
        });
    });
    setLoading(true);
}, []);

useEffect(function () {
  chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
  }, function (tabs) {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'GET_DOM1' }, function (response) {
          setAdpushup(response);
          console.log(response);
      });
  });
}, [loading]);

const highlightAdPushupAds = () => {
  chrome.tabs && chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'highlightAdPushupAds' }, function (response) {
        console.log(response);
        return null;
    });
});
}

const highlightControlAds = () => {
  chrome.tabs && chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'highlightControlAds' }, function (response) {
        console.log(response);
        return null;
    });
});
}

const forceTestVariation = () => {
  chrome.tabs && chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'forceTestVariation' }, function (response) {
        console.log(response);
        return null;
    });
});
}

async function login(){
  try {
    
  } catch (error) {
    
  }
}

async function getReportingData(){
  try {
    const reportingURL = `https://console.adpushup.com/api/reports/getCustomStats?&fromDate=${startDate}&toDate=${endDate}&interval=cumulative&dimension=section&siteid=${adpushup?.essential?.performance?.config?.siteId}`;
    fetch(reportingURL, {
      method: "GET",
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      }
  })
      .then((response) => response.json())
      .then((data)=> console.log(data));
  } catch (error) {
    console.log(error);
  }
  return null;
}

if(!adpushup){
  return (
    <div>
    <Navbar/>
    Loading...
    </div>
  )
}else if(infoTab){
  return (
    <div className="App">
     <Navbar/>
    <BasicInfo adpushup={adpushup}/>
    <QuickActions/>
    </div>
  )
}else{
  return(
    <div>Diagnosis data</div>
  )
}
}

export default App;
