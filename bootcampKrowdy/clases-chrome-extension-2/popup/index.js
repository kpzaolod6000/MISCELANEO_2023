


const btnScripting = document.getElementById("btnscript");

btnScripting.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: searchJobEquals,
  });
});

function searchJobEquals() {
  
  const getJobsContent = (jobCard) => {
    const content = jobCard.map((job) => {
      const [
        { href: url },
        {
          children: [
            {
              children: [
                { innerText: date_ },
                { innerText: title_ },
                { innerText: rangeSalary_ },
                { innerText: contentJob_ },
                { innerText: locationJob_ },
              ],
            },
          ],
        },
      ] = job.children;
      return [
        url,
        date_,
        title_,
        rangeSalary_,
        contentJob_,
        locationJob_.split("\n")[0],
      ];
    });
    return content;
  }
  
  const getLocationByCard = (jobContent) => {
    const colorByLocation = jobContent.reduce((listLocation, job) => {
      if (!listLocation.some((el) => el == job[5])) listLocation.push(job[5]);
      return listLocation;
    }, []);
    return colorByLocation;
  }
  
  const setColorByLocation = (locationByCard) => {
  
    const locationWithColor = locationByCard.map((location) => {
      let color = Math.floor(Math.random() * 16777215).toString(16);
      color = "#" + ("000000" + color).slice(-6);
      return { color: color, location: location };
    });
    return locationWithColor;
  }
  
  const jobCard = [...document.querySelectorAll('[id*="jobcard-"]')];
  
  const jobContent = getJobsContent(jobCard);
  
  const locationByCard = getLocationByCard(jobContent);
  
  const locationWithColor = setColorByLocation(locationByCard);

  jobCard.forEach((job) => {
    const [
      { href: urlt },
      {
        children: [
          {
            children: [
              { innerText: datet },
              { innerText: titlet },
              { innerText: rangeSalaryt },
              { innerText: contentJobt },
              { innerText: locationJobt },
            ],
          },
        ],
      },
    ] = job.children;
    locationWithColor.forEach((color) => {
      if (color.location == locationJobt.split("\n")[0])
        job.style.backgroundColor = color.color;
    });
  });
}
