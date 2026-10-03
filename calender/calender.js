// ================================
// Current Date
// ================================

const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");

let currentDate = new Date();


// Month Names

const months = [

"January","February","March","April","May","June",

"July","August","September","October","November","December"

];


// ================================
// Memories
// ================================

const memories = {




    "2025-08-05": {

        title: "The Name That Caught My Attention",

        story: `This was the first day of our class during the induction program. Simranjeet Mam was taking attendance, but my attention wasn't really on my own attendance. It was on your name, because when the list of students came, I saw the name "Krish". From that moment, I was waiting to see who this person was.

Then came the day when, after my attendance was called, I heard your voice giving your attendance. I was sitting on the side of the row, and you were sitting in the middle of the row. Only I know how hard I tried to see you from between all the boys, but still, I couldn't see your face because you were sitting right in the middle.

After that, I got to know one thing — that you were going to be regular in class. So I just said to myself, "It's okay, hor vi mauke aun ge." There will be more chances to see you.
`

    },


    "2025-08-15": {

        title: "The Group That Changed Everything",

        story: `Jadon apk shodi mam made the groups, I was initially saying mera group tere nal na bane.

But the reason wasn't that I didn't want to work with you or because I didn't want to follow your orders. It was because Mehak huni always used to compare us, like "tera te mera name ikathe," and all that. Ohna de karke hi I said I didn't want my group with you.

But jadon mam ne roll number 1 group vich pa ditta, deep down I was actually happy. I was like, "Vadia hoya, changa hoya," because I wanted to work with you and explore your nature.

But then, after the lecture, jadon sare bache ik duje de numbers exchange kar rahe si, you didn't ask for my number. Us time main sochya, "Hun ta menu bahut aukha hovega. 🤧"

Honestly, if our groups hadn't been together, it would've been okay. But us moment te menu lagya that you're really egoistic.`

    },
    "2025-08-22": {

        title: "The First PPT Battle",

        story: `Here we started working on the PPT, and you had already made 2-3 slides. At that time, I wasn't really supporting you, and teri besti vi kar rahi c ke tera creativity taste bahut kharab hai 😂.

But still, I don't understand how you managed to make me fall for you even after all this. 🤭

I started suggesting you changes and telling you more about the features that could make the PPT better. I still remember when you made some changes, I used to insult you a little and tease you, but when I made changes, you used to appreciate them and adore my work.

Those small moments — the teasing, the arguments, the suggestions, and the way we worked together — slowly became some of my favourite memories.
`

    },
    "2025-08-26": {

        title: "The CML Beginning",

        story: `You introduced me to the CML seniors so that I could work as an anchor. I still doubt that you actually wanted me to work with you 🤔.

That day, Harsimran and everyone else were calling me and asking where I was, but I was sitting with you in the auditorium, in the first row. It felt so nice. You were making posters for CML and showing them to me, taking my suggestions and asking for my opinions.

Deep down, I was just thinking, "Why me? Mere layi why are you doing this?"

After that, we started being together in almost all the CML events and activities. Slowly, those small moments became some really special memories.
`

    },


    "2025-09-14": {

        title: "My First Chandol Ride, Shared With You",

        story: `This was the day when I went on a **Chandol ride** for the first time. I still remember how excited I was, and I immediately shared some of the photos with you.

I told you that it was my first time experiencing this ride, and I had specially made videos and clicked pictures so that I could show them to you.

Even though I was scared while sitting up there on that *chandol*, I still took photos and recorded videos. Somewhere in my mind, I just wanted to capture that moment and share it with you.

It was not just about the ride; it was about how I wanted you to be a part of even my small, new experiences. 
 `
    },
    "2025-09-15": {

        title: "The Day I Thought Was Goodbye",

        story: `Finally, the day came — the PPT day.

I still remember, I got ready like I was going to some official event. I don't know why, maybe somewhere in my mind I felt like this might be the last day we would spend time together. Because after 15th September, we would not really have any reason to meet or sit together like this.

I wore a red dress with small sleeves and a black lower. I even wore earrings and a necklace, both of which I had bought from the mela.

Before the PPT presentation, we started practicing. I still remember that was the first time you touched me. Later, I asked you about it, and you said you didn't remember. But I know it happened because I felt someone's touch, and that someone was you. At that moment, I became a little awkward and didn't know how to react.

Then came the moment of giving the PPT. I sat beside you on the bench — the first time sitting with you in class. And maybe even after almost 1 year together, till now (1 Aug 2026), we have never again sat on the same desk in front of the class.

That day was really special. Somewhere in my mind, I had this thought that maybe this was the end — the end of spending time with you in CML, making excuses and telling small lies to friends just to spend a little more time together.

But that day became one of those memories that I will always remember. 

 `
    },
    "2025-09-17": {

        title: "The Little Excitement Before Class",

        story: `We used to have mentoring class in the MBA block, and this day I came into the class first. I was just waiting for you to come.

Jadon vi main feel kardi si ki koi door ton enter ho reha hai, I used to secretly look and check if it was you. From that time, I started getting excited to go to the class because that was the only place where I could see you. After class, it wasn't really possible to meet you.

Then when you finally came into the class, I felt so relieved because it was already getting late. Mere mind vich eh chal reha si ki "je tu ajj na aaya ta?" and so many other questions were going on in my head.

I even thought of calling you and saying, "Aa ja class vich," but I didn't. I just waited quietly and felt happy when you finally came. 
 `
    },
    "2025-09-18": {

        title: "The Little Bird We Cared About",

        story: `This was the day when a bird got injured at my house. I know you remember this, and I also know how much I used to bother you about it. 🤭

Till the last breath of that bird, I kept giving you updates about it every single day. Har din main tenu usdi information dindi si, and you always listened to me patiently.

Sometimes, you even asked about its condition yourself and took updates about how it was doing.

It was just a small thing, but the way you listened, cared, and became a part of that little journey made it a special memory for me. ❤️

 `
    },
    
    "2025-09-27": {

        title: "The Gift I Never Gave",

        story: `It was your birthday, and I still remember that our MST exams were going on. Before the paper started, you came late to the class, so I didn't even get a chance to wish you face to face.

After the exam, you left without meeting me. Waise vi us time assi college vich milde nahi si, so I couldn't even stop you.

I had bought a small keychain for you as a birthday gift, but I never got the chance to give it to you. Te honestly, kive dendi? Bas ik month hi hoya si tenu jande nu. How could I suddenly give a gift to a boy? So I just acted normal and kept it with me.

Later, I got to know that you don't celebrate your birthday. I still insisted that you should at least go out for dinner with your family. Mainu pata si teri papa te dadi nal zyada nahi bandi, but still, you went... just because I told you to.

I don't know if you ever realized it, but that meant a lot to me. It made me so happy knowing that you listened to me. That birthday became one of my favourite memories, not because I gave you a gift... but because, in a small way, I got to be a part of your day.

I love you. ❤️

 `
    }, 

    "2025-09-29": {

        title: "The Day Our Names Were Called Together",

        story: `After the MST, the results were announced in G9 room. Pragya Mam called out two names — first yours, **24 out of 24**, and then mine, **23 out of 24**.

Honestly, menu apne marks ton zyada khushi tere marks di hoi si. ❤️ It felt so nice that Mam mentioned both our names in front of the whole class.

After the class, when we went outside, you suddenly asked me for a party. 🤭 I was like, "Number ta tere zyada aaye ne, te party mere ton mang reha?" It was so funny.

Maybe that was one of those little moments when I got even more confused about my feelings for you. I didn't know why, but every small thing you did started making a place in my heart.

 `
    },
    "2025-10-03": {

        title: "The Award Beyond The Award",

        story: `This was the day when I got the award for my GitHub report in the auditorium.

I still remember receiving your congratulation message. The way you texted me, the emojis you used, and the happiness in your message... honestly, it felt like the best award I received that day. ❤️

The smile on my face doubled after reading your message. Your appreciation meant so much more to me than you probably ever realized.

After reading your message, I turned around to look for you. Main pichhe mud ke vekheya ki tu kithe hai, and then I saw you... looking at me.

Uff... that was one of the best feelings ever. 🥹 I don't know if you remember that moment, but I'll never forget it. The way you appreciated me and the way our eyes met at that moment made my achievement feel even more special.

 `
    },
    "2025-10-09": {

        title: "The Day I Quietly Worried About You",

        story: `It was the BIS Walkathon day. That was also the day I got to know that you really don't like being in the sun and that sunlight irritates you.

It was so hot that day, and honestly, I kept looking around again and again just to see where you were. Every few minutes, my eyes would automatically start searching for you.

Jadon vi tu nazar aunda si, I used to feel so relieved. Bas mere mind vich ehi hunda si, "Chalo, sukar hai... eh ethe hi hai. Ghare nahi gaya mera fuggu." 🤭❤️

You probably had no idea, but I kept checking if you were okay because I knew how much the heat was bothering you.

It was just a walkathon for everyone else, but for me, it became another memory of quietly caring about you without even telling you.

 `
    },
    "2025-10-10": {

        title: "The Distance Between Us",

        story: `I still remember this day. There was an **RC Cars competition**, and I got to know that you were there with the CML seniors. Lavaya was there too, so I also went.

I was standing under a tree, quietly watching from a distance. Then I saw you taking out your handkerchief from your bag, removing your specs, and trying to clean your face. It was so sunny and hot, and I could tell you were feeling uncomfortable.

Us moment, I really felt like coming over to you because there wasn't anyone else around you. But I didn't.

Mere mind vich bahut saare thoughts chal rahe si... *What if you don't want me around?* *Main jaake ki gal karaangi?* *Main hi kyon java? Tu vi ta aa sakda si.* And then another thought came... *Pata nahi tu menu vekheya vi hovega ya nahi.*

So I just stayed there, standing under that tree, quietly looking at you. Sometimes, I think the moments where I said nothing were the ones that spoke the loudest. ❤️

 `
    },
    "2025-10-27": {

        title: "The Keyboard Scare",

        story: `This was the day when I got some work for ITian, and you were like, "Tu CML office vich baith ke kar la." I said, "Okay," and assi dono CML office chale gaye.

We switched on the screen, started doing our work, and at the same time, gappan vi marde rahe. Everything was going perfectly until we started passing the keyboard to each other... and suddenly, **the keyboard fell on the floor.** 😭

Oho... I got so shocked! At first, I laughed, but the very next second I was thinking, *"Hun khus na ho gaya hove."* I pressed a key, but nothing happened.

Us time mera face hi sab kuch explain kar reha si. I was so scared because I had never broken or damaged anything like that before. Upar ton, assi CML office vich ki kar rahe si, usda vi koi proper justification nahi si. 😭 Mera face pura red ho gaya si.

Then I randomly pressed another key... and suddenly it started working again.

Uff... the relief on my face that moment! 😭❤️

And then, I still remember how we both burst out laughing. Just five minutes earlier we were almost panicking, and the next moment assi dhandian nikal ke hass rahe si, bilkul kamlia vang.

Looking back, it was such a small incident, but somehow it became one of those memories that still makes me smile. ❤️

 `
    },
    "2025-10-30": {

        title: "The Apex Fair Without You",

        story: `It was the **Apex Fair**, and you didn't come that day. Honestly, I missed you... like **really, really missed you.** ❤️

I kept sending you photos and giving you updates about everything that was happening—about me, the event, and all the little moments—because somewhere I wanted you to feel like you were there with me.

Deep down, I just kept wishing, *"Kaash tu mere nal hunda."*

At the same time, it was a really busy day. Gurleen was there, Mehak da stall laga hoya si, and I had duties for both **FM** and **ITian**. Everything was such a mess, and I was running from one place to another.

Sometimes I think... even if you had come, I probably wouldn't have been able to give you much time because of all the work. Te honestly, eh soch ke vi menu bahut kharab lagda. I wanted you to be there, but I also knew I wouldn't have been able to be with you the way I wanted.

Still, the whole day felt incomplete because you weren't there. No matter how much fun the event was, I kept feeling that someone important was missing. ❤️

 `
    },
    "2025-11-15": {

        title: "The Hackanout Without You",

        story: `It was you who wanted to go to **Hackanout**, but in the end, I was the one who got the duty there.

Honestly, I felt really alone those two days. I kept thinking that if you had been there, those days would have been so much more fun. ❤️

Main inni lonely feel kar rahi si ki baar baar apna phone check kardi si, and I was texting you almost all the time. I even kept sending you pictures of my lunch just to tease you, *fuggu*. 🤭

Even though there were so many people around, I still felt like someone important was missing. I kept imagining how different those two days would have been if you had been there with me.

Now I just have one wish... next time there's a Hackanout duty, or even if we just go to Hackanout someday, I hope I'm there with you instead. ❤️

 `
    },
    "2026-01-14": {

        title: "workshop",

        story: `
        The new semester began. Here I started to sit with u and w8 for u in the electrical workshop. I used to seek u when I used to work, always keeping an eye on u — what are u doing, gossiping with u, sitting beside u.

When 1st time I sat beside u, jadon sir ne sarea nu bulaea c, it was the very 1st time we sat ik duje de nal.

There, mein and Karan used to come jldi and workshop vich bhaith jande c. And I used to w8 for u, ki tu kio nhi aea. I used to call u and ask, kither reh gya?

After that, sham vali workshop, we used to go to library ikathe. Even after doing workshop for 2 hr, still apa to spend time chale jande c library.

Bas workshop khatam hon ton baad vi apa nu hor time ikathe spend karna hunda c, so library chale jande c. ❤️
 
 `
    },
    "2025-11-17": {

        title: "CHESS TRIAL ALONE ",

        story: `so this day i remeber i gone to give chess trial and u were at home . and i lose in the trial . and somthgin happend there . u remeber gurjot nu mein smile pass kardi hundi c jugadjot smj kar . after coming to home i told u abt this senaio u said me k tenu kio nhi bulaya mein apne nal whne i was aloen casue there gurjot was teasing me like kise nal gal karke when mein har gyi c . after that in the chat u said k menu ikale nhi jana chida u were saying as a frnd but i better knwo why u were saying like that . u said " ikale na ghuma kar college vich gaa pa andi ". i love u meri jaan i know tenu is gal da dar c k i used to be alone and koi munda sarat na kare but i know fuga eve koi nhi kare gya if kare gya i think i need to see how to handle it . 
 `
    },
    "2025-11-18": {

        title: "CHESS TRIAL WITH U  ",

        story: `this is the next day i texted u that i am in sports complex and remind u k u said u also wana give trial . after that i started playing i thought u would not come but after the trial i saw mere pishe it was u and filming me . really that was kent moment . to see piche when u came aloen and see k someone is there who make u feel special and really after that apa gappa marde when ja rahe c uf raste vich menu aunti mil gyi c . then i get like awkard really kive di feeling c cant tell .
 `
    }, 
    "2025-11-20": {
        title: "!st time i said NO",
        story: `fuga ji 1st i wana say that i am really really sorry about that .
        1st time u asked me somthing hak de nal and i said no . u wanted to handover some papers i was in event itian de koi and didnt saw your message , then same day u ask me to be with u in pragya mam de office cause u dint bring your assignment but i didth came casue mein just us building vicho ae c and just now gate de kole vaje ground vich bhauthi c so 1st mere nal frnds c 2nd bhaut dur c rasta 
        but if u now as me for meri jaan i would give u that easily mere fugu 

        `
    }, 
    "2026-01-22": {
        title: "surprise",
        story: `i remeber u put choclate inside mere bag de bina menu dase oh v 1st tiem and when i was abt to sleep at night u sadi tu khsu payia hai mere bag vich and i see that and really i got so happy i like these kind of small surprices.
        `
    }, 
    "2026-01-29": {
        title: "itian event",
        story: `fugu meri duty c in thsi event remeber explain like i am 5 and u were participant it was nice fuga u did bhaut kent fugu and i only voted for u hor kise de layi i dint vote really i know u think tere layi mein nhi kita vote but eve nhi hai meri jaan
        .
        `
    }, 
    "2026-02-01": {
        title: "indoor stadium",
        story: `fuga it was the day when i spend 1st time time with u outside of the college oh v pura din swere papa sadh gye and i saw u really kent kent lag reha c tu i saw u and i was like krish hi hai ehe na ina kent lag reha c i saw u in pent for the 1st time and the jacket idk what that call and apa msti v kiti dova ne other all day thak v gye . and last te maggi we had i know meri vali maggi vich jada masale c where teri maggi fiki c really fiki c oho fuga then 1st time i saw tere pishe on activa really fuga that feeling was kent i wanted tenu pakadka pisho as tu break v mar reha c vich vich i was also thinking tu jan kar ta nhi mar rhe aso that i will hug u 🤧 i knw main jada filmy ho rahi but i felt that and that momnet when we had choclate in that raat nu also fuga us time raat nu tere nal on activa thandi hava uf that feeling then u w8ing for mere parents kent u really do care abt me i love u and that moment when tu peri hath lagae papa muma de i was like ehe now impress karke hi jave gya 🤣. fuga jiha that day was best really.
        `
    }, 
    "2026-02-11": {
        title: "1st time we bunk the class(show: tikta 2 le lavi)",
        story: `i remeber fuga randeep mam di class c apa show vekhna c so apa bunk kiti class and mein 1st time girls nu mana kita to be with them and u get kurkure and apa show vekhia c . and we found out k randeep mam v show vich hi bhaithe c 🤣. and i told u k karan v apni hi row vich bhaitha and u really got uncomfortable . maza a gya c 
        `
    }, 
    "2026-02-20": {
        title: "i left u for the 1st time ",
        story: `gurleen menu milan ayi c and apa libray vich bhaithe c and mein 30 mint keh kar  1 hr laga kar ae c i am really sorry for that meri jaan but i can tell i was in rush k mein jldi good bye keh dava and bas tere kole a java i wanted tenu ikala na sadha and tenu feel na hove but fugu tusi menu nhi sunande that i left u but i do mention and tanne mardi fugu cause i cant be dur tere tho thodi der de layi v i love u so much meri jaan. sorry again 
        `
    }, 
    "2026-03-02": {
        title: "Truffle pastry",
        story: `fuga u got truffle pastry for me specialy even oho mehngi andi hai still u got and ikale nhi khadi still fuga menu pastry nhi pasand i am sorry mein nhi khadi meri jaan but it is good point for u when after marrige tusi pastry ja cake le kar avo gye 1st u will bring pastry so piase ghat barbadh hon ge 
        `
    }, 
    "2026-01-28": {
        title: "u made video of mine",
        story: `fugu u recently got i phone here and u start making meria videos and photes as i said u ki menu vadia lagda so tu meri workshop vich welding karde di video bana liti and tenu sir bolan lag gye c then we gone to sport complex val and there i made teri vidoe when tu nhi banvana cha reha c 
        `
    },
    "2026-03-03": {
        title: "before anad utsav",
        story: `fugu it was before holi and we were seeing people around us holi vich rang nal lath path mera v jee c tere rang lagva but i was afriad cause if mein lagae and tenu na pasand hoea so nhi lagaea . and apa open air stadium gye c and we click pitures there and apa dova ne v ik pic liti c i got nervous that time cause tu ikdum front camera khol lita c . but mere vich ini himat na hundi front camera khol kar dova di photo lendi .
        and fuga u cliked meria photes that i posted on insta thx for that meri jaan.

        `
    },
    "2026-03-05": {
        title: "1st day of anad utsav",
        story: `fugu mein curl pa kar tyar ho kar ae c and i was not looking good and i feel it but apa golgappe khade and made that video "dekho dekho muje sod na dena " remember but never edited that with that tune. fugu u were looking like a gentleman really kent . and we really didnt saw the event like apa ta bahar hi c with each other dangar jahe college valeia ne boundaries lagaea c bonge .
        `
    },
    "2026-03-06": {
        title: "2nd day of anad utsav",
        story: `i was looking good last day nalo and u were looking really kent in that white shirt aryan di . fugu i cant believe apa 40 rs da dosa khada c and dahi bhale and all kent c fugua i love u so much . that evet was nice eventhough mein event nhi vekhia cause menu tere nal rehna c still it was really good.
        `
    },
    "2026-03-30": {
        title: "birthday celebration",
        story: `Fugu really u made the day special by bringing those gifts and that kiss really it means alot to me and thx for making that video for me jo i wanted fugu i just told k i want eve di video banani and u made it thx so much meri jaan . fugu mein ta just mention kita c k menu candle eve di chaidi and u bought that thx meri jaan . and the bestest gift your kiss really bestest birthday c mera .
        `
    },
    "2026-04-01": {
        title: "Birthday",
        story: `fugu biji got died that day but we still gone to gurudwara and matha teka i was with u that birthday it really chnaged mera mood nhi ta mein manana nhi c apna birthday. then we spent the whole day together eat chiji and all u really made my day speaicl even thought vadia din nhi c oho still and u really console me . 
        `
    },
    "2026-04-09": {
        title: "The rainbow",
        story: `Fuga on the way to home u took photo of the rainbow and snd me and told me to see the rainbow i was feeling it nromal but when muma saw the rainbow and call papa and kiha k vekho rainbow he felt good and snd the video odro di rainbow di and muma snd photo edro di and u snd me from your view rainbow di phtoto then 1st time i felt excited to see the rainbow really u are treating as a husband treat his wife thx meri jaan i love u .
        `
    },
    "2026-04-10": {
        title: "Party to girls",
        story: `fuga we kissed in the mba and i gone to give party to the girls from then to till now we have not gone with them it is september fugu just cause i wana be with u and like to be with u i am not blaming u i am telling u that much i love u and for u i can even die i love u so much.
        `
    },
    "2026-04-12": {
        title: "2nd day of ambit youth parliment (sunday)",
        story: `Fuga we spent whole sunday together and had fun doing kisses secretly and got certificate at last.
        `
    },"2026-04-21": {
        title: "1st day of ambit youth parliment (saturday)",
        story: `Did duty in the college spend time together had lunch free da. 
        `
    },
    "2026-04-03": {
        title: "Cse conference ",
        story: `got free food got certificate did duty spend time and i saw your shaved head and really u were not looking good in that hairstyle but still i love to kiss u even tough i only kissed u one day with that hairstyle after that i kissed u for months in that hairstyle i love u soo much meri jaan even after marrige u got bald this implies i would still kiss u .
        `
    },
    "2026-04-02": {
        title: "Got caught kissing",
        story: `fugu i cant belive just a day after we kissed we got caught we were really not mature fugu but u choped your hair i was really sad cause of me u have to do that eventough u liked your hairstyle and u got to chop your hair only cause of out immaturity. it was the only wrong thing which happned.
        `
    },
    "2026-04-15": {
        title: "got bimar",
        story: `fuga i got bimar and got fainted in the hospital and u had to live without me for 2 days . but i was really missing u and getting more and more weak so i wanted to meet u and it was really caring that u bought juice for me each day it was really thoughtfull. 
        `
    },
    "2026-05-01": {
        title: "exam month/stress cause of pregnacy",
        story: `Fugu maybe it was final exam month i dont have enough photes or memories of this month .
       <br> we were really really stressed abt the periods cant also exmas stress and all delayed periods and got more stress.`
    },
    "2026-07-15": {
        title: "Anchoring together",
        story: `fuga we did anchoring for a seminar in tcc and harsimran made a video and wrote love bird on it that was really kent.
        `
    },
    "2026-06-01": {
        title: "Traning month",
        story: `fuga it was training month we do attend training for 4 hr then spend time in library or washroom 🤧.
        `
    },
    "2026-07-25": {
        title: "U got me a nacklace",
        story: `fuga it was really a nice gift i know i didnt gave u good reaction but i love that gift of yours . i knwo i said i wanted that braclate only but i feel this is now more preacoius then that cause the thing gifted by u is alot precious then a random gift.
        `
    },
    "2026-08-01": {
        title: "Hectic month",
        story: `Fuga 3rd semster 2nd year hectic . we didnt get much tiem together i knwo it was really hard for u i would say it is really hard . idk abt u but it is hard for me cause i needed same abt of time with u which i used to get with u before still i feel alone when i used not to get tiem with u i miss u alot +
        `
    },
    "2026-05-19": {
        title: "NO light in your home ",
        story: `fuga u came to college cause u were irritated bacaues of the light and i also told liw to parents and came collge for u u slept there we spend time it was really good to se u sleeping we were in the artitecure fro the whole day spend alot time .
        `
    },
    "2026-05-20": {
        title: "Bunty di delivery",
        story: `that boy was really really cute when u gone after a week ohna de kole and u clicked photo with that cute baby i can say that babay was not looking ina cute jina mera baby was looking cute awww kent lag reha c fugu tu. but sachi that time we were afraid of our pregnacy and it was really a stressful time i cant tell roj roj chinta stress and upero paper chal rahe c 
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    },
    "2026-04-21": {
        title: "",
        story: `
        `
    }
    

};



// ================================
// Render Calendar
// ================================

function renderCalendar(){

calendarDays.innerHTML="";

let year=currentDate.getFullYear();

let month=currentDate.getMonth();

monthYear.innerHTML=`${months[month]} ${year}`;


// first weekday

let firstDay=new Date(year,month,1).getDay();


// total days

let totalDays=new Date(year,month+1,0).getDate();


// empty boxes

for(let i=0;i<firstDay;i++){

let empty=document.createElement("div");

empty.classList.add("empty");

calendarDays.appendChild(empty);

}


// dates

for(let day=1;day<=totalDays;day++){

let box=document.createElement("div");

box.classList.add("day");

box.innerHTML=day;

let key=`${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;


// memory day

if(memories[key]){

box.classList.add("memory-day");

}


// click

box.addEventListener("click",()=>{

selectDate(key,box);

});

calendarDays.appendChild(box);

}

}

renderCalendar();


// ================================
// Previous Month
// ================================

document.getElementById("prev-month").onclick=()=>{

currentDate.setMonth(currentDate.getMonth()-1);

renderCalendar();

};


// ================================
// Next Month
// ================================

document.getElementById("next-month").onclick=()=>{

currentDate.setMonth(currentDate.getMonth()+1);

renderCalendar();

};


// ================================
// Select Date
// ================================

function selectDate(key,element){

document.querySelectorAll(".day").forEach(day=>{

day.classList.remove("selected");

});

element.classList.add("selected");

const title=document.getElementById("memory-title");

const story=document.getElementById("memory-story");

const quote=document.getElementById("love-quote");

const date=document.getElementById("selected-date");

date.innerHTML=key;

if(memories[key]){

title.innerHTML=memories[key].title;

story.innerHTML=memories[key].story;

quote.innerHTML=memories[key].quote;

}else{

title.innerHTML="No Memory Yet 💕";

story.innerHTML="One day this date might become another beautiful memory.";

quote.innerHTML="Every day with you is special.";

}

}
