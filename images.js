
let searchnude = `https://img.freepik.com/premium-photo/side-view-young-woman-nude-portrait_23-2149428567.jpg?w=2000`
// standingnude : `https://titis.org/pics/uploads/posts/2022-09/thumbs/1664064340_24-titis-org-p-woman-standing-poses-chastnaya-erotika-25.jpg`,
// girl : `https://img.freepik.com/free-photo/full-length-happy-brunette-woman-with-arm-hip-holding-copyspace-palm-looking-camera-gray_171337-857.jpg`,
// standing :'https://img.freepik.com/free-photo/full-length-happy-brunette-woman-with-arm-hip-holding-copyspace-palm-looking-camera-gray_171337-857.jpg',
let linkMapping = { 
    $: "https://i.pinimg.com/236x/ee/6b/09/ee6b0904b6a27780fda5f0a8ad7672aa.jpg",
    Abella_Danger:'https://i.pinimg.com/736x/e6/21/59/e62159b64953047d4e0a1e4d2e8eb0c1.jpg',
    Alina_Lopez:'https://nano.scrolller.com/alina-lopez-3rr54vd19f-540x810.jpg',
    Blair_Williams:'https://atto.scrolller.com/blair-williams-fjv74o7s2h-540x793.jpg',
    Coco_Lovelock:'https://pornpics.vip/xxx/ftvgirls/coco-lovelock/youngporn18xxx-teen-pron-download/coco-lovelock-12.jpg',
    Dani_daniel :'https://b.porngals4.com/media/galleries/1/10/55128-1978677436/dani-daniels-tempt-and-tease-4705254-717911002.jpg',
    Dillion_Harper:'https://m.media-amazon.com/images/M/MV5BNjYyOWMxNGItOTNmMC00ZDc4LWE4NDItY2JmOWFjYTAyZjc0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    Emily_wills: 'https://preview.redd.it/3t7i7qq11s591.jpg?width=800&format=pjpg&auto=webp&s=5a4b3cb61a2d7945f9299f91814c2e3fdf1bb8ee',
    Eliza_Ibarra :'https://e1.pxfuel.com/desktop-wallpaper/654/214/desktop-wallpaper-eliza-ibarra-pics-in-2020-eliza-ibarra.jpg',
    Elsa_jean :'https://i0.wp.com/globalzonetoday.com/wp-content/uploads/2020/07/Elsa-Jean-1.jpg',
    Jaye_Summers: 'https://i.pinimg.com/originals/5d/6d/64/5d6d64ae3a50ffc4feee03fe9f0857c5.jpg',
    Jane_Wilde: 'https://bollywoodfever.co.in/wp-content/uploads/2021/10/Mary-Jane-Wilde-Wiki-Bio-Age-Hei-560x840.jpg',
    Gia_Paige:'https://e1.pxfuel.com/desktop-wallpaper/513/240/desktop-wallpaper-pin-on-pro-gia-paige-thumbnail.jpg',
    Gina_Valentina:'https://i.ebayimg.com/images/g/FqQAAOSw0Phi-ETS/s-l1600.jpg',
    Kenzie_Reeves:'https://m.media-amazon.com/images/M/MV5BNWM0YjU1NmMtMjg0Zi00MzUzLWE5NWYtOTU0OWUwNmM3MTZlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg',
    Kylie_Quinn :'https://i.pinimg.com/736x/63/e0/2f/63e02fdbe871c8861ef9eb6c11dcb1dd.jpg',
    Lena_Paul:'https://i.pinimg.com/originals/2e/e0/b4/2ee0b44a519bc0c1c85ee9fcc9e7c168.jpg',
    Lexi_Lore:'https://najith.com/wp-content/uploads/2020/04/Lexi-lore-hot-legs.jpg',
    Natasha_Nice:'https://birthdaybuddies.net/uploads/people/md/302170343-121928903935828-954296308248852241-n.webp',
    Eva_Lovia:'https://p1-tt.byteimg.com/origin/tos-cn-i-qvj2lq49k0/9a6f3859c99a4dfda1601b809c1b2952',
    Karlee_Grey:'https://i0.wp.com/celebritate.com/wp-content/uploads/2023/05/Karlee-Grey.jpg?fit=1800%2C2000&ssl=1',
    Savannah_Bond:'https://preview.redd.it/savannah-bond-v0-lgf5zbif18191.jpg?width=640&crop=smart&auto=webp&s=b12622067da767f6ee7dd5989792994bccf20787',
    Megan_Rain:'https://e1.pxfuel.com/desktop-wallpaper/888/640/desktop-wallpaper-megan-rain.jpg',
    Anastasia_Knight:'https://i0.wp.com/celebritate.com/wp-content/uploads/2023/06/Anastasia-Knight.jpg?fit=450%2C500&ssl=1',
    Little_Caprice:'https://64.media.tumblr.com/0990315951943654651552ecd427b773/tumblr_oa4pafZ0Us1vn43dho1_1280.jpg',
    Leah_gotti :'https://i.pinimg.com/736x/66/07/f6/6607f6d65bf9874142a9c3328972552f.jpg',
    Adria_rae :'https://cdn-images.fuckingawesome.com/actress_img/actor_1979262_1762.jpg',
    Lana_Rhoades :'https://qph.cf2.quoracdn.net/main-qimg-01a8621bcb10f0ab5008602e1e2c8837-lq',
    Olivia_Nova: 'https://hollywoodlife.com/wp-content/uploads/2018/01/olivia-nova-5.jpg?w=714',
    Piper_perri :'https://preview.redd.it/o1yyf1jwwd491.jpg?width=728&format=pjpg&auto=webp&s=6f4da01d8f4d3d0c87dddcba7312563ef948ad64',
    Riley_Reid:'https://i.ebayimg.com/images/g/qKoAAOSwMqpjsNbV/s-l1600.jpg',
    Violet_Rain :'https://no1wiki.com/wp-content/uploads/2020/12/Violet-Rain-photo-682x1024.jpg',
    Valentine_Nappi : 'https://img-9gag-fun.9cache.com/photo/a6EB0GR_460s.jpg' 
}

let linkMappingnude = {
    $nude:'https://img.freepik.com/premium-photo/side-view-young-woman-nude-portrait_23-2149428567.jpg?w=2000',
    Adria_raenude: 'https://cdni.pornpics.com/460/1/112/79533350/79533350_015_e728.jpg',
    Adria_raenudePussy: 'https://k5x5n5g8.ssl.hwcdn.net/content/201294/0001-04_1200.jpg',
    Abella_Dangernude: 'https://the-sex.me/wp-content/uploads/2015/11/jules-jordan-45.jpg',
    Abella_DangernudePussy: 'https://cdni.pornpics.com/460/1/324/53969816/53969816_014_feb4.jpg',
    Alina_Lopeznude: 'https://vrxdb.b-cdn.net/wp-content/uploads/2019/07/Alina-Lopez-768x1152.jpg',
    Alina_LopeznudePussy: 'https://cdni.pornpics.com/460/1/333/78287579/78287579_010_2d07.jpg',
    Anastasia_Knightnude: 'https://k5x5n5g8.ssl.hwcdn.net/content/models_ret/9177-anastasia-knight_400.jpg',
    Anastasia_KnightnudePussy: 'https://pornpics.vip/xxx/nubilesnet/anastasia-knight/molly-shorts-vanea/anastasia-knight-4.jpg',
    Blair_WilliamsnudePussy: 'https://www.sexypornpictures.org/gallery/blair-williams-xebqTaxki2/blair-williams.webp',
    Blair_Williamsnude: 'https://sexhd.pics/gallery/eroticax/blair-williams/high-end-shaved-sugar-sex/blair-williams-16.jpg',
    Coco_Lovelocknude: 'https://allpornimages.com/porn/2022/06/30/coco-lovelock-SOohaltkRO/coco-lovelock.webp',
    Coco_LovelocknudeOpen_Pussy: 'https://cdni.pornpics.com/460/1/338/34134331/34134331_011_4fa7.jpg',
    Coco_LovelocknudePussy: 'https://cdni.pornpics.com/460/7/619/46716329/46716329_084_cb9c.jpg',
    Dillion_Harpernude: 'https://atto.scrolller.com/dillion-harper-55lgj1r3zj.jpg',
    Dillion_HarpernudePussy: 'https://cdni.pornpics.com/460/1/77/89018902/89018902_003_0801.jpg',
    // Dillion_HarpernudePussy: 'https://cdni.pornpics.com/460/5/150/94609333/94609333_006_784e.jpg',
    Emily_willsnude: 'https://tse2.mm.bing.net/th?id=OIP.XGN0v6EQD16qZ6Zytb5QSwHaLG&pid=15.1',
    Emily_willsnudePussy: 'https://cdni.pornpics.com/460/1/299/99859326/99859326_008_db1e.jpg',
    // Emily_willsnudePussy: 'https://cdni.pornpics.com/460/1/301/57618556/57618556_009_b448.jpg',
    // Emily_willsnudePussy: 'https://cdni.pornpics.com/460/1/220/92012637/92012637_015_aef2.jpg',
    Eliza_Ibarranude: 'https://www.sexpin.net/wp-content/uploads/2019/05/young-charming-brunette-eliza-ibarra-takes-off-his-shorts-and-shows-a-nice-pussy-06.jpg',
    Jane_Wildenude: 'https://files.sexyandfunny.com/img_orig/2/img5c3d7f6d43eb7.jpg',
    Jaye_Summersnude: 'https://pinuderest.com/wp-content/uploads/2022/02/Jaye_Summers_nude_naked_desnuda_xxx_porn_1.jpg',
    Megan_Rainnude: 'https://boomba.club/uploads/posts/2022-04/1651000349_5-boomba-club-p-megan-rain-erotika-5.jpg',
    Lena_Paulnude: 'https://cdn.pichunter.com/369/2/3692525/3692525_2_o.jpg',
    Lexi_Lorenude: 'https://k5x5n5g8.ssl.hwcdn.net/content/models_ret/8883-lexi-lore_400.jpg',
    Kenzie_Reevesnude: 'https://titis.org/uploads/posts/2022-05/1652567755_1-titis-org-p-kenzie-reeves-nude-erotika-1.jpg',
    Gina_Valentinanude: 'https://cdn.celebritynakeds.com/untitled-pic-1762?interlace=1&quality=85&type=jpeg&url=https%3A%2F%2Fi.redd.it%2Fnvvqwq5tjsna1.jpg&width=400&sign=spVhdJfy7HoS2m0htzz3SqcYiJPCkmTR7Z23g8Nigho',
    Natasha_Nicenude: 'https://www.erocurves.com/galleries/50363/0_big.jpg',
    Eva_Lovianude: 'https://i.pinimg.com/736x/34/c4/8c/34c48cf7d5e7c288b427100dea668573.jpg',
    Gia_Paigenude: 'https://i.pinimg.com/originals/ae/51/a9/ae51a9783000f9f8b71738e6675d079e.jpg',
    Savannah_Bondnude: 'https://boombo.biz/en/uploads/posts/2022-09/1662720845_1-boombo-biz-p-savannah-bond-naked-erotika-1.jpg',
    Little_Capricenude: 'https://content.wafflegirl.com/galleries/content/0/510/510078_781aa6f.jpg',
    Olivia_Novanude: 'https://b6z5d9u4.ssl.hwcdn.net/media/misc/model3842.jpg',
    Dani_danielnude:'https://img2.hotnessrater.com/2888641/dani-daniels-nude.jpg',
    Dani_danielnudePussy:'https://cdni.pornpics.com/460/7/162/68304280/68304280_101_7be4.jpg',
    Dani_danielnudeAnal:'https://cdni.pornpics.com/460/7/162/68304280/68304280_101_7be4.jpg',
    Dani_danielnudeSquirt:'https://candy.adult/upload/media/entries/2018-09/01/14678-2-7cba53760be1b2221e9543198f3c77e1.jpg',
    Dani_danielnudeMasterbation:'https://yespornpics.com/media/twistys/dani-daniels/innovative-babes-free-xxx/dani-daniels-7.jpg',
    Elsa_jeannude: 'https://s1.milffox.com/p/1/24/42523/pic11.jpg',
    Elsa_jeannudePussy: 'https://s1.milffox.com/p/1/24/42523/pic11.jpg',
    Leah_gottinude: 'https://img7.hotnessrater.com/1601198/leah-gotti-pussy.jpg?w=600&h=900',
    Leah_gottinudePussy: 'https://img7.hotnessrater.com/1601198/leah-gotti-pussy.jpg?w=600&h=900',
    Eliza_lbarranude: 'https://e1.pxfuel.com/desktop-wallpaper/654/214/desktop-wallpaper-eliza-ibarra-pics-in-2020-eliza-ibarra.jpg',
    Eliza_lbarranudePussy: 'https://e1.pxfuel.com/desktop-wallpaper/654/214/desktop-wallpaper-eliza-ibarra-pics-in-2020-eliza-ibarra.jpg',
    Lana_Rhoadesnude: 'https://titis.org/xxx/uploads/posts/2022-10/thumbs/1666310605_35-titis-org-p-lana-rhoades-pregnancy-nude-erotika-pinter-35.jpg',
    Karlee_Greynude: 'https://preview.redd.it/k0jotuxr5wo71.jpg?width=640&crop=smart&auto=webp&s=ccf2dbd47ae28766b8619fadc43433d0fa66cd2a',
    Kylie_Quinnnude: 'https://vip.sexhd.pics/gallery/nubiles/kylie-quinn/february-nice-ass-hdgallery/kylie-quinn-13.jpg',
    Piper_perrinude: 'https://lic.me/image/Piper-Perri-topless-naked-nude_4.jpg',
    Riley_Reidnude: 'https://content.wafflegirl.com/galleries/content/3/557/3557208_4a4ebca.jpg',
    Violet_Rainnude: 'https://imgs1cdn.adultempire.com/actor/576/699103_body/violet-rain.jpg',
    Valentine_Nappinude: 'https://warlordgoathead.files.wordpress.com/2014/09/valentina_nappi_naked.jpg'
}
let linkMapping2 = {
    
    nude :'https://img.myloview.de/bilder/black-t-shirt-mockup-on-young-sexy-girl-isolated-on-background-400-253335678.jpg'
    
    
    
}
