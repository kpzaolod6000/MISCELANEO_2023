const getJobsInformation = () => {
  
  const jobCard = [...document.querySelectorAll('[id*="jobcard-"]')];
  const content = jobCard.map((job) => {
      const [
        { href: url },
        {
          children: [
            {
              children: [
                { innerText: date },
                { innerText: title },
                { innerText: rangeSalary },
                { innerText: details},
                {
                  children: [tagCompanyCity]
                }
              ],
            },
          ],
        },
      ] = job.children;

      const company = tagCompanyCity?.querySelector("label")?.innerText;
      const city = tagCompanyCity?.querySelector("p")?.innerText;

      return [
        url,
        date,
        title,
        rangeSalary,
        company,
        city
      ];
  });
  return content;
}

console.log("Ejecutando el content script 1.0");


//Connect to background
const portBackground = chrome.runtime.connect({ name: "content-background" });
let button = document.querySelector('[class*=next-]');

// portBackground.postMessage({ message: "Hola Background" });
portBackground.onMessage.addListener(({ message }) => {
  if (message === "next-page") {
    button = document.querySelector('[class*=next-]');
    button.click();
  }
  if (message === "register-completed") {
    //enviar al index js render en index.html
    // chrome.runtime.onConnect.addListener(function (port) {
    //   port.onMessage.addListener(function ({ message, data }) {
    //      port.postMessage({ message: "ok", data: data});
    //   });
    // });
  }
});


chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function ({ message }) {
    if (message === "getJobs"){
      
      // let jobs = getJobsInformation();
      // port.postMessage({ message: "ok", data: jobs});
      // portBackground.postMessage({ message: "finish"});
      portBackground.postMessage({ message: "startcrap", data: getJobsInformation()});
    }
    if(message === "all"){
      portBackground.postMessage({ message: "finish"});
    }
  });
});




chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function ({ message }) {
    if (message === "scrap"){
      alert('hola');

    }
  }
}