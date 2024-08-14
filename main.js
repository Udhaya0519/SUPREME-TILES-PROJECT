var menuBar = document.querySelector(".head-wrapper>div:nth-child(1)")
var toAlignLeft =  document.querySelector(".head-wrapper>div:nth-child(3)")
var section = document.querySelectorAll(".head-wrapper>div:nth-child(3)>a")
const mediaQuery = window.matchMedia("(max-width:1000px)")
let toggel = false
function  handleMediaQuery(e){
   if(e.matches === true){
   

    menuBar.addEventListener("click",()=>{
        toggel=!toggel
        if(toggel){
               toAlignLeft.style.left="0%"
               toAlignLeft.style.transition ="1s"
     }else{
             toAlignLeft.style.left="-50%"
               toAlignLeft.style.transition ="1s"
     }
   
         })

         section.forEach((el)=>{
              el.addEventListener("click",()=>{
                toAlignLeft.style.left="-50%"
               toAlignLeft.style.transition ="1s"
                   

              })
              
         })
         
   }
}



handleMediaQuery(mediaQuery)

mediaQuery.addEventListener("change",handleMediaQuery)
