console.log('<----- Injected script started running ----->');

function parseEssentialDetails() {
    let main = {};

    main.performance = JSON.parse(JSON.stringify(adpushup, (key, value) => {
      if (this == window && key == 'window') {
          return undefined;
      }
      return value
    })) || {};
    // main.adpushupMiscellaneous = JSON.parse(JSON.stringify(adpushupMiscellaneous, (key, value) => {
    //         if (this == window && key == 'window') {
    //             return undefined;
    //         }
    //         return value
    //       }
    //         )) || {};         
    main.adpTags = JSON.parse(JSON.stringify(adpTags, (key, value) => {
                if (this == window && key == 'window') {
                    return undefined;
                }
                return value
              }
         
                )) || {};          
    return main;
}

// setInterval(() => {
  let essential = parseEssentialDetails();
  window.postMessage({ type: "FROM_PAGE", essential });