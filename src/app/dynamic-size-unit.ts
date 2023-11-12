// Create the Dynamix Pixel Constant
function setDynamicSizeUnit() {
    const display_width: number = 
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const display_height: number = 
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const dp_constant: number = Math.sqrt(display_width * display_height);

    // Set the size of 1rem as the DP Constant
    document.documentElement.style.fontSize = `${dp_constant}px`;
    console.log('10000');
}

setDynamicSizeUnit();
window.addEventListener('resize dynamic size unit', setDynamicSizeUnit);