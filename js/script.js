let menu = document.querySelector("#menu-btn");
let logoutBtn = document.querySelectorAll('[data-id]')
let navbar = document.querySelector(".header .navbar");
let toggle = document.querySelector("#all-btn");
let header = document.querySelector("#header");
let icon = document.querySelector(".header .logo");
let font = document.querySelectorAll("p,h3,a");
let cells = document.querySelectorAll(
  ".cart,.cart .info,.box .content,.swiper-slide .id,.heading span,.calculator,.box .share a,.box form .email"
);
let reviews=document.querySelectorAll('.review .review-slider .slide')
let introPart = document.querySelector(".intro-part");
let flag = false;
let icons = document.querySelectorAll(".theme");


menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// Theme backup to local storage on page reload

if(localStorage.getItem('lightTheme')=='true'){
    changeTheme()
    if(window.location.href==='http://localhost:3000/nutrition1'||
    window.location.href==='http://localhost:3000/fat')
    changeThemeOfintroPart()
}


toggle.onclick = () => {
  changeTheme()
  if(flag===true){
    localStorage.setItem('lightTheme','true')
  }else {
    localStorage.setItem('lightTheme','false')
  }
  if(window.location.href==='http://localhost:3000/nutrition1'||
    window.location.href==='http://localhost:3000/fat')
  changeThemeOfintroPart()
};


function changeTheme() {
    /*change theme for header and its content */
  toggle.classList.toggle("fa-toggle-on");
  header.classList.toggle("lightHeader");

  /* logo theme*********************/
    icon.classList.toggle('logoDark')  

  /* change icons theme *********************/
  for (let i = 0; i <= icons.length - 1; i++) {
    let Icons = icons[i].style.color;
    if (Icons !== "black") {
      icons[i].style.color = "black";
      logoutBtn.forEach(ele=> ele.style.color='black')
    } else {
      icons[i].style.color = "white";
      logoutBtn.forEach(ele=> ele.style.color='white')
    }
  }
  /*change responseve nav theme */
  let navColor = navbar.style.backgroundColor;
  if (navColor == "white") {
    navbar.style.backgroundColor = "black";
    flag=false
  } else {
    navbar.style.backgroundColor = "white";
    flag=true
  }
  /* background color *****************/
  let bodyColor = document.body.style.backgroundColor;
  if (bodyColor == "rgb(217, 217, 217)") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "rgb(217, 217, 217)";
  }
  /* font color part *************************/
  for (let i = 0; i <= font.length - 1; i++) {
    let fontColor = font[i].style.color;
    if (fontColor !== "black") {
      font[i].style.color = "black";
    } else {
      font[i].style.color = "white";
    }
  }
  /* cells color part *************************/
  for (let i = 0; i <= cells.length - 1; i++) {
    let cellColor = cells[i].style.backgroundColor;
    if (cellColor !== "white") {
      cells[i].style.backgroundColor = "white";
    } else {
      cells[i].style.backgroundColor = "#111";
    }
  }

  reviews.forEach(element => {
    if(flag===true){
        element.style.background='linear-gradient(130deg, rgb(247 247 247) 93%, transparent 90%)'
    }else {
        element.style.background='linear-gradient(130deg, rgb(61, 61, 61) 93%, transparent 90%)'
    }
  });
}

function changeThemeOfintroPart(){
    //   introPart color part**************************
  //   don't insert after introPart to not cause error
  if (introPart.style.backgroundColor !== "rgba(255, 255, 255, 0.5)") {
    introPart.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  } else {
    introPart.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
}

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  }
  
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//google translat
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//   }



let languageIcon=document.querySelector('[data-id]')

languageIcon.onclick=()=>{
    changeLanguage()
    if(localStorage.getItem('changeLanguage')=='true'){
        arabicFontSize()
    }else{
        englishFontSize()
    }
}


let words=document.querySelectorAll('span , p , h3')
let anchorWords=document.querySelectorAll('a')

function changeLanguage(){


    let anchorLanguage=[
    {english: 'home',arabic:'الرئيسية'},
    {english: 'about',arabic:'من نحن'},
    {english: 'workout',arabic:'التمارين'},
    {english: 'nutrition',arabic:'التغذية'},
    {english: 'store',arabic:'المتجر'},
    {english: 'get started',arabic:'نقطة البداية'},
    {english: 'back to home',arabic:'عودة للرئيسية'},
    {english: 'Start',arabic:'ابدأ'},
    {english: 'back to login',arabic:'تسجيل الدخول'},
    {english: 'go to store',arabic:'الى المتجر'},
    {english: "add to cart",arabic:'اضافة'},
    {english: "Show cart",arabic:'الذهاب للعربة'},
    {english: "remove",arabic:'حذف'},
    {english: "checkout",arabic:'الدفع'},
    ]
    for(let i=0;i<anchorLanguage.length;i++){
        for(let j=0;j<anchorWords.length;j++){
            if(anchorWords[j].innerHTML===anchorLanguage[i].english){
                anchorWords[j].innerHTML=anchorLanguage[i].arabic
                localStorage.setItem('changeLanguage','true')
                anchorWords[j].parentElement.dir='rtl'
               
            }else if(anchorWords[j].innerHTML===anchorLanguage[i].arabic){
                anchorWords[j].innerHTML=anchorLanguage[i].english
                localStorage.setItem('changeLanguage','false')
                anchorWords[j].parentElement.dir='ltr'
                
            }
        }
    }

    let contentLanguage=[
    {english:'be strong, be fit',arabic:'خليك قوي...خليك متناسق'},
    {english:'Make yourself stronger than your excuses.',arabic:' كن اقوى من اعذارك'},
    {english:"about us",arabic:"من نحن"},
    {english:'what is MineFitness?',arabic:'ما هو موقع MineFitness?'},
    {english:
        "\n          we present a website that offers many services related to everything\n          about maintaining a fit and healthy body, including exercises, healthy\n          nutrition, ways and guidelines to reach the ideal weight without the\n          need of going to gym (At home). It will also provide products (sport\n          equipment/ tools) that you can buy to make training and nutrition\n          easier on you.\n        "
    ,arabic:`نقدم موقعًا إلكترونيًا يقدم العديد من الخدمات المتعلقة بكل شيء
    حول الحفاظ على الجسم السليم والصحي ، بما في ذلك التمارين ، والصحية
    التغذية وطرقها وإرشاداتها للوصول إلى الوزن المثالي بدون
    بحاجة للذهاب إلى صالة الألعاب الرياضية (في المنزل). كما ستوفر منتجات (رياضة
    المعدات / الأدوات) التي يمكنك شراؤها لصنع التدريب والتغذية
    أسهل على المستخدم.`},
    {english:'<i class="fas fa-check"></i>body and mind',arabic:'<i class="fas fa-check"></i>الجسم والفكر'},
    {english:"\n              with the costomer, we are focusing on convincing the client that\n              sport is not just a hobby, but it is a lifestyle. If customer\n              reach this conviction, his life will change!\n            "
    ,arabic:`مع العميل ، نحن نركز على إقناع العميل بأن الرياضة ليست مجرد هواية ،
    ولكنها أسلوب حياة. إذا وصل العميل إلى هذا الاقتناع ، فستتغير حياته!`},
    {english:'<i class="fas fa-check"></i>healthy life',arabic:'<i class="fas fa-check"></i>الحياة الصحية'},
    {english:'<i class="fas fa-check"></i>strategies',arabic:'<i class="fas fa-check"></i>الاستراتيجيات'},
    {english:'<i class="fas fa-check"></i>nutritions',arabic:'<i class="fas fa-check"></i>تغذيتك'},
    {english: "\n              after dealing with us, your mentality will be change and\n              healthiness will become your lifestyle.\n            "
    ,arabic:`بعد التعامل معنا ستتغير عقليتك وستصبح صحتك هي أسلوب حياتك.`},
    {english:"\n              we will be with you step by step and show you small details before\n              big ones, we won't leave you until you become a pro.\n            "
    ,arabic:`سنكون معك خطوة بخطوة ونعرض لك التفاصيل الصغيرة قبل الأعمال الكبيرة ، ولن نتركك حتى تصبح محترفًا.`},
    {english:"Your Full Guide Of Nutrition To Be A Proffessional And Reach The Best Fit And Healthy Body."
    ,arabic:`دليلك الكامل للتغذية لتكون محترفًا وتصل إلى أفضل جسم صحي.`},
    {english:'HOME',arabic:'الرئيسية'},
    {english:'WORKOUT',arabic:'التمارين'},
    {english:'NUTRITION',arabic:'التغذية'},
    {english:'STORE',arabic:'المتجر'},
    {english:'Start Shopping',arabic:'ابدأ التسوق'},
    {english:"Are You Strugilling Of Being Skinny And Want To Be In-Shape For Summer?\nWhat About Telling You That You Can Get In-Shape Within A Few Weeks And Without Leaving Your House If You Follow The Instructions Carefully. Come On, Don't Waste Time!"    ,
    arabic:`هل تكافح من أجل أن تكون نحيفًا وتريد أن تكون لائقًا للصيف؟
    ماذا عن إخبارك أنه يمكنك الحصول على الشكل في غضون أسابيع قليلة ودون مغادرة منزلك إذا اتبعت التعليمات بعناية. هيا،<span style="color: rgb(0, 0, 179)">لا تضيع الوقت</span>`},
    {english:'Choose a workout type:',arabic:'اختر نوع للتمرين:'},
    {english:'gain muscles',arabic:'رفع كتلة عضلية'},
    {english:"Lose Weights",arabic:'خسارة دهون'},
    {english:"This Workout Type Is Recomended For People Who Have Skinny Body Type."
    ,arabic:`هذا النوع من التمارين موصى به للأشخاص الذين لديهم نوع جسم نحيف المظهر.`},
    {english:"This Workout Is Recomended For People Who Have Fats In Thier\nBody."
    ,arabic:`يوصى بهذا التمرين للأشخاص الذين لديهم دهون محيطة بالجسم`},
    {english:'expert trainer',arabic:'خبير تمرين يقول'},
    {english:"Calculate Your Daily Needs Of Calories Easily And Have Knowladge About Calories."
    ,arabic:`احسب احتياجاتك اليومية من السعرات الحرارية بسهولة وتعرف على السعرات الحرارية.`},
    {english:"Lets Know More About Different Food Type's Calories, Thats Help You To Control Your Diet."
    ,arabic:`دعنا نعرف المزيد عن أنواع الأطعمة المختلفة السعرات الحرارية التي تساعدك على التحكم في نظامك الغذائي.`},
    {english:"The Complete Guide To Understanding Everything Related To Nutrition."
    ,arabic:` الدليل الكامل لفهم كل ما يتعلق بالتَغذِيَة والطعام الصحي.`},
    {english:'join us now',arabic:'انضم الينا الان'},
    {english:'TELL YOUR FRIENDS!',arabic:'اخبراصدقائك عنّا'},
    {english:"If You Want To Switch Acounts Or Logout Your Account, Please Press That Button Down There."
    ,arabic:`إذا كنت تريد تبديل الحسابات أو تسجيل الخروج من حسابك ، فيرجى الضغط على هذا الزر هناك.`},
    {english:'product',arabic:'المنتج'},
    {english:'PRODUCTS',arabic:'المنتجات'},
    {english:'Best Price Promise',arabic:'نعدكم بافضل العروض'},
    {english:"Check Your Cart For Any Old Product You May Want To Buy Before Continue Shopping."
    ,arabic:'تحقق من سلة التسوق الخاصة بك بحثًا عن أي منتج قديم قد ترغب في شرائه قبل متابعة التسوق.'},
    {english:'Fitness Expert',arabic:'خبير تغذية'},
    {english:"admin",arabic:'خبير تغذية'},
    {english:"MineFitness Is Committed To Giving You The Best Prices . All Of Are Products Are Usefull And Essintial."
    ,arabic:`تلتزم MineFitness بمنحك أفضل الأسعار. جميع المنتجات مفيدة وضرورية.`},
    {english:"Save 50% While Supplies Last. Save Some Green For Your Summer Routine! Stack Up The Savings."
    ,arabic:`وفر 50٪ حتى نفاد الكمية. وفر القليل من اللون الأخضر لروتينك الصيفي! كدس المدخرات.`},
    {english:"Strawberry And Chocolate Flavors. 80 Servings, Contain 31gram Of Protein Per 1 Serving, Ideal Use Is 3 Scopes Per Day."
    ,arabic:`نكهات الفراولة والشوكولاتة. 80 حصة تحتوي على 31 جرام من
    بروتين لكل حصة ، الاستخدام المثالي هو 3 سكوبات في اليوم.`},
    {english:"Allows You To Change How Heavy The Weight Is Using Various Mechanisms Such As A Lever, Dial Or Pin. Black Color Available."

    ,arabic:`يسمح لك بتغيير مقدار الوزن الذي يستخدمه الوزن المتنوع
    آليات مثل رافعة أو قرص أو دبوس. اللون الأسود متاح.`},
    {english:"EssentialSeries, The Most Selling Supplement In The World, Dietary Supplement, Have 300g With Free 100g Overall 400g."
    ,arabic:`EssentialSeries ، المكمل الأكثر مبيعًا في العالم ،
    مكمل غذائي ، يحتوي على 300 جرام مع 100 جرام مجاني إجمالي 400 جرام.`},
    {english:'quick links',arabic:'الروابط المختصرة'},
    {english:'contact',arabic:'للتواصل'},
    {english:'crowd support',arabic:'خدمة العملاء'},
    {english:'help us to improve our service',arabic:'ساعدنا لتحسين جودة الخدمة'},
    {english:"I'ts Not Essential To Buy From Here, But It's Good To Have Them."
    ,arabic:'ليس من الضرورة ان تشتري من متجرنا, الاهم اننا ننصحك بان تحصل عليها'},
    {english:"here are the products we recommend to buy."
    ,arabic:"نقترح عليك شراء احد هذه المنتجات حسب الحاجة"},
    {english: "Total: ",arabic:'الاجمالي: '},
    //nutrition 2
    {english: "Food Calorie's Table",arabic:'جدول السعرات الحرارية'},
    {english:'First Of All, We Need To Notice That There Is A Different Kinds Of Food Below, Each Of These Kinds Has A Total Calories, The Total Calories Are Superated Into 3 Important Types And They Are:',
    arabic:"أولاً وقبل كل شيء ، يجب أن نلاحظ وجود أنواع مختلفة من الطعام أدناه ، فكل نوع من هذه الأنواع يحتوي على إجمالي السعرات الحرارية ، وإجمالي السعرات الحرارية متباعدة في 3 أنواع مهمة وهي:"},
    {english:'Protien: each 1 gram of protien = 4 calories',arabic:'البروتين: كل 1 جرام من البروتين = 4 سعرات حرارية.'},
    {english:'Carbs: each 1 gram of carb = 4 calories' 
    ,arabic:'الكربوهيدرات: كل 1 جرام من الكربوهيدرات = 4 سعرات حرارية'},
    {english:'fats: each 1 gram of fats = 9 calories' 
    ,arabic:'دهون: كل 1 جرام دهون = 9 سعرات حرارية'},
    {english:'write or select type of food you want to find total calories.' 
    ,arabic:'اكتب أو حدد نوع الطعام الذي تريد العثور على إجمالي السعرات الحرارية له.'},
    //muscles 
    {english:'Choose Muscle You Want To Workout From This Body Anatomy, There Is 12 Different Muscles!' 
    ,arabic:'اختر العضلة التي تريد أن تمرنها من هذا الجسم ، هناك 12 عضلة مختلفة!'},
    {english: 'trape Muscle',arabic:'الترابيس'},
    {english:'\n              The traps are a large muscle with three sections: upper, middle,\n              and lower. The upper section is in the neck region, the middle and\n              lower section are in the upper back. MineFitness has 3 exercises\n              targeting the traps in our database.\n            ' 
    ,arabic:`الترابيس عضلة كبيرة بثلاثة أقسام: علوي ، وسط ،
    و السفلي. الجزء العلوي في منطقة العنق والوسط و
    الجزء السفلي في الجزء العلوي من الظهر.`},
    {english:'sholder Muscle' ,arabic:'الاكتاف'},
    {english:'\n              The shoulder muscles are mostly made up of the deltoids which\n              include three sections: anterior, medial/lateral, and\n              posterior/rear. MineFitness has 6 exercises targeting the\n              shoulders in our database.\n            ' 
    ,arabic:'تتكون عضلة الاكتاف من 3 رؤوس عضلية وهم: اماي، جانبي، خلفي.'},
    {english: 'bicep Muscle',arabic:'الباي'},
    {english: '\n              The biceps at the front of the upper arm are called the biceps\n              brachii (which means two heads) so it includes the long head and\n              short head. MineFitness has 3 exercises targeting the biceps in\n              our database.\n            '
    ,arabic:'تسمى العضلة ثات الرأسين لأنها تتكون من رأس طويل من خلرج اليد، ورأس قصية موجود داخل اليد.'},
    {english:'Chest Muscle' ,arabic:'الصدر'},
    {english:'\n              The chest muscles include the pectoralis major (clavicular and\n              sternal heads) and pectoralis minor which sits underneath pec\n              major. Some also consider the serratus anterior a chest region\n              muscle. MineFitness has 5 exercises targeting the chest in our\n              database.\n            '
    ,arabic:'عضلة الصدر مكونة من 3 اجزاء أو زوايا وهم: الصدر العلوي وتستهدفه تمارين البينش المائل، الصدر العادي(الاوسط) وتستهدفه تمارين البينش العادي، والصدر السفلي وتستهدفه تمارين البينش المائل للأسفل (السفلي).'},
    {english: 'forearm Muscle',arabic:'السواعد'},
    {english: '\n              The forearm muscles can be bundled into two main groups: the wrist\n              flexors are on the palm side of the forearm and the wrist\n              extensors are on the opposite side of the forearm. MineFitness has\n              4 exercises targeting the forearms in our database.\n            '
    ,arabic:'\n يمكن تجميع عضلات الساعد في مجموعتين رئيسيتين: عضلات المعصم \n على جانب راحة اليد والرسغ \n على الجانب الآخر من الساعد.'},
    {english: 'side abs Muscle',arabic:'المعدة الجانبي'},
    {english: '\n              The side abdominals (on our left and right) include the external\n              and internal obliques. MineFitness has 2 exercises targeting the\n              side abs in our database.\n            '
    ,arabic:"تتضمن عضلات البطن الجانبية (على اليسار واليمين) الأطراف المائلة \n الخارجية والداخلية."},
    {english: 'abs Muscle',arabic:'المعدة'},
    {english: '\n              abs muscles (abnominal muscles) divided into three parts: upper abs, middle abs, lower abs. MineFitness has 4 exercises targeting the chest in our\n              database.\n            '
    ,arabic:'عضلات البطن (عضلات البطن) مقسمة إلى ثلاثة أجزاء: عضلات البطن العلوية والوسطى والسفلى'},
    {english: 'leg Muscle',arabic:'الرجلين'},
    {english: '\n              The quadriceps (or quads) located at the front of the thigh\n              include the vastus lateralis, vastus intermedius, vastus medialis,\n              and rectus femoris. MineFitness has 7 exercises targeting the\n              quads in our database.\n            '
    ,arabic:'عضلات الفخذ الرباعية (أو الرباعية) الموجودة في مقدمة الفخذ \n تشمل المتسعة الوحشية ، المتسعة المتوسطة ، المتسعة الوسطى ، \n والفخذ المستقيمة، وبالمختصر يتم تقسيمهم الى فخد امامي وفخد خلفي.'},
    {english: 'calf muscle',arabic:'البطات'},
    {english: '\n              The calves located at the back of the lower leg include the\n              gastrocnemius (medial and lateral head) and the soleus. Home\n              Workouts has 2 exercises targeting the calves in our database.\n            '
    ,arabic:'تتضمن البطات الموجودة في الجزء الخلفي من أسفل الساق \ n عضلة الساق (الرأس الاوسط والجانبي) والنعل.'},
    {english: 'back Muscles',arabic:'الظهر'},
    {english: '\n              The upper back muscles include the rhomboids (major and minor),\n              trapezius (upper, middle, and lower), paraspinals, and erector\n              spinae. MineFitness has 5 exercises targeting the upper back in\n              our database.\n            '
    ,arabic:'تتضمن عضلات الظهر جزئين، العلوي والسفلي، الجزء الذي يعطي الشكل الكبير للجسم هو الظهر العلوي، بينما تمرين الجزء السفلي سيعطي ثبات وقوة اكبر للجسم.'},
    {english: 'tricep Muscle',arabic:'التراي'},
    {english: '\n              The triceps at the back of the upper arm are called the triceps\n              brachii (which means three heads) so it includes the long head,\n              lateral head, and medial had. MineFitness has 3 exercises\n              targeting the triceps in our database.\n            '
    ,arabic:"العضدية (مما يعني ثلاثة رؤوس) لذا فهي تشمل الرأس الطويل \n والرأس الجانبي والوسط"},
    {english: 'glute Muscle',arabic:'المؤخرة'},
    {english: '\n              The three main glutes include the gluteus maximus, gluteus\n              medialis, and gluteus minimus. There are also some smaller muscles\n              amongst the glutes like the piriformis, quadratus femoris,\n              gemellus (superior and inferior), and obturator externus. Home\n              Workouts has 3 exercises targeting the glutes in our database.\n            '
    ,arabic:'عضلة المؤخرة مقسمة الى عضلات صغيرة منها متصل بالفخد الخلفي، تمارين السكوات تستهدف هذه المنطقة بشكل اساسي.'},
    //fat section
    {english:'Lose Weight',arabic:"خسارة الدهون"},
    {english:'It’s Estimated That Half Of All Adults Attempt To Lose Weight Every Year (1Trusted Source).\n\nAside From Dieting, Exercising Is One Of The Most Common Strategies Employed By Those Trying To Shed Extra Pounds. It Burns Calories, And This Plays A Key Role In Weight Loss. In Addition To Helping You Lose Weight, Exercise Has Been Linked To Many Other Benefits, Including Improved Mood, Stronger Bones, And A Reduced Risk Of Many Chronic Diseases (2Trusted Source, 3Trusted Source, 4Trusted Source). Here Are The 8 Best Exercises For Weight Loss.'
    ,arabic: 'من المقدر أن نصف البالغين يحاولون إنقاص الوزن كل عام (مصدر موثوق به). \n \n إلى جانب اتباع نظام غذائي ، فإن ممارسة الرياضة هي إحدى الاستراتيجيات الأكثر شيوعًا التي يستخدمها أولئك الذين يحاولون إنقاص الوزن الزائد. وتحرق السعرات الحرارية ، وهذا يلعب دورًا رئيسيًا في إنقاص الوزن. بالإضافة إلى مساعدتك على إنقاص الوزن ، تم ربط التمرين بالعديد من الفوائد الأخرى ، بما في ذلك تحسين الحالة المزاجية ، وتقوية العظام ، وتقليل مخاطر الإصابة بالعديد من الأمراض المزمنة (2 مصدر موثوق ، 3 مصدر موثوق ، 4 مصدر موثوق). إليك أفضل 8 تمارين لفقدان الوزن.'},
    {english: '1.walking',arabic:'1.المشي'},
    {english: 'Walking Is One Of The Best Exercises For Weight Loss — And For Good Reason. It’s Convenient And An Easy Way For Beginners To Start Exercising Without Feeling Overwhelmed Or Needing To Purchase Equipment. Also, It’s A Lower-Impact Exercise, Meaning It Doesn’t Stress Your Joints. According To Harvard Health, It’s Estimated That A 155-Pound (70-Kg) Person Burns Around 167 Calories Per 30 Minutes Of Walking At A Moderate Pace Of 4 Mph (6.4 Km/H) (5). A 12-Week Study In 20 Women With Obesity Found That Walking For 50–70 Minutes 3 Times Per Week Reduced Body Fat And Waist Circumference By An Average Of 1.5% And 1.1 Inches (2.8 Cm), Respectively (6Trusted Source). It’s Easy To Fit Walking Into Your Daily Routine. To Add More Steps To Your Day, Try Walking During Your Lunch Break, Taking The Stairs At Work, Or Taking Your Dog For Extra Walks. To Get Started, Aim To Walk For 30 Minutes 3–4 Times A Week. You Can Gradually Increase The Duration Or Frequency Of Your Walks As You Become More Fit.'
    ,arabic:'"المشي هو أحد أفضل التمارين لخسارة الوزن - ولسبب وجيه. إنها طريقة مريحة وسهلة للمبتدئين لبدء ممارسة الرياضة دون الشعور بالإرهاق أو الحاجة إلى شراء المعدات. أيضًا ، إنه تمرين ذو تأثير أقل ، بمعنى أنه لا يجهد مفاصلك. وفقًا لهارفارد هيلث ، يقدر أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق حوالي 167 سعرًا حراريًا لكل 30 دقيقة من المشي بسرعة معتدلة تبلغ 4 ميل في الساعة (6.4 كم / ساعة) (5). وجدت دراسة استمرت 12 أسبوعًا على 20 امرأة مصابة بالسمنة أن المشي لمدة 50-70 دقيقة 3 مرات أسبوعيًا يقلل من دهون الجسم ومحيط الخصر بمعدل 1.5٪ و 1.1 بوصة (2.8 سم) ، على التوالي (6 مصدر موثوق). من السهل أن تتناسب مع المشي مع روتينك اليومي. لإضافة المزيد من الخطوات إلى يومك ، حاول المشي أثناء استراحة الغداء ، أو صعود الدرج في العمل ، أو اصطحاب كلبك في نزهات إضافية. للبدء ، اهدف إلى المشي لمدة 30 دقيقة 3-4 مرات في الأسبوع. يمكنك زيادة مدة أو عدد مرات المشي تدريجيًا كلما أصبحت أكثر لياقة.'},
    {english:'2. Jogging Or Running' ,arabic:'2.الهرولة أو الركض'},
    {english: 'Jogging And Running Are Great Exercises To Help You Lose Weight. Although They Seem Similar, The Key Difference Is That A Jogging Pace Is Generally Between 4–6 Mph (6.4–9.7 Km/H), While A Running Pace Is Faster Than 6 Mph (9.7 Km/H). Harvard Health Estimates That A 155-Pound (70-Kg) Person Burns Approximately 298 Calories Per 30 Minutes Of Jogging At A 5-Mph (8-Km/H) Pace, Or 372 Calories Per 30 Minutes Of Running At A 6-Mph (9.7-Km/H) Pace (5). What’s More, Studies Have Found That Jogging And Running Can Help Burn Harmful Visceral Fat, Commonly Known As Belly Fat. This Type Of Fat Wraps Around Your Internal Organs And Has Been Linked To Various Chronic Diseases Like Heart Disease And Diabetes (7Trusted Source, 8Trusted Source, 9Trusted Source). Both Jogging And Running Are Great Exercises That Can Be Done Anywhere And Are Easy To Incorporate Into Your Weekly Routine. To Get Started, Aim To Jog For 20–30 Minutes 3–4 Times Per Week. If You Find Jogging Or Running Outdoors To Be Hard On Your Joints, Try Running On Softer Surfaces Like Grass. Also, Many Treadmills Have Built-In Cushioning, Which May Be Easier On Your Joints.'
    ,arabic:'الركض والجري تمرينان رائعان لمساعدتك على إنقاص الوزن. على الرغم من أنها تبدو متشابهة ، إلا أن الاختلاف الرئيسي هو أن سرعة الركض تكون بشكل عام بين 4-6 ميل في الساعة (6.4-9.7 كم / ساعة) ، في حين أن سرعة الجري أسرع من 6 ميل في الساعة (9.7 كم / ساعة). تقدر هارفارد هيلث أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق ما يقرب من 298 سعرة حرارية لكل 30 دقيقة من الركض بسرعة 5 ميل في الساعة (8 كم / ساعة) ، أو 372 سعرة حرارية لكل 30 دقيقة من الجري بسرعة 6 ميل في الساعة (9.7 كم / ساعة) وتيرة (5). علاوة على ذلك ، وجدت الدراسات أن الجري والجري يمكن أن يساعد في حرق الدهون الحشوية الضارة ، المعروفة باسم دهون البطن. هذا النوع من الدهون يلتف حول أعضائك الداخلية وقد ارتبط بأمراض مزمنة مختلفة مثل أمراض القلب والسكري (7 مصدر موثوق ، 8 مصدر موثوق ، 9 مصدر موثوق). يعد كل من الركض والجري من التمارين الرائعة التي يمكن القيام بها في أي مكان ومن السهل دمجها في روتينك الأسبوعي. للبدء ، حاول الهرولة لمدة 20-30 دقيقة 3-4 مرات في الأسبوع. إذا وجدت الركض أو الجري في الهواء الطلق لتكون قاسيًا على مفاصلك ، فحاول الجري على أسطح أكثر ليونة مثل العشب. أيضًا ، تحتوي العديد من أجهزة المشي على توسيد مدمج ، والذي قد يكون أسهل على مفاصلك.'},
    {english: '3. Cycling',arabic:'3.الدراجة الهوائية'},
    {english: '\n            Cycling is a popular exercise that improves your fitness and can\n            help you lose weight. Although cycling is traditionally done\n            outdoors, many gyms and fitness centers have stationary bikes that\n            allow you to cycle while staying indoors. Harvard Health estimates\n            that a 155-pound (70-kg) person burns around 260 calories per 30\n            minutes of cycling on a stationary bike at a moderate pace, or 298\n            calories per 30 minutes on a bicycle at a moderate pace of 12–13.9\n            mph (19–22.4 km/h) (5). Not only is cycling great for weight loss,\n            but studies have found that people who cycle regularly have better\n            overall fitness, increased insulin sensitivity, and a lower risk of\n            heart disease, cancer, and death, compared with those who don’t\n            cycle regularly (10Trusted Source, 11Trusted Source). Cycling is\n            great for people of all fitness levels, from beginners to athletes.\n            Plus, it’s a non-weight-bearing and low-impact exercise, so it won’t\n            place much stress on your joints.\n          '
    ,arabic:'يعتبر ركوب الدراجات تمرينًا شائعًا يحسن لياقتك ويمكن أن يساعدك على إنقاص الوزن. على الرغم من أن ركوب الدراجات يتم تقليديًا في الهواء الطلق ، إلا أن العديد من الصالات الرياضية ومراكز اللياقة البدنية بها دراجات ثابتة تتيح لك ركوب الدراجة أثناء البقاء في الداخل. تقدر هارفارد هيلث أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق حوالي 260 سعرة حرارية لكل 30 دقيقة من ركوب الدراجة على دراجة ثابتة بوتيرة معتدلة ، أو 298 سعرًا حراريًا لكل 30 دقيقة على دراجة بسرعة معتدلة من 12 إلى 13.9 ميل في الساعة (19-22.4 كم / ساعة) (5). ليس فقط ركوب الدراجات أمرًا رائعًا لفقدان الوزن ، ولكن الدراسات وجدت أن الأشخاص الذين يمارسون الرياضة بانتظام يتمتعون بلياقة عامة أفضل ، وزيادة حساسية الأنسولين ، وانخفاض مخاطر الإصابة بأمراض القلب ، والسرطان ، والوفاة ، مقارنة بأولئك الذين لا يقومون بالدورة بانتظام ( 10 مصدر موثوق ، 11 مصدر موثوق). ركوب الدراجات رائع للأشخاص من جميع مستويات اللياقة البدنية ، من المبتدئين إلى الرياضيين. بالإضافة إلى ذلك ، فهي تمرين لا يحمل وزنًا ومنخفض التأثير ، لذلك لن يضع الكثير من الضغط على مفاصلك.'},
    {english: '4. Weight Training',arabic:'4.التمرين باستخدام اوزان'},
    {english: '\n            Weight training is a popular choice for people looking to lose\n            weight. According to Harvard Health, it’s estimated that a 155-pound\n            (70-kg) person burns roughly 112 calories per 30 minutes of weight\n            training (5). Also, weight training can help you build strength and\n            promote muscle growth, which can raise your resting metabolic rate\n            (RMR), or how many calories your body burns at rest (12Trusted\n            Source). One 6-month study showed that simply doing 11 minutes of\n            strength-based exercises 3 times per week resulted in a 7.4%\n            increase in metabolic rate, on average. In this study, that increase\n            was equivalent to burning an additional 125 calories per day\n            (13Trusted Source). Another study found that 24 weeks of weight\n            training led to a 9% increase in metabolic rate among men, which\n            equated to burning approximately 140 more calories per day. Among\n            women, the increase in metabolic rate was nearly 4%, or 50 more\n            calories per day (14Trusted Source). In addition, numerous studies\n            have shown that your body continues to burn calories many hours\n            after a weight-training workout, compared with aerobic exercise\n            (15Trusted Source, 16Trusted Source, 17Trusted Source).\n          '
    ,arabic:'تدريب الوزن هو خيار شائع للأشخاص الذين يتطلعون إلى إنقاص الوزن. وفقًا لهارفارد هيلث ، يقدر أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق ما يقرب من 112 سعرة حرارية لكل 30 دقيقة من تدريب الوزن (5). أيضًا ، يمكن أن يساعدك تدريب الوزن على بناء القوة وتعزيز نمو العضلات ، مما يمكن أن يرفع معدل الأيض أثناء الراحة (RMR) ، أو عدد السعرات الحرارية التي يحرقها جسمك أثناء الراحة (12 مصدر موثوق). أظهرت دراسة واحدة مدتها 6 أشهر أن القيام ببساطة بـ 11 دقيقة من التمارين القائمة على القوة 3 مرات في الأسبوع أدى إلى زيادة بنسبة 7.4٪ في معدل الأيض ، في المتوسط. في هذه الدراسة ، كانت هذه الزيادة تعادل حرق 125 سعرة حرارية إضافية في اليوم (13 مصدر موثوق). وجدت دراسة أخرى أن 24 أسبوعًا من تدريب الوزن أدى إلى زيادة بنسبة 9٪ في معدل الأيض بين الرجال ، وهو ما يعادل حرق 140 سعرًا حراريًا إضافيًا في اليوم. بين النساء ، كانت الزيادة في معدل الأيض حوالي 4٪ ، أو 50 سعرة حرارية إضافية في اليوم (14 مصدر موثوق). بالإضافة إلى ذلك ، أظهرت العديد من الدراسات أن جسمك يستمر في حرق السعرات الحرارية لعدة ساعات بعد تمرين تدريبات الوزن ، مقارنة بالتمارين الهوائية (15 مصدر موثوق ، 16 مصدر موثوق ، 17 مصدر موثوق).'},
    {english: '5. Interval Training',arabic:'5. التمرين على فترات متقطعة'},
    {english: 'Interval Training, More Commonly Known As High-Intensity Interval Training (HIIT), Is A Broad Term That Refers To Short Bursts Of Intense Exercise That Alternate With Recovery Periods. Typically, A HIIT Workout Lasts 10–30 Minutes And Can Burn A Lot Of Calories. One Study In 9 Active Men Found That HIIT Burned 25–30% More Calories Per Minute Than Other Types Of Exercises, Including Weight Training, Cycling, And Running On A Treadmill (18Trusted Source). That Means HIIT Can Help You Burn More Calories While Spending Less Time Exercising. Furthermore, Numerous Studies Have Shown That HIIT Is Especially Effective At Burning Belly Fat, Which Is Linked To Many Chronic Diseases (19Trusted Source, 20Trusted Source, 21Trusted Source). HIIT Is Easy To Incorporate Into Your Exercise Routine. All You Need To Do Is Choose A Type Of Exercise, Such As Running, Jumping, Or Biking, And Your Exercise And Rest Times. For Example, Pedal As Hard As You Can On A Bike For 30 Seconds Followed By Pedaling At A Slow Pace For 1–2 Minutes. Repeat This Pattern For 10–30 Minutes.'
    ,arabic:'التدريب الفتري ، المعروف أكثر باسم التدريب المتقطع عالي الكثافة (HIIT) ، هو مصطلح واسع يشير إلى فترات قصيرة من التمرين المكثف الذي يتناوب مع فترات التعافي. عادةً ما يستمر تمرين HIIT من 10 إلى 30 دقيقة ويمكن أن يحرق الكثير من السعرات الحرارية. وجدت إحدى الدراسات التي أجريت على 9 رجال نشطين أن HIIT يحرق 25-30٪ سعرات حرارية أكثر في الدقيقة مقارنة بالأنواع الأخرى من التمارين ، بما في ذلك تمارين رفع الأثقال وركوب الدراجات والجري على جهاز الجري (18 مصدر موثوق). هذا يعني أن HIIT يمكن أن يساعدك على حرق المزيد من السعرات الحرارية مع قضاء وقت أقل في التمرين. علاوة على ذلك ، أظهرت العديد من الدراسات أن HIIT فعال بشكل خاص في حرق دهون البطن ، والتي ترتبط بالعديد من الأمراض المزمنة (19 مصدر موثوق ، 20 مصدر موثوق ، 21 مصدر موثوق). من السهل دمج HIIT في روتين التمرين الخاص بك. كل ما عليك القيام به هو اختيار نوع التمرين ، مثل الجري ، أو القفز ، أو ركوب الدراجات ، وممارسة الرياضة وأوقات الراحة. على سبيل المثال ، الدواسة بأقصى ما تستطيع على دراجة لمدة 30 ثانية متبوعة بالدواسة بخطى بطيئة لمدة 1-2 دقيقة. كرر هذا النمط لمدة 10-30 دقيقة.'},
    {english: '6. Swimming',arabic:'6.السباحة'},
    {english: 'Swimming Is A Fun Way To Lose Weight And Get In Shape. Harvard Health Estimates That A 155-Pound (70-Kg) Person Burns Approximately 233 Calories Per Half Hour Of Swimming. How You Swim Appears To Affect How Many Calories You Burn. Per 30 Minutes, A 155-Pound (70-Kg) Person Burns 298 Calories Doing Backstroke, 372 Calories Doing Breaststroke, 409 Calories Doing Butterfly, And 372 Calories Treading Water (5). One 12-Week Study In 24 Middle-Aged Women Found That Swimming For 60 Minutes 3 Times Per Week Significantly Reduced Body Fat, Improved Flexibility, And Reduced Several Heart Disease Risk Factors, Including High Total Cholesterol And Blood Triglycerides (22Trusted Source). Another Advantage Of Swimming Is Its Low-Impact Nature, Meaning That It’s Easier On Your Joints. This Makes It A Great Option For People Who Have Injuries Or Joint Pain.'
    ,arabic:'السباحة طريقة ممتعة لفقدان الوزن والحصول على اللياقة البدنية. تقدر هارفارد هيلث أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق ما يقرب من 233 سعرة حرارية لكل نصف ساعة من السباحة. تؤثر طريقة السباحة على عدد السعرات الحرارية التي تحرقها. لكل 30 دقيقة ، يحرق الشخص الذي يبلغ وزنه 155 رطلاً (70 كجم) 298 سعرة حرارية أثناء أداء عضلات الظهر ، و 372 سعرة حرارية أثناء أداء ضربة الصدر ، و 409 سعرة حرارية أثناء ممارسة رياضة الفراشة ، و 372 سعرة حرارية في الماء (5). وجدت دراسة واحدة لمدة 12 أسبوعًا على 24 امرأة في منتصف العمر أن السباحة لمدة 60 دقيقة 3 مرات في الأسبوع تقلل بشكل كبير من دهون الجسم وتحسن المرونة وتقليل العديد من عوامل خطر الإصابة بأمراض القلب ، بما في ذلك ارتفاع الكوليسترول الكلي والدهون الثلاثية في الدم (22 مصدر موثوق). ميزة أخرى للسباحة هي طبيعتها منخفضة التأثير ، مما يعني أنها أسهل على مفاصلك. هذا يجعلها خيارًا رائعًا للأشخاص الذين يعانون من إصابات أو آلام في المفاصل.'},
    {english: '7. Yoga',arabic:'7. اليوغا'},
    {english: 'Yoga Is A Popular Way To Exercise And Relieve Stress. While It’s Not Commonly Thought Of As A Weight Loss Exercise, It Burns A Fair Amount Of Calories And Offers Many Additional Health Benefits That Can Promote Weight Loss. Harvard Health Estimates That A 155-Pound (70-Kg) Person Burns Around 149 Calories Per 30 Minutes Of Practicing Yoga (5). A 12-Week Study In 60 Women With Obesity Found That Those Who Participated In Two 90-Minute Yoga Sessions Per Week Experienced Greater Reductions In Waist Circumference Than Those In The Control Group — By 1.5 Inches (3.8 Cm), On Average(23Trusted Source). Additionally, The Yoga Group Experienced Improvements In Mental And Physical Well-Being (23Trusted Source). Aside From Burning Calories, Studies Have Shown That Yoga Can Teach Mindfulness, Which Can Help You Resist Unhealthy Foods, Control Overeating, And Better Understand Your Body’s Hunger Signals (24Trusted Source, 25Trusted Source). Most Gyms Offer Yoga Classes, But You Can Practice Yoga Anywhere. This Includes From The Comfort Of Your Own Home, As There Are Plenty Of Guided Tutorials Online.'
    ,arabic:'اليوغا هي طريقة شائعة للتمرين وتخفيف التوتر. على الرغم من أنه ليس من المعتاد اعتبارها تمرينًا لإنقاص الوزن ، إلا أنها تحرق كمية معقولة من السعرات الحرارية وتوفر العديد من الفوائد الصحية الإضافية التي يمكن أن تعزز فقدان الوزن. تقدر صحة هارفارد أن شخصًا يبلغ وزنه 155 رطلاً (70 كجم) يحرق حوالي 149 سعرًا حراريًا لكل 30 دقيقة من ممارسة اليوجا (5). وجدت دراسة استمرت 12 أسبوعًا على 60 امرأة مصابة بالسمنة أن أولئك الذين شاركوا في جلستي يوجا مدة كل منهما 90 دقيقة في الأسبوع شهدن انخفاضًا أكبر في محيط الخصر مقارنة بأولئك في المجموعة الضابطة - بمقدار 1.5 بوصة (3.8 سم) ، في المتوسط (23 مصدر موثوق) ). بالإضافة إلى ذلك ، شهدت مجموعة اليوجا تحسينات في الصحة العقلية والبدنية (23 مصدر موثوق). بصرف النظر عن حرق السعرات الحرارية ، أظهرت الدراسات أن اليوجا يمكن أن تعلم اليقظة ، والتي يمكن أن تساعدك على مقاومة الأطعمة غير الصحية ، والتحكم في الإفراط في تناول الطعام ، وفهم إشارات الجوع في جسمك بشكل أفضل (24 مصدر موثوق ، 25 مصدر موثوق). تقدم معظم صالات الألعاب الرياضية دروسًا في اليوجا ، ولكن يمكنك ممارسة اليوجا في أي مكان. وهذا يشمل الراحة في منزلك ، حيث يوجد الكثير من البرامج التعليمية الموجهة عبر الإنترنت.'},
    {english: '8. Pilates',arabic:'8. البيلاتيس'},
    {english: 'Pilates Is A Great Beginner-Friendly Exercise That May Help You Lose Weight. According To A Study Sponsored By The American Council On Exercise, A Person Weighing Around 140 Pounds (64 Kg) Would Burn 108 Calories At A 30-Minute Beginner’s Pilates Class, Or 168 Calories At An Advanced Class Of The Same Duration (26). Although Pilates May Not Burn As Many Calories As Aerobic Exercises Like Running, Many People Find It Enjoyable, Which Makes It Easier To Stick To Over Time (27Trusted Source). An 8-Week Study In 37 Middle-Aged Women Found That Performing Pilates Exercises For 90 Minutes 3 Times Per Week Significantly Reduced Waist, Stomach, And Hip Circumference, Compared With A Control Group That Did No Exercise Over The Same Period (28Trusted Source). Other Than Weight Loss, Pilates Has Been Shown To Reduce Lower Back Pain And Improve Your Strength, Balance, Flexibility, Endurance, And Overall Fitness Level (27Trusted Source, 29Trusted Source, 30Trusted Source). If You’d Like To Give Pilates A Go, Try Incorporating It Into Your Weekly Routine. You Can Do Pilates At Home Or One Of The Many Gyms That Offer Pilates Classes. To Further Boost Weight Loss With Pilates, Combine It With A Healthy Diet Or Other Forms Of Exercise, Such As Weight Training Or Cardio.'
    ,arabic:'بيلاتيس هو تمرين رائع مناسب للمبتدئين وقد يساعدك على إنقاص الوزن. وفقًا لدراسة برعاية المجلس الأمريكي للتمرين ، فإن أي شخص يزن حوالي 140 رطلاً (64 كجم) يحرق 108 سعرات حرارية في فصل بيلاتيس للمبتدئين لمدة 30 دقيقة ، أو 168 سعرة حرارية في فئة متقدمة من نفس المدة (26). على الرغم من أن تمارين البيلاتيس قد لا تحرق الكثير من السعرات الحرارية مثل التمارين الهوائية مثل الجري ، إلا أن الكثير من الناس يجدونها ممتعة ، مما يجعل التمسك بها أسهل بمرور الوقت (27 مصدر موثوق). وجدت دراسة استمرت 8 أسابيع في 37 امرأة في منتصف العمر أن أداء تمارين البيلاتيس لمدة 90 دقيقة 3 مرات في الأسبوع يقلل بشكل كبير من الخصر والمعدة ومحيط الورك ، مقارنة بمجموعة التحكم التي لم تمارس أي تمرين خلال نفس الفترة (28 مصدر موثوق) . بخلاف فقدان الوزن ، تم عرض تمارين البيلاتيس لتقليل آلام أسفل الظهر وتحسين قوتك وتوازنك ومرونتك وتحملك ومستوى اللياقة العامة (27 مصدر موثوق ، 29 مصدر موثوق ، 30 مصدر موثوق). إذا كنت ترغب في تجربة بيلاتيس ، فحاول دمجها في روتينك الأسبوعي. يمكنك ممارسة تمارين البيلاتيس في المنزل أو في إحدى صالات الألعاب الرياضية العديدة التي تقدم دروس بيلاتيس. لزيادة فقدان الوزن مع البيلاتس ، اجمعها مع نظام غذائي صحي أو أي أشكال أخرى من التمارين ، مثل تمارين رفع الأثقال أو تمارين الكارديو.'},
    //Nutrition 1
    // {english:'Nutrition',arabic:'التغذية'},
    {english:"\n          first of all, you should know your daily need of calories based on\n          your age,gender,height,weight and your activity state. <br><br>\n          now,you may ask, what is calories and what's the importance of it?<br>\n          So ...calories are the energy needed to raise the temperature of 1\n          gram of water through 1 °C (now usually defined as 4.1868 joules).<br><br>\n          now, you may also ask, what in the hell dose that mean, even if the\n          water boild, what does this do to me!!<br>\n          the answer will be after you calculate your daily need of calories\n          bellow<br><br>\n        "
    ,arabic:"\n أولاً وقبل كل شيء ، يجب أن تعرف احتياجاتك اليومية من السعرات الحرارية بناءً على \n عمرك وجنسك وطولك ووزنك وحالة نشاطك. <br> <br> \n الآن ، قد تسأل ، ما هي السعرات الحرارية و ما أهمية ذلك؟ <br> \n إذن ... السعرات الحرارية هي الطاقة اللازمة لرفع درجة حرارة 1 \n جرام من الماء خلال درجة مئوية واحدة (تُعرف الآن بـ 4.1868 جول). <br> <br> \n الآن ، يمكنك أيضًا أن تسأل ، ماذا يعني ذلك بحق الجحيم ، حتى لو كان \n الماء يغلي ، ماذا يفعل هذا لي !! <br> \n ستكون الإجابة بعد أن تحسب احتياجاتك اليومية من السعرات الحرارية \n أدناه <br> <br> \n "},
    {english:'Daily colories needed',arabic:'السعرات الحرارية يوميا'},
    {english:'\n              The results show a number of daily calorie estimates that can be\n              used as a guideline for how many calories to consume each day to\n              maintain, lose, or gain weight at a chosen rate.\n            '
    ,arabic:'تظهر النتائج عددًا من تقديرات السعرات الحرارية اليومية التي يمكن استخدامها كدليل لعدد السعرات الحرارية التي يجب استهلاكها كل يوم للحفاظ على الوزن أو خسارته أو اكتسابه بالمعدل المختار.'},
    {english:"\n              You can use this information to help you figure out how many\n              calories you should be consuming to maintain your weight. On\n              active days, you'll need more calories, so it's okay to eat a\n              little more than you would on an average day. But on more\n              sedentary days, you may want to reduce your calorie intake.\n              <br><br>\n              If you want to lose weight, try to stay below your calorie needs\n              or increase your activity level. However, make sure you are eating\n              nutritious meals and not restricting your calories too much -\n              eating too little or losing weight rapidly can be unhealthy and\n              dangerous.\n            "
    ,arabic:"\n يمكنك استخدام هذه المعلومات لمساعدتك في معرفة عدد \n السعرات الحرارية التي يجب أن تستهلكها للحفاظ على وزنك. في \n الأيام النشطة ، ستحتاج إلى المزيد من السعرات الحرارية ، لذلك لا بأس من تناول \n أكثر قليلاً مما تفعله في اليوم العادي. ولكن في الأيام الأكثر \n التي تتسم بقلة الحركة ، قد ترغب في تقليل كمية السعرات الحرارية التي تتناولها. \n <br> <br> \n إذا كنت ترغب في إنقاص الوزن ، فحاول البقاء دون احتياجاتك من السعرات الحرارية \n أو زيادة مستوى نشاطك. ومع ذلك ، تأكد من أنك تتناول \ n وجبات مغذية ولا تقيد سعراتك الحرارية كثيرًا - \n تناول القليل جدًا أو فقدان الوزن بسرعة قد يكون غير صحي وخطير \n. \n "},
]
    for(let i=0;i<contentLanguage.length;i++){
        for(let j=0;j<words.length;j++){
            if(words[j].innerHTML===contentLanguage[i].english||words[j].innerText===contentLanguage[i].english){
                words[j].innerHTML=contentLanguage[i].arabic
                // if (words[i].tagName=='P'){
                //     words[j].style.fontSize='2rem;'
                //     console.log('hello')
                // }
                localStorage.setItem('changeLanguage','true')
                words[j].dir='rtl'
                if(words[j].parentElement.parentElement.classList[0]=='muscle-description'){
                    words[j].parentElement.parentElement.dir='rtl'
                }else if(words[j].parentElement.parentElement.classList[0]=='swiper-slide'){
                    words[j].parentElement.parentElement.dir='rtl'
                    console.log('arabic')
                }
            }else if(words[j].innerHTML===contentLanguage[i].arabic||words[j].innerText===contentLanguage[i].arabic){
                words[j].innerHTML=contentLanguage[i].english
                localStorage.setItem('changeLanguage','false')
                words[j].dir='ltr'
                if(words[j].parentElement.parentElement.classList[0]=='muscle-description'){
                    words[j].parentElement.parentElement.dir='ltr'
                }else if(words[j].parentElement.parentElement.classList[0]=='swiper-slide'){
                    words[j].parentElement.parentElement.dir='ltr'
                    console.log('english')
                }
            }
        }
    }

}

if(localStorage.getItem('changeLanguage')=='true'){
    changeLanguage()
    arabicFontSize()
}

function arabicFontSize(){
    words.forEach(ele => {
        if(ele.tagName=='P'){
            ele.style.fontSize='2rem'
        }
    });
}

function englishFontSize(){
    words.forEach(ele => {
        if(ele.tagName=='P'){
            ele.style.fontSize='1.5rem'
        }
    });
}