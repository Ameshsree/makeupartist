// Heading is set only once so no need to put it in function and change again and again with the same data.
const timelineHeading = document.getElementById("timelineHeading");
timelineHeading.innerText = "Heading"; // Add Fetch Data here.

var pageBody = document.body;
var noTimelineSection = document.getElementById("noTimelineSection");
var mainSection = document.getElementById("mainSection");

function noJobs() {
  // Adding the "when-no-timeline" class to body of the page.
  pageBody.classList.add("when-no-timeline");
  // Showing the No Timeline Section.
  noTimelineSection.style.display = "grid";
  // Hiding the Main Section.
  mainSection.style.display = "none";
}

function addSection(num) {
  // Removing the "when-no-timeline" class from body of the page.
  pageBody.classList.remove("when-no-timeline");
  // Hiding the No Timeline Section.
  noTimelineSection.style.display = "none";
  // Showing the Main Section.
  mainSection.style.display = "grid";

  // Info Section Container
  var infoSec = document.createElement("div");
  infoSec.classList.add("info-sec");
  // ###### For Adding Image ######
  // Image Container
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  // ###### Move Image container to right ######
  // count = count + 1;
  // console.log(count);

  if (i % 2 == 0) {
    console.log(i);
    imgContainer.classList.add("move-to-right");
  }
  // ###### Move Image container to right ######

  // Image
  var imageTag = document.createElement("img");
  imageTag.src = "img/01kasol.jpg"; // Add Fetch Data here.
  imageTag.alt = "01kasol"; // Add Fetch Data here.

  // ###### For Adding Image ######

  // ###### For Adding Text Info ######
  // Info Container
  var infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  // Campaign Heading
  var campaignHeading = document.createElement("h2");
  campaignHeading.classList.add("campaign-heading");
  campaignHeading.innerText = "Campaign Name"; // Add Fetch Data here.
  // Campaign Description
  var campaignDescription = document.createElement("p");
  campaignDescription.classList.add("campaign-description");
  campaignDescription.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab harum nam laborum blanditiis, ex quia velit exercitationem, beatae impedit illo. Porro, quidem animi sequi molestias repellat dolores magni error?"; // Add Fetch Data here.

  // creating button element
  var button = document.createElement("BUTTON");

  // creating text to be
  //displayed on button
  var text = document.createTextNode("Download Invoice");

  // appending text to button

  // Inner Info Container
  var innnerInfoContainer = document.createElement("div");
  innnerInfoContainer.classList.add("inner-info-container");
  //dayNum
  var dayNum = document.createElement("div");
  if (i % 2 == 0) {
    console.log(i);
    dayNum.classList.add("dayRight");
  } else {
    dayNum.classList.add("dayLeft");
  }
  dayNum.innerText = "Day1";

  // Start Date
  var startDate = document.createElement("p");
  startDate.classList.add("inner-info");
  startDate.innerText = "Started on - ";
  // Important text
  var startDateStrongText = document.createElement("strong");
  startDateStrongText.innerText = "01/02/2020"; // Add Fetch Data here.
  // Estimated Pay
  var estimatedPay = document.createElement("p");
  estimatedPay.classList.add("inner-info");
  estimatedPay.innerText = "Estimated pay - ";
  // Important text
  var estimatedPayStrongText = document.createElement("strong");
  estimatedPayStrongText.innerText = "Rs 200"; // Add Fetch Data here.

  // ###### For Adding Text Info ######

  // ###### Nesting the tags ######
  // Adding strong element inside p(estimatedPay) tag.
  estimatedPay.appendChild(estimatedPayStrongText);
  // Adding strong element inside p(startDate) tag.
  startDate.appendChild(startDateStrongText);
  // Adding estimatedPay and startDate inside Inner Info Container.
  innnerInfoContainer.appendChild(startDate);
  innnerInfoContainer.appendChild(estimatedPay);
  // Adding Campaign Heading, Campaign Description and Inner Info Container inside Info Container.

  infoContainer.appendChild(dayNum);
  infoContainer.appendChild(campaignHeading);
  infoContainer.appendChild(campaignDescription);
  infoContainer.appendChild(button);
  infoContainer.appendChild(innnerInfoContainer);
  button.appendChild(text);

  // Adding image inside Image Container.
  imgContainer.appendChild(imageTag);

  // Adding Image Container and Info Container inside Info Section Container.
  infoSec.appendChild(imgContainer);
  infoSec.appendChild(infoContainer);

  // Adding Info Section in the Info Section Container.
  document.getElementById("infoSecContainer").appendChild(infoSec);
  // ###### Nesting the tags ######
}

// Number of jobs applied
var numOfJobsApplied = 4;

if (numOfJobsApplied == 0) {
  noJobs();
} else {
  // Adding Sections using a loop
  for (i = 1; i <= numOfJobsApplied; i++) {
    addSection(i);
  }
}
