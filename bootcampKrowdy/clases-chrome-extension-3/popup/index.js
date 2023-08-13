const btnScripting = document.getElementById("btncomunicacion");
const btnScriptingBackground = document.getElementById("btncomunicacionbckg");
const btnShowData = document.getElementById("btncomunicacionbckg-data");
const contentResult = document.getElementById("test_message");

btnScripting.addEventListener("click", async () => {
  var port = chrome.runtime.connect({ name: "popup-background" });
  port.postMessage({ message: "start" });
}

btnScripting.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let port = chrome.tabs.connect(tab.id, { name: "popup" });
  port.postMessage({ message: "getJobs" });
  port.onMessage.addListener(function ({ message, data }) {
    if (message === "ok"){
      contentResult.innerText = JSON.stringify(data, null, 2);
    }
    // tmes.innerText = JSON.stringify(data, null, 2);
  });
});

btnScriptingBackground.addEventListener("click", async () => {
  var port = chrome.runtime.connect({ name: "popup-background" });
  port.postMessage({ message: "delete" });
  port.onMessage.addListener(function ({ message }) {
    // if (message === "next-page") {
    //   const button = document.querySelector('[class*=next-]');
    //   button.click();
    // }
    alert(message);
  });
});


btnShowData.addEventListener("click", async () => {
  var port = chrome.runtime.connect({ name: "popup-background" });
  port.postMessage({ message: "finish" });
  port.onMessage.addListener(function ({ message, data}) {
    // if (message === "next-page") {
    //   const button = document.querySelector('[class*=next-]');
    //   button.click();
    // }
    // alert(message);
    if (message === "ok") {
      contentResult.innerText = JSON.stringify(data, null, 2);
    }
    
  });
});
