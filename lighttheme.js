
    // light theme script

    const lTheme = () => {
        

      localStorage.setItem("theme", "light");


        transformBall.style = "right:40px;";



        document.querySelector("body").style = "background:white;color:black;";

        document.querySelector(".header").style= "background-color:white";

        window.addEventListener("scroll",
        function(){
          document.querySelector(".header").style= "background: #0000007d;";

        });

        document.querySelector(".header").scroll.style= "background-color:#0000007d";
        document.querySelector(".header .logo").style= "color:crimson";
        const headNavA = document.querySelectorAll(".header nav a");
        for(let i=0; i < headNavA.length; i++){
            headNavA[i].style = "color:black";
        }

        let blogs = document.querySelectorAll(".section2 .blog-div2 .main-box .blog");
        for(let i=0; i<blogs.length; i++){
            blogs[i].style = "background-color:#efefef";
        }
   


   document.querySelector(".section3 .main-box1 .image-side .img-frame ").style = "box-shadow: 0px 0px 10px #000000a8; background-color: #efefef;";

// cv download btn
  document.querySelector(".container .btn").style ="color:white; background-color:orange";

// social links 
   let socialLink = document.querySelectorAll(".social-div a");

   

   for (let i = 0; i < socialLink.length; i++) {
    socialLink[i].style = "color:darkorange; border: 2px solid darkorange;";
   }

//    because there are two spans with one selector
let midSingel = document.querySelectorAll(".diff-color");

for (let i = 0; i < midSingel.length; i++) {
      midSingel[i].style = "color:darkorange";
    
}
  //  mid headings highlight words
   const midHeadings = [
   document.querySelector(".section1 .container h3 span"),
  
     
];
for (let i = 0; i < midHeadings.length; i++) {
     midHeadings[0].style = "color:#ab5e00";
    
}

// for paragrapgh of about section   
      let aboutParagraph = document.querySelectorAll(".n-p-e");
      for (let i = 0; i < aboutParagraph.length; i++) {
           aboutParagraph[i].style = "color:black;";
        
      }

      // skills section which is in image section of about
      document.querySelector(".section3 .main-box1 .image-side .skills-sec h1").style ="color: #0000006e;";
      let skillScales = document.querySelectorAll(".section3 .main-box1 .image-side .skills-sec div div");
      for (let i = 0; i < skillScales.length; i++) {
        skillScales[i].style = "background-color:darkorange;height:4px;";

        
      }
      
// for blog1
  
 
 
      let blogOne =document.querySelectorAll(".section2 .blog-div .blog");
      for (let i = 0; i < blogOne.length; i++) {
        blogOne[i].style = "background-color:#efefef; color:black;box-shadow: 0px 0px 34px #000000b0;";
        
      }
      blogOne =document.querySelectorAll(".section2 .blog-div .blog .content p");
      for (let i = 0; i < blogOne.length; i++) {
        blogOne[i].style = "color:black;";
        
      }
      blogOne =document.querySelectorAll(".section2 .blog-div .blog .lr-div");
      for (let i = 0; i < blogOne.length; i++) {
        blogOne[i].style = "box-shadow: 0px -8px 4px #74010100, 0px -18px 27px #0000007a;";
        
      }

      blogOne =document.querySelectorAll(".section2 .blog-div .blog .lr-div a");
      for (let i = 0; i < blogOne.length; i++) {
        blogOne[i].style = "color:black;";
        
      }


      //for form
      let form =document.querySelectorAll(".section4 form input ,.section4 form textarea ,.section4 form button");
      for (let i = 0; i < form.length; i++) {
        form[i].style = "color:black;background-color:transparent;border:1px solid black;box-shadow:none;";
        
      }
      
    }

    const lightTheme = document.getElementById("lighttheme");
            // to transform theme toggle
            const transformBall = document.querySelector(".theme-div .ball");
    lightTheme.addEventListener("click", lTheme)
    

    window.onload = function() {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        // Apply light theme
      console.log("light mode")
      lTheme()
      }
    }