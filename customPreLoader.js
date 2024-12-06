let customPreLoaderStyle14159 = document.createElement("style");
customPreLoaderStyle14159.innerHTML = `
.customPreLoaderWrapper {
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    right: 15px;
    left: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}
.customPreLoaderInner {
    border: 16px solid #f3f3f3;
    border-top-width: 16px;
    border-top-style: solid;
    border-top-color: rgb(243, 243, 243);
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
@-moz-keyframes customPreLoaderSpin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes customPreLoaderSpin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes customPreLoaderSpin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`;

/* HTML: <div class="loader"></div> */


document.getElementsByTagName('head')[0].appendChild(customPreLoaderStyle14159);
function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function addCustomPreLoader(options = {parent:'body',position:'fixed'}){
    let id = options.id?options.id:"loader14159"+"_"+(new Date().getTime())+"_"+makeId(8);
    let customPreLoaderWrapper = document.createElement("div");
    customPreLoaderWrapper.classList.add('customPreLoaderWrapper');
    customPreLoaderWrapper.setAttribute("id", id);
    customPreLoaderWrapper.style.position = options.position;

    if(options.position !== "fixed"){
        let parentPosition = document.querySelector(options.parent).style.position;
        if(parentPosition !== "fixed" && parentPosition !== "absolute" && parentPosition !== "relative"){
            document.querySelector(options.parent).style.position = "relative";
        }
    }


    let customPreLoaderInner = document.createElement("div");
    customPreLoaderInner.classList.add('customPreLoaderInner');


    customPreLoaderWrapper.appendChild(customPreLoaderInner);

    document.querySelector(options.parent).appendChild(customPreLoaderWrapper);

    if(options.showTime > 0){
        setTimeout(function () {
            document.querySelector(options.parent).parentNode.removeChild(customPreLoaderWrapper);
        },options.showTime)
    }

    return id;
}
function removeCustomPreLoader(selector){
    selector = selector?selector:".customPreLoaderWrapper";
    document.querySelectorAll(selector).forEach(el => {
        el.parentNode.removeChild(el);
    });
}
