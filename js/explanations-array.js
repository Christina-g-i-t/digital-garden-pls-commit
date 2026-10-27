const explanationsArray = [
    { title: 'Geologie', paragraph: 'De wereld is groot en oud. Er zijn zo veel verschillende dingen gebeurd over de geschiedenis, niet alleen door mensen (wat ook interssant is en een relevant impact heeft), maar ook door natuurlijke processen zoals het schuiven van de aardplaten, het neer-regenen en -sneeuwen van neerslag, whatever planten aan het doen zijn, en ontelbaar meer bijdragers. Ik vind het leuk om te denken over hoe al deze processen de wereld hebben gevormd, en verder zal vormen.', image: 'img_20261007_142751136_boedele.jpg'},
    { title: 'Games', paragraph: 'Het spelen en maken van spellen bestaat uit een samenkomst van zo veel artistieke elementen zoals de ontwerpen van karakters, de spelwereld, gameplay, muziek, verhaallijnen. De samenkomst van zo veel elementen is uniek vergeleken met andere mediavormen, en dit spreekt mij aan om spellen te spelen en eigen spellen te maken.', image: 'export-goldi-en-rosie-wojack-pointing.png'},
    { title: 'Coderen', paragraph: 'Games spelen is leuk, maar games maken is een expressie van leuk van een heel andere kant! Bij het maken van deze site komen veel elementen van een spel maken ook voor, zoals plannen waar alles komt te staan, zorgen dat niks in conflict komt, visuals bedenken en maken, en nog veel meer, wat het zo vervullend maakt voor mij.', image: 'export-rosie-chibi-snow.png'},
    { title: 'Tekenen', paragraph: 'Dingen bedenken opzich is al leuk, maar deze kunnen visualiseren op een manier dat anderen het ook kunnen zien en zich ermee kunnen verbinden, brengt expressie van ideeën een stap verder. Digitaal getekend ziet er netter uit, maar met pen op papier geeft de vrijheid om imperfect te zijn.', image: 'pen/img_crelly-pen.jpg'},
    { title: 'Character design', paragraph: 'Een concept filteren tot zijn abstract draaden, en dat weer aan elkaar breien in een karakterontwerp waar ieder detail iets verteld. De beschouwer neemt bewust en onbewust deze representaties tot zich, en bouwt een connectie met een concept waarmee normaal gesproken geen band zoals deze mee wordt gesloten. ... Zo, dat wat wel heel filosofisch, maar op een manier is deze tekst een abstractie en presentatie van hoe ik denk. Geen AI zou ooit zo anti-engagement zijn.', image: 'export-croissant-chan.png'},
    { title: 'J-fashion', paragraph: 'Een brede term, die breed gezien uitlegt welke fashionstijl mijn tekeningen en ontwerpen inspireren.', image: 'export-slinky-en-rosie-kerst-2025.png'},
    { title: 'Onderzoek doen', paragraph: 'Er is zo veel in de wereld. Er is zo weinig tijd en zo veel te weten. Ik stel bij alles vragen, waarbij ook de vraag valt of het het waard is om een rabbit hole in te duiken om het antwoord te vinden. Meestal wel, dan vallen er veel uren achterna.', image: 'export-rosie-searchsearch.png'},

    { title: 'Minecraft', paragraph: 'Simpliciteit, vrijheid en bouwen. Een geweldige combinatie', image: 'cursor-images/export-cursor-default-rosie.png'},
    { title: 'Tomb Raider 2', paragraph: 'Mijn favoriete Tomb Raider spel, naast 1. Altijd een gezellige tijd met de klassieke platforming, exploratie en 1997 graphics. De perfecte balans van uitdaging in puzzels en navigatie, met nog steeds verassend mooie omgevingen, en een laagje nostalgie dat een uniek soort innerlijke vrede brengt.', image: 'export-rosie-searchsearch.png'},
    { title: 'Honkai Impact 3rd Pt.1', paragraph: 'Een van de allerbeste verhalen die ik ooit heb meegemaakt, met fantastische karakters die echt bij je blijven. Het kleine budget waarmee het oorspronkelijk was gemaakt is te merken, maar die beperkingen hebben geleid naar creatieve oplossingen en een artistiek werk gemotiveerd door de harten van de makers.', image: 'chibis/export-hoth-mei-chibi.png'},
    { title: 'Genshin Impact 1.0-4.5', paragraph: 'Vol karakters met interessante designs en persoonlijkheden in een prachtige wereld die de fantastie aanwakkerd. [We don\'t take about de huidige status van het spel, die is te sneu.]', image: 'chibis/export-sucrose-chibi.png'},
    { title: 'Civ 4', paragraph: 'Het beste Civillization spel met alle glorieuze 2005 graphics. Strategie, en de geschiedenis letterlijk maken. De uren verdwijnen op mysterieuze wijze.', image: 'dog/export-dog-tail-default-open.png'},

    { title: 'Winx S 1-3', paragraph: '2000\'s nostalgie en fashion, gecombineerd met een empathische magical girl cast in een feeënwereld met y2k futuristische elementen. Een geweldige samenkomst van allerlei coole elementen, tot een feeënsterk geheel.', image: ''},
    { title: 'Fullmetal Alchemist (2003)', paragraph: 'De "andere" Fullmetal Alchemist die door de meesten wordt genegeerd als iets verouderds dat geen aandacht verdient. Maar ik vind de psychologie die de duistere settting mogelijk maakt, extreem fascinerend, en de manier waarop de karakters zijn geschreven is betoverend op een filosofische manier.', image: ''},

    { title: 'Kaguya-sama: Love is War', paragraph: 'Volgens de meeste rankingsites de allerbeste manga, een plek waar het zeker hoort. Satirisch, maar ook met intelligente momenten en interessante dynamieken tussen de karakters die het steeds interssant houden.', image: ''},
    { title: 'Silent Witch', paragraph: 'Een gegronde en licht-satirische invulling van shojo tropes, in een magische fantasy setting, met een fantastisch hoofdpersonage met een werkend brein en een zeer endearing persoonlijkheid. Monica Everett is daarmee een van mijn favoriete karakters allertijden.', image: ''},
    { title: 'Alles dat is geillustreerd door Shota Sirokuma', paragraph: 'Wat deze mangaillustrator anders maakt in de zee van ongelofelijke mangaka\'s, is een expertise die mij persoonlijk aanspreekt: in het tekenen van dieren, hoe gedetailleerd, expressief, leesbaar en natuurlijk cute deze zijn. Bijvoorbeeld One Room Dog zit boordevol met de schattigste honden ooit, en Winter Fenrir heeft prachtige landschappen vol expressieve bosdieren die zo mooi passen in het hartverwarmende verhaal.', image: ''},

    { title: 'Vedal987', paragraph: 'Neuro-sama, gecreëerd met liefde, intellect en humor door programmeur en professionele schildpad Vedal, is het meest fascinerende wezen op het internet.', image: 'export-neuro-heart-hat.png'},
    { title: 'CerberVT', paragraph: 'Wan wan wan.', image: 'export-cerber.png'},

    { title: 'Kawaii in de breedste zin', paragraph: 'Tekenstijlen en fashion die schattig zijn maken alles levendiger. Zoals deze site.', image: 'chibis/export-sucrose-chibi.png'},
    { title: 'HimeKaji/Suna kei/Shojo', paragraph: 'De J-fashion stijlen die ik het meest inspirerend vind. Ze hebben veel overlap met elkaar, maar het komt neer op zachte kleuren, cutesy strikken en anime-achtige haar- en kledingontwerpen. Macotte Rosie is geïnspireerd door deze vibes.', image: 'export-rosie-sitting-floating.png'},
    { title: 'Steampunk', paragraph: 'Historical (in)accuracy met een extra sterke persoonlijkheid en fantasierijke (on)zinnige techniek. Hedendaags niet meer zo populair maar ik vindt het nog steeds stijlvol.', image: 'chibis/export-navia-chibi.png'},
    { title: 'Frutiger Aero', paragraph: 'Een positieve dag met een frisse heldere lucht en glazen schermen met een vredig grasetende eenhoorn, ongezet naar een ontwerptaal. Ik vind dat het de goede vibes opwekt.', image: 'img_voralberg-river-fhv.jpg'},
    /*
    { title: 'Kaguya-sama: Love is War', paragraph: '.', image: 'export-hoth-mei-chibi.png'},
*/
];
let currentExplanation = null;
const currentImg = document.getElementById("explanationImg");
const currentTitle = document.getElementById("explanationTitle");
const currentParagraph = document.getElementById("explanationParagraph");
const infoContainer = document.getElementById("explanationContainer");

const listItems = document.querySelectorAll('.listContainer li');
listItems.forEach(listItem => {
 	listItem.addEventListener('click', () => {
    infoContainer.style.opacity = '1';
    infoContainer.style.pointerEvents = 'auto';
    const explanation = explanationsArray.find(e => e.title === listItem.textContent); //geklikt titel is gelijk aan titel in het array
    if (e => e.title != listItem.textContent) {
        //console.log('Nog niks voor dat item geschreven!')
        titleText = 'Probeer een ander item';
        paragraphText = 'Nog niks voor dat item geschreven!';
        imgSrc = 'export-rosie-searchsearch.png';
    }
    if (explanation) {
        titleText = explanation.title;
        paragraphText = explanation.paragraph;
        imgSrc = explanation.image;
            if (imgSrc === "") {
                imgSrc = 'chibis/export-lynette-ancient-chibi.png';
            }
        if (imgSrc != 'cursor-images/export-cursor-default-rosie.png') {
            currentImg.style.imageRendering = 'auto';
        }   else {
            currentImg.style.imageRendering = 'pixelated';
        }
        if (titleText === 'Alles dat is geillustreerd door Shota Sirokuma') {
            titleText = 'Illustator Shota Sirokuma';
        }
        if (titleText === 'Kawaii in de breedste zin') {
            titleText = 'Kawaii';
        }
        if (titleText === 'Fullmetal Alchemist (2003)') {
            titleText = 'Fma (2003)';
        }
    }
    //console.log('Title: ' + titleText + '. Paragraph: ' + paragraphText);
    currentTitle.textContent = titleText;
    currentParagraph.textContent = paragraphText;
    currentImg.src = '../images/' + imgSrc;
    });
});

const bubbles = document.getElementById("bubblesEffect");
document.getElementById("closeX").addEventListener('click', () => {
    document.getElementById("explanationContainer").style.opacity = '0';
    infoContainer.style.pointerEvents = 'none';
    bubbles.style.backgroundImage = "url(https://cdn.pixabay.com/animation/2025/11/26/16/30/16-30-29-895_512.gif)";
    setTimeout(() => {
    bubbles.style.backgroundImage = "none";
  }, 1000)
})

document.getElementById("move-").addEventListener('click', () => {
    if (infoContainer.style.left === '5%') {
        infoContainer.style.left = '60%'
    } else {
        infoContainer.style.left = '5%'
    }
})