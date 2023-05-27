window.addEventListener("DOMContentLoaded",()=>{
    let main = document.querySelector('main');
    main.style.display="none";
    setTimeout(()=>{
        let load = document.querySelector('.loading');
        load.style.display="none";
        main.style.display="block";
    },1500) 
});