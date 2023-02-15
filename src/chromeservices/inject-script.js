console.log('<----- Injected script started running ----->');
window.postMessage({ type: "FROM_PAGE", window.adpushup });

function parseEssentialDetails() {
    console.log(window.adpushup);
  return window.adpushup;
}

// setInterval(() => {
  let essential = parseEssentialDetails();
  window.postMessage({ type: "FROM_PAGE", essential });