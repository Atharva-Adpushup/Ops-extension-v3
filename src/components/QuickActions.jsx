import React from 'react'

const QuickActions = () => {
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
  return (
    <>
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => highlightAdPushup()}>
  Highlight AdPushup Ads
</button>
<br/>
<br/>
<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => highlightControlAds()}>
  Highlight Control Ads
</button>
<br/>
<br/>
<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => forceTestVariation()}>
  Force TEST Variation
</button>
<br/>
<br/>
<div>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" value={adpushupMail} onChange={(e)=> setAdpushupMail(e.target.value)} placeholder="Email"/>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" value={adpushupPassword} onChange={(e)=> setAdpushupPassword(e.target.value)} placeholder="Password"/>
  <br/>
<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => getReportingData()}>
For Adunit Reporting - Login to your AdPushup Account
</button>
</div>
<div>
  <input type="date" id="start-date" value={startDate} onChange={(e)=> setStartDate(e.target.value)}/>
  <input type="date" id="end-date" value={endDate} onChange={(e)=> setEndDate(e.target.value)}/>
  <br/>
<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => getReportingData()}>
  Get Reporting data
</button>
</div>
</>
  )
}

export default QuickActions