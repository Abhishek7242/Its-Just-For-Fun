let input = document.getElementById('input')
let submit = document.getElementById('submit')
let color = document.getElementById('color')
let img = document.getElementsByClassName('img')
let sdiv = document.getElementById('sdiv')
let imgbtn = document.getElementById('imgbtn')
let imgbtn2 = document.getElementById('imgbtn2')
let selectElement = document.getElementById('sel');
let selectElement2 = document.getElementById('sele');
let selectElement3 = document.getElementById('sel3');
let nav = document.getElementById('nav');
let main = document.getElementById('main');
let selec3 = document.getElementById('select3');
let select2 = document.getElementById('select2');
let display = document.getElementById('display');

let option = [
    { Name: 'Choose a Girl Name', Value:'$'  },
    { Name: 'Adria rae', Value:'Adria_rae'  },
    { Name: 'Alina Lopez', Value:'Alina_Lopez'  },
    { Name: 'Anastasia Knight', Value:'Anastasia_Knight'  },
    { Name: 'Abella Danger', Value:'Abella_Danger'  },
    { Name: 'Blair Williams', Value:'Blair_Williams'  },
    { Name: 'Coco Lovelock', Value:'Coco_Lovelock'  },
    { Name: 'Dani daniel', Value:'Dani_daniel'  },
    { Name: 'Dillion Harper', Value:'Dillion_Harper'  },
    { Name: 'Emily wills', Value:'Emily_wills'  },
    { Name: 'Elsa jean', Value:'Elsa_jean'  },
    { Name: 'Eliza Ibarra', Value:'Eliza_Ibarra'  },
    { Name: 'Eva Lovia', Value:'Eva_Lovia'  },
    { Name: 'Gina Valentina', Value:'Gina_Valentina'  },
    { Name: 'Gia Paige', Value:'Gia_Paige'  },
    { Name: 'Jane Wilde', Value:'Jane_Wilde'  },
    { Name: 'Jaye Summers', Value:'Jaye_Summers'  },
    { Name: 'Kylie Quinn', Value:'Kylie_Quinn'  },
    { Name: 'Kenzie Reeves', Value:'Kenzie_Reeves'  },
    { Name: 'Karlee Grey', Value:'Karlee_Grey'  },
    { Name: 'Lena Paul', Value:'Lena_Paul'  },
    { Name: 'Lexi Lore', Value:'Lexi_Lore'  },
    { Name: 'Leah gotti', Value:'Leah_gotti'  },
    { Name: 'Little Caprice', Value:'Little_Caprice'  },
    { Name: 'Lana Rhoades', Value:'Lana_Rhoades'  },
    { Name: 'Megan Rain', Value:'Megan_Rain'  },
    { Name: 'Natasha Nice', Value:'Natasha_Nice'  },
    { Name: 'Olivia Nova', Value:'Olivia_Nova'  },
    { Name: 'Piper perri', Value:'Piper_perri'  },
    { Name: 'Riley Reid', Value:'Riley_Reid'  },
    { Name: 'Savannah Bond', Value:'Savannah_Bond'  },
    { Name: 'Violet Rain', Value:'Violet_Rain'  },
    { Name: 'Valentine Nappi', Value:'Valentine_Nappi'  },

]

let i
for (i = 0; i < option.length; i++){
    let opt = document.createElement('option')
    opt.value = option[i].Value
    opt.innerText= option[i].Name
    selectElement2.appendChild(opt)
}

let option2 = [
             { Value:"$",Name:'Choose an Action '},
             { Value:"Ass",Name:'Ass'},
             { Value:"Anal",Name:'Anal'},
    { Value:"Full_Body",Name:'Full Body'},
    { Value:"Face Jizz",Name:'Face Jizz'},
      { Value:"Boobs",Name:'Boobs'},
      { Value:"Big hole",Name:'Big Hole'},
    { Value:"Cum_In_Mouth",Name:'Cum In Mouth'},
    { Value:"Cum_In_Pussy",Name:'Cum In Pussy'},
    { Value:"Finger_In_Pussy",Name:'Finger In Pussy'},
    { Value:"Gangbang",Name:'Gangbang'},
      { Value:"Lesbian",Name:'Lesbian'},
      { Value:"Masterbation",Name:'Masterbation'},
      { Value:"Open_Pussy",Name:'Open Pussy'},
      { Value:"Pussy",Name:'Pussy'},
      { Value:"Squirt",Name:'Squirt'},
      {value:"Sucking Dick",Name:'Sucking Dick'},
      {value:"Sucking_Pussy",Name:'Sucking Pussy'},
      { Value:"Shemale",Name:'Shemale'},
      { Value:"Threesome",Name:'Threesome'}

]

for (i = 0; i < option2.length; i++) {
    let opt = document.createElement('option')
    opt.innerText = option2[i].Name
    opt.value = option2[i].Value
    selectElement.appendChild(opt)
}

