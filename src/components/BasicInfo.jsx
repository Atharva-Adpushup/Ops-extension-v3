import React from 'react'

const BasicInfo = () => {
  return (
    <div> 
         <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          SiteId
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config?.siteId}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Mode
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value='AdPushup Running'/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          AdPushup Percentage
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config.adpushupPercentage}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Page Group
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config.pageGroup}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Platform
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config?.platform}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Selected Variation
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config?.selectedVariationName}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Variation traffic
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config?.adpushupPercentage}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Country
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={adpushup?.essential?.performance?.config?.country}/>
      </div>
    </form>
  </div>
  </div>
  )
}

export default BasicInfo