console.log("Menu imported\n")
document.querySelector('.hamburger').addEventListener('click',()=>{
    console.log("Clicked hamburger\n")
    document.querySelector('.nav-links').classList.toggle('expanded');
});