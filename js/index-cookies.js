const cookieImg = document.getElementById("cookieImg");
const cookieButtonImg = document.getElementById("cookieButtonImg");
document.getElementById("setCookie").addEventListener('click', () => {
    console.log('Keuze was Allow');
    cookieImg.src = ("./images/export-rosie-chibi-cookie-offer.png");
    cookieButtonImg.src = ("./images/export-rosie-chibi-cookie-offer.png");
})
document.getElementById("unsetCookie").addEventListener('click', () => {
    console.log('Keuze was Deny');
    cookieImg.src = ("./images/export-rosie-chibi-cookie-glare.png");
    cookieButtonImg.src = ("./images/export-rosie-chibi-cookie-glare.png");
})