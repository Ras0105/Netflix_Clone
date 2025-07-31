
window.addEventListener("DOMContentLoaded", function () {
document.getElementById("lang-select").addEventListener("change", function() {
  const selectedLang = this.value;
//   console.log("Language switched to:", selectedLang);


const translations = {
    english: {
      signin: "Sign In",
      Popularnow:"Popular Now",      
      plannow:"Plans",
      reasontojoin:"Reasons to Join",
      faques:"FAQ",
      para1:"<b>Unlimited movies, TV shows and more</b>",
      para2:"Starts at ₹ 149. Cancel at any time.",
      para3:"Ready to watch? Enter your email to create or restart your membership.",
      email:"Email address",
      startnow:"Get Started",

      aaloo1:"Trending Now",

      aaloo2:"A plan to suit your needs",
      mob1:"Mobile",
      mob2:"480p",
      mob3:"Fair video quality",
      mob4:"For your phone or tablet",
      mob5:"₹149 /mo",

      basic1:"Most Popular",
      basic2:"Basic",
      basic3:"720p",
      basic4:"Good video quality",
      basic5:"For your phone, tablet, laptop and TV",
      basic6:"₹199 /mo",

      stand1:"Standard",
      stand2:"1080p",
      stand3:"Great video quality",
      stand4:"For your phone, tablet, laptop and TV",
      stand5:"₹499 /mo",

      prem1:"Premium",
      prem2:"4K + HDR",
      prem3:"Best video quality",
      prem4:"Immersive sound (spatial audio)",
      prem5:"For your phone, tablet, laptop and TV",
      prem6:"₹649 /mo",

      aaloo3:"More reasons to join",
      mobile1:"Enjoy on your TV",
      mobile2:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",

      basic21:"Download your shows to watch offline",
      basic22:"Save your favourites easily and always have something to watch.",
      
      standard1:"Watch everywhere",
      standard2:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",

      premium1:"Create profiles for kids",
      premium2:"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",


      aaloo4:"Frequently Asked Questions",
      head1:"What is Netflix?",
      box1:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      
      head2:"How much does Netflix cost?",
      box2:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      
      head3:"Where can I watch?",
      box3:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/> You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      
      head4:"How do I cancel?",
      box4:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",

      head5:"What can I watch on Netflix?",
      box5:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",

      head6:"Is Netflix good for kids?",
      box6:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",

      ftext:"Ready to watch? Enter your email to create or restart your membership.",
      fem:"Email address",
      fst:">Get Started",
      fcall:"Questions? Call",
      fcall2:"000-800-919-1743",
      fli1:"FAQ",
      fli2:"Help Centre",
      fli3:"Account",
      fli4:"Media Centre",
      fli5:"Investor Relations",
      fli6:"Jobs",
      fli7:"Ways to Watch",
      fli8:"Terms of Use",
      fli9:"Privacy",
      fli10:"Cookie Preferences",
      fli11:"Corporate Information",
      fli12:"Contact Us",
      fli13:"Speed Test",
      fli14:"Legal Notices",
      fli15:"Only on Netflix",

      fnet:"Netflix India",
      fpara:"This page is protected by Google reCAPTCHA to ensure you're not a bot.",
      flink:"Learn more.",
      fenglish:"English",
      fhindi:"हिन्दी"
    },
    hindi: {
      signin: "साइन इन करें",
      Popularnow:"अभी लोकप्रिय",      
      plannow:"प्लान",
      reasontojoin:"शामिल होने की वजहें",
      faques:"FAQ",
      para1:"<b>अनलिमिटेड फ़िल्में, टीवी शो, और बहुत कुछ</b>",
      para2:"₹149 से शुरू होता है. कभी भी कैंसल करें.",
      para3:"देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
      email:"ईमेल एड्रेस",
      startnow:"शुरू करें",

      aaloo1:"ट्रेंडिंग नाव",

      aaloo2:"आपकी ज़रूरतों के मुताबिक प्लान",
      mob1:"मोबाइल",
      mob2:"480p",
      mob3:"अच्छी वीडियो क्वालिटी",
      mob4:"आपके फ़ोन या टैबलेट के लिए",
      mob5:"₹149 /महीना",

      basic1:"सबसे लोकप्रिय टाइटल",
      basic2:"बेसिक",
      basic3:"720p",
      basic4:"बढ़िया वीडियो क्वालिटी",
      basic5:"आपके फ़ोन, टैबलेट, लैपटॉप और टीवी के लिए",
      basic6:"₹199 /महीना",

      stand1:"स्टैंडर्ड",
      stand2:"1080p",
      stand3:"शानदार वीडियो क्वालिटी",
      stand4:"आपके फ़ोन, टैबलेट, लैपटॉप और टीवी के लिए",
      stand5:"₹499 /महीना",

      prem1:"प्रीमियम",
      prem2:"4K + HDR",
      prem3:"शानदार वीडियो क्वालिटी",
      prem4:"बेहतरीन साउंड (Spatial ऑडियो)",
      prem5:"आपके फ़ोन, टैबलेट, लैपटॉप और टीवी के लिए",
      prem6:"₹649 /महीना",

      aaloo3:"शामिल होने की ज़्यादा वजहें",
      mobile1:"अपने टीवी पर आनंद लें",
      mobile2:"स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.",

      basic21:"ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
      basic22:"अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.",
      
      standard1:"हर जगह देखें",
      standard2:"बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.",

      premium1:"बच्चों के लिए प्रोफ़ाइल बनाएं",
      premium2:"बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.",


      aaloo4:"अक्सर पूछे जाने वाले सवाल",
      head1:"Netflix क्या है?",
      box1:"Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.<br/> आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!",
      
      head2:"Netflix की कीमत कितनी है?",
      box2:"हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.",

      head3:"मैं कहां देख सकता हूं?",
      box3:"कहीं भी, कभी भी देखें. तुरंत देखने के लिए वेब पर netflix.com पर जाकर अपने Netflix अकाउंट से साइन इन करें. आप Netflix ऐप ऑफ़र करने वाले इंटरनेट से जुड़े किसी भी डिवाइस से साइन इन कर सकते हैं जैसे कि आपका पर्सनल कंप्यूटर या स्मार्ट टीवी, स्मार्ट फ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल.<br/> आप iOS या Android ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं.",
      
      head4:"मैं कैसे कैंसल करूं?",
      box4:"Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
      
      head5:"मैं Netflix पर क्या देख सकता/सकती हूं?",
      box5:"Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",

      head6:"क्या Netflix बच्चों के लिए ठीक है?",
      box6:"आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं. <br/>बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.",
     

      ftext:"देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
      fem:"ईमेल एड्रेस",
      fst:"शुरू करें",
      fcall:"कोई सवाल?",
      fcall2:"000-800-919-1743 पर कॉल करें",

      fli1:"FAQ",
      fli2:"सहायता केंद्र",
      fli3:"अकाउंट",
      fli4:"मीडिया केंद्र",
      fli5:"इंवेस्टर संबंध",
      fli6:"नौकरियां",
      fli7:"देखने के तरीके",
      fli8:"उपयोग की शर्तें",
      fli9:"प्रायवेसी",
      fli10:"कुकी प्रेफ़रेंस",
      fli11:"कॉरपोरेट जानकारी",
      fli12:"हमसे संपर्क करें",
      fli13:"स्पीड टेस्ट",
      fli14:"कानूनी सूचनाएं",
      fli15:"सिर्फ़ Netflix पर",
      fnet:"Netflix भारत",
      fpara:"यह पक्का करने के लिए कि आप बॉट नहीं हैं, यह पेज Google reCAPTCHA द्वारा सुरक्षित है.",
      flink:"और जानें.",

      fenglish:"हिन्दी",
      fhindi:"English"

    }
  };

document.getElementById("signin").textContent = translations[selectedLang].signin;
document.getElementById("Popularnow").textContent = translations[selectedLang].Popularnow;
document.getElementById("plannow").textContent = translations[selectedLang].plannow;
document.getElementById("reasontojoin").textContent = translations[selectedLang].reasontojoin;
document.getElementById("faques").textContent = translations[selectedLang].faques;

document.getElementById("para1").innerHTML = translations[selectedLang].para1;
document.getElementById("para2").textContent = translations[selectedLang].para2;
document.getElementById("para3").textContent = translations[selectedLang].para3;

document.getElementById("email").textContent = translations[selectedLang].email;
document.getElementById("startnow").textContent = translations[selectedLang].startnow;

document.getElementById("aaloo1").textContent = translations[selectedLang].aaloo1;
document.getElementById("aaloo2").textContent = translations[selectedLang].aaloo2;

document.getElementById("mob1").textContent = translations[selectedLang].mob1;
document.getElementById("mob2").textContent = translations[selectedLang].mob2;
document.getElementById("mob3").textContent = translations[selectedLang].mob3;
document.getElementById("mob4").textContent = translations[selectedLang].mob4;
document.getElementById("mob5").textContent = translations[selectedLang].mob5;


document.getElementById("basic1").textContent = translations[selectedLang].basic1;
document.getElementById("basic2").textContent = translations[selectedLang].basic2;
document.getElementById("basic3").textContent = translations[selectedLang].basic3;
document.getElementById("basic4").textContent = translations[selectedLang].basic4;
document.getElementById("basic5").textContent = translations[selectedLang].basic5;
document.getElementById("basic6").textContent = translations[selectedLang].basic6;


document.getElementById("stand1").textContent = translations[selectedLang].stand1;
document.getElementById("stand2").textContent = translations[selectedLang].stand2;
document.getElementById("stand3").textContent = translations[selectedLang].stand3;
document.getElementById("stand4").textContent = translations[selectedLang].stand4;
document.getElementById("stand5").textContent = translations[selectedLang].stand5;


document.getElementById("prem1").textContent = translations[selectedLang].prem1;
document.getElementById("prem2").textContent = translations[selectedLang].prem2;
document.getElementById("prem3").textContent = translations[selectedLang].prem3;
document.getElementById("prem4").textContent = translations[selectedLang].prem4;
document.getElementById("prem5").textContent = translations[selectedLang].prem5;
document.getElementById("prem6").textContent = translations[selectedLang].prem6;



document.getElementById("aaloo3").textContent = translations[selectedLang].aaloo3;

document.getElementById("mobile1").textContent = translations[selectedLang].mobile1;
document.getElementById("mobile2").textContent = translations[selectedLang].mobile2;

document.getElementById("basic21").textContent = translations[selectedLang].basic21;
document.getElementById("basic22").textContent = translations[selectedLang].basic22;

document.getElementById("standard1").textContent = translations[selectedLang].standard1;
document.getElementById("standard2").textContent = translations[selectedLang].standard2;

document.getElementById("premium1").textContent = translations[selectedLang].premium1;
document.getElementById("premium2").textContent = translations[selectedLang].premium2;



document.getElementById("aaloo4").textContent = translations[selectedLang].aaloo4;

document.getElementById("head1").textContent = translations[selectedLang].head1;
document.getElementById("box1").innerHTML = translations[selectedLang].box1;

document.getElementById("head2").textContent = translations[selectedLang].head2;
document.getElementById("box2").innerHTML = translations[selectedLang].box2;

document.getElementById("head3").textContent = translations[selectedLang].head3;
document.getElementById("box3").innerHTML = translations[selectedLang].box3;

document.getElementById("head4").textContent = translations[selectedLang].head4;
document.getElementById("box4").innerHTML = translations[selectedLang].box4;

document.getElementById("head5").textContent = translations[selectedLang].head5;
document.getElementById("box5").innerHTML = translations[selectedLang].box5;

document.getElementById("head6").textContent = translations[selectedLang].head6;
document.getElementById("box6").innerHTML = translations[selectedLang].box6;


document.getElementById("ftext").innerHTML = translations[selectedLang].ftext;

document.getElementById("fem").innerHTML = translations[selectedLang].fem;

document.getElementById("fst").innerHTML = translations[selectedLang].fst;

document.getElementById("fcall").innerHTML = translations[selectedLang].fcall;

document.getElementById("fcall2").innerHTML = translations[selectedLang].fcall2;

document.getElementById("fli1").textContent = translations[selectedLang].fli1;
document.getElementById("fli2").textContent = translations[selectedLang].fli2;
document.getElementById("fli3").textContent = translations[selectedLang].fli3;
document.getElementById("fli4").textContent = translations[selectedLang].fli4;
document.getElementById("fli5").textContent = translations[selectedLang].fli5;
document.getElementById("fli6").textContent = translations[selectedLang].fli6;
document.getElementById("fli7").textContent = translations[selectedLang].fli7;
document.getElementById("fli8").textContent = translations[selectedLang].fli8;
document.getElementById("fli9").textContent = translations[selectedLang].fli9;
document.getElementById("fli10").textContent = translations[selectedLang].fli10;
document.getElementById("fli11").textContent = translations[selectedLang].fli11;
document.getElementById("fli12").textContent = translations[selectedLang].fli12;
document.getElementById("fli13").textContent = translations[selectedLang].fli13;
document.getElementById("fli14").textContent = translations[selectedLang].fli14;
document.getElementById("fli15").textContent = translations[selectedLang].fli15;

document.getElementById("fnet").innerHTML = translations[selectedLang].fnet;

document.getElementById("fpara").innerHTML = translations[selectedLang].fpara;

document.getElementById("flink").innerHTML = translations[selectedLang].flink;

document.getElementById("fenglish").innerHTML = translations[selectedLang].fenglish;
document.getElementById("fhindi").innerHTML = translations[selectedLang].fhindi;

});
});


// });
// document.getElementById("arrow").addEventListener("click", function () {
//   document.getElementById("lang-select").focus(); // brings focus to select
//   document.getElementById("lang-select").click(); // attempts to open dropdown
// });