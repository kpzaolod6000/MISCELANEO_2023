const saveObjInLocalStorage = async (key,value) => {
  return new Promise((resolve,reject) => {
    try {
        chrome.storage.local.set({key: value}, function () {
        resolve();  
      });
    } catch (error) {
      reject(error);
    }
  });
}

const getObjInLocalStorage = async (key) => {
  return new Promise((resolve,reject) => {
    try {
      chrome.storage.local.get(key, function (value) {
        resolve(value[key]);
      });
    } catch (error) {
      reject(error);
    }
  });
}

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(async function ({ message}) {
    if (message === start) {
      
    }
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let port = chrome.tabs.connect(tab.id, { name: "background-content" });
    port.postMessage({ message: "scrap" });
  
  }
}


chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(async function ({ message , data}) {
    if (message === "startcrap"){
      // const status = "start";
      
      let getDataStorage = await getObjInLocalStorage("key");
      let dataStorage = getDataStorage??[];
      // chrome.storage.local.remove("key");
      // console.log("DATA");
      // console.log(data);
      // console.log("DATASTORAGE");
      // console.log(dataStorage);
      // console.log("--------------------------------------------------");

      await saveObjInLocalStorage("key",[...dataStorage,...data]);
      

      // chrome.storage.local.get("key", function (value) {
      //   console.log(value);
      // });
      port.postMessage({ message: "next-page" });
    }
    if (message === "finish"){
      //const status = await getObjInLocalStorage("status");
      //if (status === "start") 
      const data = await getObjInLocalStorage("key");

      // console.log(data);

      // const rangeSalaryByCity = data.reduce((ranges,job) => {
      //   const city = job[5];
      //   if(!ranges[job.city])
      //     ranges[job.city] =  [];
      //   }
      //   ranges[job.city].push(job);
      //   return ranges;

      // },{});
      
      // console.log(rangeSalaryByCity);
      port.postMessage({ message: "ok" ,data: data });
    }

    if (message === "delete") {
      chrome.storage.local.get("key", function(result) {
        if (result.key !== undefined) {
          console.log(result.key);
          chrome.storage.local.remove("key");
          port.postMessage({ message: "Se vacio el local Storage" });
        } else {
          port.postMessage({ message: "La clave no existe" });
        }
      });
    }
  });
});
