// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://www.occ.com.mx/empleos/");

//   const jobs = await page.evaluate(function getJobsInformation(){

//     const jobCard = [...document.querySelectorAll('[id*="jobcard-"]')];
//     const content = jobCard.map((job) => {
//         const [
//           { href: url },
//           {
//             children: [
//               {
//                 children: [
//                   { innerText: date },
//                   { innerText: title },
//                   { innerText: rangeSalary },
//                   { innerText: details},
//                   {
//                     children: [tagCompanyCity]
//                   }
//                 ],
//               },
//             ],
//           },
//         ] = job.children;
  
//         const company = tagCompanyCity?.querySelector("label")?.innerText;
//         const city = tagCompanyCity?.querySelector("p")?.innerText;
  
//         return [
//           url,
//           date,
//           title,
//           rangeSalary,
//           company,
//           city
//         ];
//     });
//     return content;
//   });
//   console.log(jobs);
// })();


const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false, 
    defaultViewport: null,
    args: [
    '--start-maximized'
  ]});
  const page = await browser.newPage();
  await page.goto("https://api.regulaforensics.com/?utm_souce=docs");

  const  fileElement = await page.$(".upload-data>input[type=file]");
  console.log(fileElement);
  await fileElement.uploadFile('./imgs/dni1.jpg');
  
  const selectorRowsInfo = 'tbody > tr';
  await page.waitForSelector(selectorRowsInfo);

  const dniInfo = await page.evaluate(({selectorRowsInfo}) => {
    const rowElements = [...document.querySelectorAll(selectorRowsInfo)];
    const dniInformation = rowElements.map((element) =>{
      const [{innerText: atribute},{innerText:mrz},{innerText: visualZone}] = element.children;
      const value = visualZone !== '' ?  visualZone : mrz;
      return {atribute,value};
    })

    return dniInformation;
  },{selectorRowsInfo})

  // console.log(dniInfo);
  console.log(JSON.stringify(dniInfo,null,2));
})();

