    document.addEventListener("DOMContentLoaded", function()    {
        const images = document.querySelectorAll(".images");
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("ïn-view");
                }else{
                    entry.target.classList.remove("in-view");
                }
            },{threshold:0.5});
            images.forEach((image)=>{
                observer.observe(image);
            })
        })
    })