let svalue;
let options = selectElement2.options;
let isImgVisible = false;
input.addEventListener('change', () => {
    svalue = selectElement2.value.toString();
    if (input.value.includes("Nude") || input.value.includes("nude") || input.value.includes("xxx" || input.value.includes("sex"))) {
        console.log("Input value starts with 'A'");
        
        display.src = linkMappingnude[selectElement2.value+'nude']
        // display.src = "https://img.freepik.com/premium-photo/side-view-young-woman-nude-portrait_23-2149428567.jpg?w=2000" 
        console.log('eee')
        selectElement.style.display='inline'
        selectElement3.style.display = 'inline'
    }

    else {
        console.log(svalue)
        display.src = linkMapping[selectElement2.value]
    
        selectElement.style.display = 'none'
        selectElement3.style.display = 'none'
        console.log("Input value does not start with 'A'");
    }
});
// imgbtn.addEventListener('click', () => {
//     isImgVisible = !isImgVisible;

//     for (let i = 0; i < img.length; i++) {
//         img[i].style.opacity = isImgVisible ? 1 : 0;
//         img[i].style.width = '1'+ '%'

//     }
// });


selectElement.addEventListener('change', () => {
    if (input.value.includes("nude")) {
        console.log("Input value starts with 's'");
        display.src = "https://img.freepik.com/premium-photo/side-view-young-woman-nude-portrait_23-2149428567.jpg?w=2000"
        display.src = linkMappingnude[selectElement2.value+ 'nude'+selectElement.value]
        console.log(selectElement2.value + 'nude' + selectElement.value)
    }
    else {
        display.src = linkMapping[svalue];
    }
    const selectedOption = selectElement.value;
    console.log(selectedOption);
});

selectElement2.addEventListener('change', () => {
    svalue = selectElement2.value.toString();
  

    if (input.value.includes("nude")) {
        console.log("Input value starts with 's'");
        display.src = "https://img.freepik.com/premium-photo/side-view-young-woman-nude-portrait_23-2149428567.jpg?w=2000" 
        display.src = linkMappingnude[svalue+'nude']

    }
    else {
        display.src = linkMapping[svalue];
    }

    var selectedOption2 = options[selectElement2.selectedIndex];
    console.log('Selected option:', selectedOption2.value);
    const selectedOption = selectElement.value;
    console.log(selectedOption);
});

selectElement3.addEventListener('change', () => {
    if (input.value.includes("nude") && selectElement.value.includes('Standing') && selectElement2.value.includes('Elsa')&&selectElement3.value.includes('Dil')) {
        console.log("Input value starts with 's'");
        display.src = elsadildo
    } else {
    }
    const selectedOption = selectElement.value;
    console.log(selectedOption);
});

// color.addEventListener('change', () => {

//     document.getElementById('body').style.background = color.value
// })

// 
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Usage


main.addEventListener('mouseover', () => {
    // submit.style.borderLeft = '0'
    if (isMobileDevice()) {
        input.style.display = 'inline'

        console.log("The website is being opened on a mobile device.");
    } else {
        console.log("The website is not being opened on a mobile device.");
        input.style.display = 'none'
    }
    // submit.classList.remove('addradius')
})
submit.addEventListener('mouseover', () => {
    // submit.style.borderLeft='0'
    input.style.display = 'inline'
    // submit.classList.add('addradius')
})
submit.addEventListener('click', () => {

    if (input.value.includes("xvideos")) {
        
        let go = `https://www.xvideos.com/?k=${selectElement2.value}+${selectElement.value}+${selectElement3.value}`
        console.log(go)
        window.open(go, '_blank');
    }
    else {     
        let go = `https://www.google.com/search?rlz=1C1ONGR_enIN1031IN1031&sxsrf=APwXEdf35h2zRmKZuu7b-IpITuAy0ZP4iw:1688020689699&q=${selectElement.value}+${input.value}+${selectElement2.value}+${selectElement3.value}&tbm=isch&sa=X&ved=2ahUKEwiaztSM7-f_AhVaZmwGHWjmDGAQ0pQJegQIDhAB&biw=1536&bih=752&dpr=1.25`
        console.log(go)
        window.open(go, '_blank');
    }
})