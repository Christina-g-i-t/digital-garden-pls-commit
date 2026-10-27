const RosieImg = document.getElementById("rosie-img");
const itemImgIndex = ["export-rosie", "export-rosie-winter"];
var RosieImgIndex = -1;

    RosieImg.addEventListener("mouseover", (event) => {
    if (RosieImgIndex >= itemImgIndex.length -1) {
      RosieImgIndex--
    } else {
    RosieImgIndex++;
    }
    var currentItemImg = itemImgIndex[RosieImgIndex];
    var nextItemImg = currentItemImg + 1;
    RosieImg.src = ("../images/" + currentItemImg + ".png");
});