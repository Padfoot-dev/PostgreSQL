const btn = document.querySelectorAll(".more-btn");
const more = document.querySelector(".instructions");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

const expand = (e)=> {

    if(e.target.innerHTML === "Read More") {
        e.target.innerHTML = "Read Less";
        console.log(e.target.parentNode.parentNode.childNodes[3])
        // e.target.parentNode.nextSibiling.style.display = "inline";
        e.target.parentNode.parentNode.childNodes[3].style.display = "inline";
    } else {
        e.target.innerHTML = "Read More";
        e.target.parentNode.parentNode.childNodes[3].style.display = "none";
    }
}

btn.forEach((bt)=> {
    console.log(bt.innerHTML)

    bt.addEventListener("click",expand) })

