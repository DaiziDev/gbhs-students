const menu = document.querySelector("#menu");
const toggle = document.querySelector(".fa-bars");
const nav = document.querySelector(".small-screen");
const darkmood = document.querySelector(".dark-mood");
const moon = document.querySelector(".fa-moon");
const html = document.querySelector("html");
const navLinks = document.querySelectorAll('.small-screen a')

menu.addEventListener("click", function () {
  if (toggle.classList.contains("fa-bars")) {
    toggle.classList.remove("fa-bars");
    toggle.classList.add("fa-xmark");
    nav.classList.remove("hidden");
    nav.classList.add("nav-animation");
  } else {
    toggle.classList.remove("fa-xmark");
    toggle.classList.add("fa-bars");
    nav.classList.add("hidden");
    nav.classList.remove("nav-animation");
  }
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if menu is open
    if (!nav.classList.contains('hidden')) {
      // Close the menu
      toggle.classList.remove("fa-xmark");
      toggle.classList.add("fa-bars");
      nav.classList.add("hidden");
      nav.classList.remove("nav-animation");
    }
  });
});
darkmood.addEventListener("click", function () {
  if (moon.classList.contains("fa-moon")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    html.classList.add("dark-mode");
  } else {
    moon.classList.remove("fa-sun");
    moon.classList.add("fa-moon");
    html.classList.remove("dark-mode");
  }
});

const classmates = [
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139449/gwafnufmgfprbdacdo8t.jpg",
    name: "Amida Foche",
    paragraph:
      "Comes early to school as if she was in her house, do all assignment and never punished, too big to wash the class, love only her book just like her bench mate love trouble.",
    span: 'PS. "Mammy I swear" what will u swear with again.',
    age: 20,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139453/ckhxqtut86sntznoq5af.jpg",
    name: "Awa Bebe",
    paragraph:
      "Comes early to school as if she was in her house, do all assignment and never punished, too big to wash the class, love only her book just like her bench mate love trouble",
    span: 'PS. "Mammy I swear" ',
    age: 19,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139462/hm3nyuxldikixri67w7j.jpg",
    name: "Ibrahim Bahama",
    paragraph:
      "Le deuxieme bambu de la salle. Tu lui parle ca t'enerve seulement. tjr obliger de lever la tête. attend ta gow est courte",
    span: 'PS. "Mammy I swear" what will u swear with again.',
    age: 23,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139466/z090ytieadcdgvwcbc4u.jpg",
    name: "Brenda",
    paragraph:
      "Hard working like all the student.She was very smart, loves music and just like gracious very stubborn. Wish you the best in your plans and dreams take of that art boy u di understand na.",
    span: 'PS "Escuse i wish to ask that." always asking question".',
    age: 19,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139722/olralukrtfnblvjvfmre.jpg",
    name: "Farlancha Juska",
    paragraph:
      "This guys pijen don pass all level man di raper the thing pass tete i own.Enter middle year one do physics ok listen mr junior Bro just wishing you the best in your life different same goal",
    span: ' PS. "Amida j t aime" Menant tu la vois ou fou.',
    age: 24,
    location: "Buea",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139738/qu7af6eiykekndycfxrr.jpg",
    name: "Fifen Njimoun",
    paragraph:
      "Bambu numero 3 long comme si. tjr entren de courir derriere le ballon. Niveau intellectuel tres hot comme lui, Plutot doue en mes nulle au foot comme tout. Bro bonne chance pr tes reves",
    span: 'PS. "Mammy I swear" what will u swear with again.',
    age: 20,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139729/n2ke8hg66z75ufsosob5.jpg",
    name: "Fifen",
    paragraph:
      "Lui cst un nouveau donc pas grand chose a dire suis lui. Beacoup de respect devant ca sagessse. Il avais beacoup de connaissance et donner des super conseille. Donne toin a fond",
    span: 'PS. "Mammy I swear" what will u swear with again.',
    age: 20,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139744/t6vqgybczglupteccjmr.jpg",
    name: "Goddi",
    paragraph:
      "Gar no comment si je parle ca va pas finir;MR Goddi, L'entreprise des fille, L'homme de baff et iphone. Comme nous tous il a cest priorite et objectif. i just de ur side bro rich ou rien",
    span: 'PS. "is either we pass or the give us 3years',
    age: 20,
    location: "Buea",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139754/tmszm58rxegqaigiyabg.jpg",
    name: "Ndzi Gracious",
    paragraph:
      "Mr junior's wife Very stuborn too brillant student in class. Always attentive never absent and also good at giving us headech especially during physics class, wish you the best cc.",
    span: 'Ps: Please sir there was assignment" NIAM',
    age: 20,
    location: "Bamenda",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139775/b2ab22kf6kmw0pmkgefk.jpg",
    name: "Raye Joelle",
    paragraph:
      "Une fille petite et tetue comme tout.Bref suis le meme banc k sorelle c ki se resemble s'assemble.Presentement entren de construire son avenir avec rage.Je te sohaite juste le success dans tout cc",
    span: 'Ps: Please sir there was assignment" NIAM',
    age: 19,
    location: "Bafoussam",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139766/mglu1udnmumnbwmjs0tu.jpg",
    name: "Its Jeski",
    paragraph:
      "Na oanother short pikin this short and big the way i get power na. Muscle everywhere. Bro wish u the best may God touch your life ",
    span: 'PS. "On go joue nor"',
    age: 22,
    location: "Koutaba",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139788/r9we9gnp1aghruts0etp.jpg",
    name: "Pempememe Kabirou",
    paragraph:
      "All mighty pempeme having 5 on maths. chai massa this guy has just finish like soap. further math is easy did u pass it . ",
    span: 'PS. "The question is wrong that is why"',
    age: 23,
    location: "Bamenda",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139811/ev9qfbzyeyq3na0zug2r.jpg",
    name: "Njikam Larissa",
    paragraph:
      "La mannequin d notre salle elle est dabord zoukmiel cest pas la la blague. Ou depuis k ta passe le gce tes partir ou ooh. Auccune nouvelle mes peut importe pr toi aussi je te souhaite le bh",
    span: 'PS. "Tsuiip va labas"',
    age: 22,
    location: "Koutaba",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139818/kgcavgtrnkupw1lymdvv.jpg",
    name: "Lucien",
    paragraph:
      "Lucky Luc martha's brother very quite(sometimes).Friendly to everyone that realy deserve it.Have big project in life. Me i imagine him becoming a president. Hope u are happy no matter where u are bro wish the best.",
    span: 'PS. "T....."',
    age: 22,
    location: "Bafoussam",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139827/uz9zpsdlqz5dge0iekw6.jpg",
    name: "Martha",
    paragraph:
      "The skiny girls of the class very quite always on her bench. Sell her chin chin in a quite manner. Hopping everything is okay for you wish you a good husband",
    span: ' PS. "There is chichin ehh". To who are u selling the chinchin',
    age: 19,
    location: "????",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139848/urayix92zsk8pvfsxhzg.jpg",
    name: "Murielle",
    paragraph:
      "Notre bouteille a gas prefere tjr avec le cahier. Pas tres sociable. têtue plus plus.Quand elle se fache eh ah avec elle tout c kon dit suis les courte fille Valilder seulement Au final tre aimable",
    span: 'PS. "Suis pas courte ehh." Mama ta grandire!!',
    age: 19,
    location: "Je veux pas les pb",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139865/tqjyndlzj6cpogtz2mym.jpg",
    name: "Nambu",
    paragraph:
      "L'eleve la plus donn de notre salle. Cetait jar les surveillant ggeneraux ne la regardes plus.Meme Mr tem etait depasser. en plein millieu de l'annee le prof de physic dmnde prkw cst la premiere fois kil la vois. PS",
    span: 'PS. "Force k j fait cours na". FINALY SUCCEEDED.',
    age: 20,
    location: "Yaounde",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139882/k8cytnfrlnljduwusasl.jpg",
    name: "Papillombre",
    paragraph:
      "Avec toi gar on na rien compris surtout ta taille ki a m iraculeusement pousser la. Wishing to be one day your patient fight for ur dreams.",
    span: 'PS. "Ya match au day" Joue encore j vois',
    age: 20,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139895/h2tiebf0y9li4pxk7mkp.jpg",
    name: "PoPaul",
    paragraph:
      "Mr Pastor he is the only that added S5 the series of uppsixth composed of the subject he wants.He has a big self confident.",
    span: 'PS. "Es k cest dure." Bro la vie la est dure',
    age: 19,
    location: "Bafoussam",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139901/wjfsjyorq1k3gyyn3s0k.jpg",
    name: "King Promise",
    paragraph:
      "This one no comment better ma no talk. Especially your profile pics this day.Wish you the best bro focus on the dreams",
    span: ' PS. "Mr OOOOOOOOOOO Okay"',
    age: 21,
    location: "Bamenda (Nsoh)",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139912/wxojwn9kmd0ukwhdhnjz.jpg",
    name: "Le Sage",
    paragraph:
      "Come son nom le dit cest le sage.Juste le plus sage de salle. Il a buy cest livre k a deux semaine de l'exam trop fort",
    span: 'PS. "Je boche k les gce papaers" Gar ca a paye.',
    age: 19,
    location: "Bamenda",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139921/krnzjj21s4kd80iiunjh.jpg",
    name: "Chef Sangou",
    paragraph:
      "Just a legend never in class. Mathematics best friend, after football. Normally with all those his muscle. Takes care of all his friends but turns easily red ",
    span: 'PS."Allah si mon livre sort pas personne ne sort! Ferme la porte la"',
    age: 25,
    location: "Foumban",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139929/v022ruabi58pujuanahx.jpg",
    name: "Shekina",
    paragraph:
      "La petite blanche de la salle avec ca taille et cest yeux de chinoise. Tu marche tu ne vois meme pas. Comme cest dabord une cachotier la. Realise nos réve notre seule objective",
    span: ' PS. "Mafffff"',
    age: 20,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139936/rowujqh0c3uzfrrslwus.jpg",
    name: "King Steven",
    paragraph:
      "Celui pr ki la boche na pas de secret meme si cest avec la lune on va sauf k boche. Rich ou rien",
    span: '"Les gars on descend."On descend ou menant',
    age: 21,
    location: "Yaoundé",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139945/pgttzmbruzeonn2ndhif.jpg",
    name: "Silvaine",
    paragraph:
      "La star de notre classe tout sauf un boy calme. Regarde pas ca tete innocent la cest un dangereux. Fan d'habillement menant il ressemble a une star . Bro BH a toi aussi",
    span: ' PS. "Mr OOOOOOOOOOO Okay"',
    age: 21,
    location: "Bamenda (Nsoh)",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139959/wpjdp1tsi3su8ublhcqe.jpg",
    name: "Sorelle",
    paragraph:
      "Une fille petite discrete et tetue comme tout. Le jar de peronne a ki on parle une fois par ans.Pourtant tres aimable et attentioner une nouvelle vie comme pour tout le monde commence pr toi",
    span: 'PS "........."',
    age: 21,
    location: "Yaounde",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139973/xn30s9ghvrehkwi70odp.jpg",
    name: "Tanui Louis",
    paragraph:
      "Murielle's brothers the only subject way get sense na biology. Brna boy best friend. Bro hopping u realised or realising all your dreams",
    span: 'PS. "Ya match au day" menant tu dit ca a ki?',
    age: 21,
    location: "Bamenda (Nsoh)",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },

  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139981/pao5kst7vxlsniszbdtu.jpg",
    name: "Zenou Company",
    paragraph:
      "Yaourt.com notre restaurant en salle yaourt crocket Menant il verse l'eau dans les yaourt la juska. tu falla les dos nor es k on pond ca.Menant tu bring plus no way.",
    span: 'PS" Yo ta bring les yaourt? Je vient avec demian',
    age: 24,
    location: "Bamenda (Nsoh)",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  {
    img: "https://res.cloudinary.com/dlhevtzle/image/upload/v1760139760/gg1iojdu1erk61sd3mlb.jpg",
    name: "Gre Gre",
    paragraph:
      "That lady if food get finish in cameroon should will provide for me. Decided to chase her dream and badly pationated with what she does. Wishing you the best",
    span: "Ps: Dimitris stopam",
    age: 20,
    location: "Unknown",
    contactlink:
      "https://wa.me/237695703061?text=Hello%20I%20want%20to%20contact%20you",
  },
  // Add more sample classmates if you'd like
];

// Select the container
const container = document.getElementById("classmates-container");

// Generate and insert classmates
classmates.forEach((person) => {
  // Create main classmate div
  const classmateDiv = document.createElement("div");
  classmateDiv.className = "classmate";

  // Create inner box div
  const boxDiv = document.createElement("div");
  boxDiv.className = "boxDiv";

  // Image container
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  // Image element
  const img = document.createElement("img");
  img.className = "classmate-img";
  img.src = person.img;
  img.alt = person.name;

  // Append image to container
  imgContainer.appendChild(img);

  // Name
  const nameDiv = document.createElement("div");
  nameDiv.className = "classmate-name";
  nameDiv.textContent = person.name;

  // Paragraph
  const paragraphDiv = document.createElement("div");
  paragraphDiv.className = "classmate-text";
  paragraphDiv.innerHTML = person.paragraph;

  // Span
  const spanEl = document.createElement("h2");
  spanEl.className = "classmate-span";
  spanEl.innerHTML = `<br> ${person.span}`;

  // Append span to paragraph
  paragraphDiv.appendChild(spanEl);

  // Info section
  const infoDiv = document.createElement("div");
  infoDiv.className = "classmate-info";

  const ageDiv = document.createElement("div");
  ageDiv.textContent = `Age: ${person.age}`;

  const locationDiv = document.createElement("div");
  locationDiv.textContent = `Location: ${person.location}`;

  infoDiv.appendChild(ageDiv);
  infoDiv.appendChild(locationDiv);

  // Contact link
  const contactLink = document.createElement("a");
  contactLink.className = "classmate-link";
  contactLink.href = person.contactlink;
  contactLink.target = "_blank";
  contactLink.rel = "noopener noreferrer";
  contactLink.textContent = "Contact";

  // Assemble the inner box
  boxDiv.appendChild(imgContainer);
  boxDiv.appendChild(nameDiv);
  boxDiv.appendChild(paragraphDiv);
  boxDiv.appendChild(infoDiv);
  boxDiv.appendChild(contactLink);

  // Append inner box to main classmate div
  classmateDiv.appendChild(boxDiv);

  // Append to container
  container.appendChild(classmateDiv);
});

// search engine
const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  resultContainer.innerHTML = " ";

  if (query === "") {
    return;
  }
  const found = classmates.find((c) => c.name.toLowerCase().includes(query));
  if (found) {
    resultContainer.innerHTML = `
      <div class="max-w-xl border p-4 rounded shadow-lg flex flex-col md:flex-row gap-4 bg-[var(--bg-color)] text-[var(--primary)]">
         <img src="${found.img}" class="w-40 h-40 object-cover rounded" />
         <div>
            <h2 class="text-2xl font-bold mb-2">${found.name}</h2>
            <p class="mb-2">${found.paragraph}</p>
            <p class="mb-1"><strong>Age:</strong> ${found.age}</p>
            <p class="mb-1"><strong>Location:</strong> ${found.location}</p>
            <a href="${found.contactlink}" target="_blank" class="text-blue-500 underline">Contact</a>
            <p class="mt-2"><em>${found.span}</em></p>
          </div>
      </div>
    `;
  } else {
    resultContainer.innerHTML = `<p class="text-center text-gray-600">No classmate found with that name.</p>`;
  }
});
