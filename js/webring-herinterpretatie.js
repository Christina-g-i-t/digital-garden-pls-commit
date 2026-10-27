let index = 0;

function insertWebring(sites) {
index = Math.floor((Math.random() * sites.length + (new Date().getTime())) % sites.length);
const siteData = sites[index];
const siteNameText = siteData.name;
const siteUrl = siteData.url;
document.getElementById("tuinLinkRandom").textContent = siteNameText;
document.getElementById("tuinLinkRandom").href = siteUrl;

    const siteDataPrev = sites[index -1];
    const siteUrlPrev = siteDataPrev.url;
    document.getElementById("tuinLinkPrev").href = siteUrlPrev;

    const siteDataNext = sites[index +1];
    const siteUrlNext = siteDataNext.url;
    document.getElementById("tuinLinkNext").href = siteUrlNext;

console.log("Prev site: " + siteUrlPrev + " - Site: " + siteUrl + " - Next site: " + siteUrlNext);
document.getElementById("webringButtonsContainer").style.display = "flex";
}
function shuffleWebring() {
    insertWebring(sites);
}