const asabenehChallenges2022 = {
    description: 'Asabeneh Yetayeh challenges in',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2022,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator anPythonTitle creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of python',
        topics: [
          'python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }

  document.body.style.fontFamily = 'Montserrat'

  let wrapper = document.querySelector('.wrapper')
  wrapper.style.display = 'flex'
  wrapper.style.alignItems = 'center'
  wrapper.style.justifyContent = 'space-between'
  wrapper.style.flexDirection = 'column'

  let h1 = document.createElement('h1')
  h1.textContent = asabenehChallenges2022.description
  h1.style.fontSize = '1.5rem'
  let span = document.createElement('span')
  span.textContent = asabenehChallenges2022.challengeYear
  wrapper.appendChild(h1)
  h1.appendChild(span)
  span.style.paddingLeft = '5px'
  span.style.fontSize = '4rem'

  let h2 = document.createElement('h2')
  h2.textContent = asabenehChallenges2022.challengeSubtitle
  wrapper.appendChild(h2)
  h2.style.textDecoration = 'underline'
  h2.style.color = 'rgba(0, 0, 0, 0.8)'
  h2.style.fontWeight = 400
  h2.style.fontSize = '1.2rem'
  h2.style.marginTop = '-5px'

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  let h3 = document.createElement('h3')
  wrapper.appendChild(h3)
  h3.style.padding = '0.5rem'
  h3.style.width = '20%'
  h3.style.textAlign = 'center'
  h3.style.fontSize = '14px'
  h3.style.marginTop = '-8px'

  function startTime() {
    let today = new Date()
    let date = today.getDate()
    let month = months[today.getMonth()]
    let year = today.getFullYear()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    // add a zero in front of numbers<10
    m = checkTime(m)
    s = checkTime(s)
    h = checkTime(h)
    h3.innerHTML = month + ' ' + date + ',' + ' ' + year + ' ' + h + ":" + m + ":" + s
    t = setTimeout(function() {
      startTime()
    }, 500)
  }
  startTime()

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
 function hexYearColors() {
    let hex = '0123456789abcdef'
    let color = ''
    for(let i = 0; i < 6; i++) {
      color += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    span.style.color = '#' + color
  }
  hexYearColors()

  function hexTimerColors() {
    let hex = '0123456789abcdef'
    let color = ''
    for(let i = 0; i < 6; i++) {
      color += hex.charAt(Math.floor(Math.random() * hex.length));
    }
     h3.style.background = '#' + color
  }
  setInterval(hexYearColors, 1000)
  setInterval(hexTimerColors, 1000)

  let container = document.createElement('div')
  wrapper.appendChild(container)
  container.style.fontSize = '12px'
  container.style.padding = '0rem 1rem'
  container.style.display = 'flex'
  container.style.alignItems ='center'
  container.style.justifyContent = 'space-between'
  container.style.flexDirection = 'column'
 
  // div for python block
  let python = document.createElement('div')
  python.setAttribute('class', 'done')
  container.appendChild(python)
  python.style.display = 'flex'
  python.style.alignItems = 'center'
  python.style.justifyContent = 'space-between'
  python.style.padding = '1rem'  
//   python.style.fontSize = '12px'
  python.style.background = '#27cf67'
  python.style.width = '100%'

 	// first block of python
    let pythonTitle = document.createElement('a')
    pythonTitle.setAttribute('href', "#")
    python.appendChild(pythonTitle);
    pythonTitle.style.padding = '0rem 2rem 0rem 0rem'
    // pythonTitle.style.margin = '0rem 1rem 0rem 0rem'
    pythonTitle.innerHTML = asabenehChallenges2022.challenges[0].name

    // second block of python
    let pythonTopicsBox = document.createElement('div')
	pythonTopicsBox.style.padding = '0rem 3rem'
	pythonTopicsBox.style.margin = '0rem 2rem'
    python.appendChild(pythonTopicsBox)
    let pythonDescription = document.createElement('details') 
    pythonTopicsBox.appendChild(pythonDescription)
    let pythonSummary = document.createElement('summary')
	pythonSummary.textContent = 'Python'
	pythonDescription.appendChild(pythonSummary)
    for(let i = 0; i < asabenehChallenges2022.challenges[0].topics.length; i++) {
     let pythonTopics = document.createElement('span')
	 pythonTopics.style.display = 'flex'
	 pythonTopics.style.fontSize = '10px'
     pythonTopics.textContent += asabenehChallenges2022.challenges[0].topics[i]
     pythonDescription.appendChild(pythonTopics)
    //  console.log(pythonTopics)
    }

	// Third block of python
	let pythonStatus = document.createElement('div')
	python.appendChild(pythonStatus)
	pythonStatus.style.padding = '0rem 0rem 0rem 5rem'
	let pythonStatusContent = document.createElement('div')
	pythonStatus.appendChild(pythonStatusContent)
	pythonStatusContent.textContent = asabenehChallenges2022.challenges[0].status;
	// console.log(pythonStatus)


  // div for javascript block
  let js = document.createElement('div')
  js.setAttribute('class', 'ongoing')
  container.appendChild(js)
  js.style.display = 'flex'
  js.style.alignItems = 'center'
  js.style.justifyContent = 'space-between'
  js.style.padding = '1rem'
  js.style.marginTop = '0.2rem'
//   js.style.fontSize = '14px'
  js.style.background = '#f5cf14'
  js.style.width = '100%'


 	// first block of js
    let jsTitle = document.createElement('a')
    jsTitle.setAttribute('href', "#")
    js.appendChild(jsTitle);
    jsTitle.style.padding = '0rem 2rem 0rem 0rem'
    // jsTitle.style.margin = '0rem 1rem 0rem 0rem'
    jsTitle.innerHTML = asabenehChallenges2022.challenges[1].name

    // second block of js
    let jsTopicsBox = document.createElement('div')
	jsTopicsBox.style.padding = '0rem 2rem'
	jsTopicsBox.style.margin = '0rem 2rem'
    js.appendChild(jsTopicsBox)
    let jsDescription = document.createElement('details') 
    jsTopicsBox.appendChild(jsDescription)
    let jsSummary = document.createElement('summary')
	jsSummary.textContent = 'JavaScript'
	jsDescription.appendChild(jsSummary)
    for(let i = 0; i < asabenehChallenges2022.challenges[1].topics.length; i++) {
     let jsTopics = document.createElement('span')
	 jsTopics.style.display = 'flex'
	 jsTopics.style.fontSize = '10px'
     jsTopics.textContent += asabenehChallenges2022.challenges[1].topics[i]
     jsDescription.appendChild(jsTopics)
    //  console.log(jsTopics)
    }

	// Third block of js
	let jsStatus = document.createElement('div')
	js.appendChild(jsStatus)
	jsStatus.style.padding = '0rem 0rem 0rem 5rem'
	let jsStatusContent = document.createElement('div')
	jsStatus.appendChild(jsStatusContent)
	jsStatusContent.textContent = asabenehChallenges2022.challenges[1].status;
	// console.log(jsStatus)

	 // div for html and css block
	 let hc = document.createElement('div')
	 hc.setAttribute('class', 'coming')
	 container.appendChild(hc)
	 hc.style.display = 'flex'
	 hc.style.alignItems = 'center'
	 hc.style.justifyContent = 'space-between'
	 hc.style.padding = '1rem'
	 hc.style.marginTop = '0.2rem'
	//  hc.style.fontSize = '14px'
	 hc.style.background = '#f55e51'
	 hc.style.width = '100%'
   
   
		// first block of html and css
	   let hcTitle = document.createElement('div')
	   hc.appendChild(hcTitle);
	   hcTitle.style.padding = '0rem 2rem 0rem 0rem'
	   // hcTitle.style.margin = '0rem 1rem 0rem 0rem'
	   hcTitle.innerHTML = asabenehChallenges2022.challenges[2].name
   
	   // second block of html and css
	   let hcTopicsBox = document.createElement('div')
	   hcTopicsBox.style.padding = '0rem 2rem'
	   hcTopicsBox.style.margin = '0rem 2rem'
	   hc.appendChild(hcTopicsBox)
	   let hcDescription = document.createElement('details') 
	   hcTopicsBox.appendChild(hcDescription)
	   let hcSummary = document.createElement('summary')
	   hcSummary.textContent = 'HTML & CSS'
	   hcDescription.appendChild(hcSummary)
	   for(let i = 0; i < asabenehChallenges2022.challenges[2].topics.length; i++) {
		let hcTopics = document.createElement('span')
		hcTopics.style.display = 'flex'
		hcTopics.style.fontSize = '10px'
		hcTopics.textContent += asabenehChallenges2022.challenges[2].topics[i]
		hcDescription.appendChild(hcTopics)
	   //  console.log(hcTopics)
	   }
   
	   // Third block of html and css
	   let hcStatus = document.createElement('div')
	   hc.appendChild(hcStatus)
	   hcStatus.style.padding = '0rem 0rem 0rem 5rem'
	   let hcStatusContent = document.createElement('div')
	   hcStatus.appendChild(hcStatusContent)
	   hcStatusContent.textContent = asabenehChallenges2022.challenges[2].status;
	   // console.log(hcStatus)


  // div for React block
  let react = document.createElement('div')
  react.setAttribute('class', 'coming')
  container.appendChild(react)
  react.style.display = 'flex'
  react.style.alignItems = 'center'
  react.style.justifyContent = 'space-between'
  react.style.padding = '1rem'
  react.style.marginTop = '0.2rem'
//   react.style.fontSize = '14px'
  react.style.background = '#f55e51'
  react.style.width = '100%'


 	// first block of React
    let reactTitle = document.createElement('div')
    react.appendChild(reactTitle);
    reactTitle.style.padding = '0rem 2rem 0rem 0rem'
    // reactTitle.style.margin = '0rem 1rem 0rem 0rem'
    reactTitle.innerHTML = asabenehChallenges2022.challenges[3].name

    // second block of React
    let reactTopicsBox = document.createElement('div')
	reactTopicsBox.style.padding = '0rem 2rem'
	reactTopicsBox.style.margin = '0rem 2rem'
    react.appendChild(reactTopicsBox)
    let reactDescription = document.createElement('details') 
    reactTopicsBox.appendChild(reactDescription)
    let reactSummary = document.createElement('summary')
	reactSummary.textContent = 'React'
	reactDescription.appendChild(reactSummary)
    for(let i = 0; i < asabenehChallenges2022.challenges[3].topics.length; i++) {
     let reactTopics = document.createElement('span')
	 reactTopics.style.display = 'flex'
	 reactTopics.style.fontSize = '10px'
     reactTopics.textContent += asabenehChallenges2022.challenges[3].topics[i]
     reactDescription.appendChild(reactTopics)
    //  console.log(reactTopics)
    }

	// Third block of React
	let reactStatus = document.createElement('div')
	react.appendChild(reactStatus)
	reactStatus.style.padding = '0rem 0rem 0rem 5rem'
	let reactStatusContent = document.createElement('div')
	reactStatus.appendChild(reactStatusContent)
	reactStatusContent.textContent = asabenehChallenges2022.challenges[3].status;

// div for ReactNative block
let reactNative = document.createElement('div')
reactNative.setAttribute('class', 'coming')
container.appendChild(reactNative)
reactNative.style.display = 'flex'
reactNative.style.alignItems = 'center'
reactNative.style.justifyContent = 'space-between'
reactNative.style.padding = '1rem'
reactNative.style.marginTop = '0.2rem'
// reactNative.style.fontSize = '14px'
reactNative.style.background = '#f55e51'
reactNative.style.width = '100%'


   // first block of ReactNative
  let reactNativeTitle = document.createElement('div')
  reactNative.appendChild(reactNativeTitle);
  reactNativeTitle.style.padding = '0rem 2rem 0rem 0rem'
  reactNativeTitle.innerHTML = asabenehChallenges2022.challenges[4].name

  // second block of ReactNative
  let reactNativeTopicsBox = document.createElement('div')
  reactNativeTopicsBox.style.padding = '0rem 2rem'
  reactNativeTopicsBox.style.margin = '0rem 2rem'
  reactNative.appendChild(reactNativeTopicsBox)
  let reactNativeDescription = document.createElement('details') 
  reactNativeTopicsBox.appendChild(reactNativeDescription)
  let reactNativeSummary = document.createElement('summary')
  reactNativeSummary.textContent = 'ReactNative'
  reactNativeDescription.appendChild(reactNativeSummary)
  for(let i = 0; i < asabenehChallenges2022.challenges[4].topics.length; i++) {
   let reactNativeTopics = document.createElement('span')
   reactNativeTopics.style.display = 'flex'
   reactNativeTopics.style.fontSize = '10px'
   reactNativeTopics.textContent += asabenehChallenges2022.challenges[4].topics[i]
   reactNativeDescription.appendChild(reactNativeTopics)
  }

  // Third block of ReactNative
  let reactNativeStatus = document.createElement('div')
  reactNative.appendChild(reactNativeStatus)
  reactNativeStatus.style.padding = '0rem 0rem 0rem 5rem'
  let reactNativeStatusContent = document.createElement('div')
  reactNativeStatus.appendChild(reactNativeStatusContent)
  reactNativeStatusContent.textContent = asabenehChallenges2022.challenges[4].status;


// div for fullstack block
let fullstack = document.createElement('div')
fullstack.setAttribute('class', 'coming')
container.appendChild(fullstack)
fullstack.style.display = 'flex'
fullstack.style.alignItems = 'center'
fullstack.style.justifyContent = 'space-between'
fullstack.style.padding = '1rem'
fullstack.style.marginTop = '0.2rem'
// fullstack.style.fontSize = '14px'
fullstack.style.background = '#f55e51'
fullstack.style.width = '100%'

   // first block of fullstack
  let fullstackTitle = document.createElement('div')
  fullstack.appendChild(fullstackTitle);
  fullstackTitle.style.padding = '0rem 2rem 0rem 0rem'
  fullstackTitle.innerHTML = asabenehChallenges2022.challenges[5].name

  // second block of fullstack
  let fullstackTopicsBox = document.createElement('div')
  fullstackTopicsBox.style.padding = '0rem 2rem'
  fullstackTopicsBox.style.margin = '0rem 2rem'
  fullstack.appendChild(fullstackTopicsBox)
  let fullstackDescription = document.createElement('details') 
  fullstackTopicsBox.appendChild(fullstackDescription)
  let fullstackSummary = document.createElement('summary')
  fullstackSummary.textContent = 'Fullstack'
  fullstackDescription.appendChild(fullstackSummary)
  for(let i = 0; i < asabenehChallenges2022.challenges[5].topics.length; i++) {
   let fullstackTopics = document.createElement('span')
   fullstackTopics.style.display = 'flex'
   fullstackTopics.style.fontSize = '10px'
   fullstackTopics.textContent += asabenehChallenges2022.challenges[5].topics[i]
   fullstackDescription.appendChild(fullstackTopics)
  }

  // Third block of fullstack
  let fullstackStatus = document.createElement('div')
  fullstack.appendChild(fullstackStatus)
  fullstackStatus.style.padding = '0rem 0rem 0rem 5rem'
  let fullstackStatusContent = document.createElement('div')
  fullstackStatus.appendChild(fullstackStatusContent)
  fullstackStatusContent.textContent = asabenehChallenges2022.challenges[5].status;

// div for Data Analysis block
let data = document.createElement('div')
data.setAttribute('class', 'coming')
container.appendChild(data)
data.style.display = 'flex'
data.style.alignItems = 'center'
data.style.justifyContent = 'space-between'
data.style.padding = '1rem'
data.style.marginTop = '0.2rem'
// data.style.fontSize = '14px'
data.style.background = '#f55e51'
data.style.width = '100%'

   // first block of Data Analysis
  let dataTitle = document.createElement('div')
  data.appendChild(dataTitle);
  dataTitle.style.padding = '0rem 2rem 0rem 0rem'
  dataTitle.innerHTML = asabenehChallenges2022.challenges[6].name

  // second block of Data Analysis
  let dataTopicsBox = document.createElement('div')
  dataTopicsBox.style.padding = '0rem 1rem'
  dataTopicsBox.style.margin = '0rem 2rem'
  data.appendChild(dataTopicsBox)
  let dataDescription = document.createElement('details') 
  dataTopicsBox.appendChild(dataDescription)
  let dataSummary = document.createElement('summary')
  dataSummary.textContent = 'Data Analysis'
  dataDescription.appendChild(dataSummary)
  for(let i = 0; i < asabenehChallenges2022.challenges[6].topics.length; i++) {
   let dataTopics = document.createElement('span')
   dataTopics.style.display = 'flex'
   dataTopics.style.fontSize = '10px'
   dataTopics.textContent += asabenehChallenges2022.challenges[6].topics[i]
   dataDescription.appendChild(dataTopics)
  }

  // Third block of Data Analysis
  let dataStatus = document.createElement('div')
  data.appendChild(dataStatus)
  dataStatus.style.padding = '0rem 0rem 0rem 5rem'
  let dataStatusContent = document.createElement('div')
  dataStatus.appendChild(dataStatusContent)
  dataStatusContent.textContent = asabenehChallenges2022.challenges[6].status;

// div for Machine learning block
let ml = document.createElement('div')
ml.setAttribute('class', 'coming')
container.appendChild(ml)
ml.style.display = 'flex'
ml.style.alignItems = 'center'
ml.style.justifyContent = 'space-between'
ml.style.padding = '1rem'
ml.style.marginTop = '0.2rem'
// ml.style.fontSize = '14px'
ml.style.background = '#f55e51'
ml.style.width = '100%'

   // first block of Machine Learning
  let mlTitle = document.createElement('div')
  ml.appendChild(mlTitle);
  mlTitle.style.padding = '0rem'
  mlTitle.innerHTML = asabenehChallenges2022.challenges[7].name

  // second block of Machine Learning
  let mlTopicsBox = document.createElement('div')
  mlTopicsBox.style.padding = '0rem 2rem'
  mlTopicsBox.style.margin = '0rem 2rem'
  ml.appendChild(mlTopicsBox)
  let mlDescription = document.createElement('details') 
  mlTopicsBox.appendChild(mlDescription)
  let mlSummary = document.createElement('summary')
  mlSummary.textContent = 'Machine Learning'
  mlDescription.appendChild(mlSummary)
  for(let i = 0; i < asabenehChallenges2022.challenges[7].topics.length; i++) {
   let mlTopics = document.createElement('span')
   mlTopics.style.display = 'flex'
   mlTopics.style.fontSize = '10px'
   mlTopics.textContent += asabenehChallenges2022.challenges[7].topics[i]
   mlDescription.appendChild(mlTopics)
  }

  // Third block of Machine Learning
  let mlStatus = document.createElement('div')
  ml.appendChild(mlStatus)
  mlStatus.style.padding = '0rem 0rem 0rem 3rem'
  let mlStatusContent = document.createElement('div')
  mlStatus.appendChild(mlStatusContent)
  mlStatusContent.textContent = asabenehChallenges2022.challenges[7].status;

  const authorName = document.createElement('span')
  authorName.textContent = asabenehChallenges2022.author.firstName + " " + asabenehChallenges2022.author.lastName
  wrapper.appendChild(authorName)
  authorName.style.fontSize = '1.3rem'
  authorName.style.fontWeight = 800
  authorName.style.margin = '1rem'

  let socialMedia = document.createElement('div')
  wrapper.appendChild(socialMedia)
  socialMedia.style.marginTop = '-15px'
  socialMedia.style.display = 'flex'

  let linkedin = document.createElement('div')
  linkedin.innerHTML = asabenehChallenges2022.author.socialLinks[0].fontawesomeIcon
  linkedin.style.fontSize = '1.5rem'
  socialMedia.appendChild(linkedin)
	
  let twitter = document.createElement('div')
  twitter.innerHTML = asabenehChallenges2022.author.socialLinks[1].fontawesomeIcon
  twitter.style.fontSize = '1.5rem'
  twitter.style.padding = ' 0rem 0.5rem'
  socialMedia.appendChild(twitter)
	
  let github = document.createElement('div')
  github.innerHTML = asabenehChallenges2022.author.socialLinks[2].fontawesomeIcon
  github.style.fontSize = '1.5rem'
  socialMedia.appendChild(github)

  let authorBio = document.createElement('p')
  wrapper.appendChild(authorBio)
  authorBio.textContent = asabenehChallenges2022.author.bio
  authorBio.style.margin = '1.5rem 12rem'
  authorBio.style.fontSize = '12px'
  authorBio.style.textAlign = 'center'

  let authorSkillsSection = document.createElement('div')
  authorSkillsSection.style.display = 'flex'
  wrapper.appendChild(authorSkillsSection)

  let authorTitles = document.createElement('div')
  authorTitles.textContent = 'Titles'
  authorTitles.style.fontWeight = 600
   authorSkillsSection.appendChild(authorTitles)

  for(let [a, b] of asabenehChallenges2022.author.titles) {
    let titlesBlock = document.createElement('div')
    let titlesBlockContent = document.createElement('span')
    titlesBlock.textContent = (a)
    titlesBlockContent.textContent = (b)
    titlesBlockContent.style.paddingLeft = '0.2rem'
    titlesBlockContent.style.fontWeight = 400
    titlesBlock.style.display = 'flex'
    titlesBlock.style.padding = '0.2rem 0rem'
    titlesBlock.style.fontSize = '12px'
    authorTitles.appendChild(titlesBlock)
    titlesBlock.appendChild(titlesBlockContent)
  }

  let authorSkills = document.createElement('div')
  authorSkills.textContent = 'Skills'
  authorSkills.style.fontWeight = 600
  authorSkills.style.padding = '0rem 2rem'
  authorSkillsSection.appendChild(authorSkills)

  for(let i = 0; i < asabenehChallenges2022.author.skills.length; i++) {
    let skillsBlock = document.createElement('div')
    let skillsBlockContent = document.createElement('span')
     skillsBlockContent.textContent = asabenehChallenges2022.author.skills[i]
     skillsBlockContent.style.paddingLeft = '0.2rem'
     skillsBlockContent.style.fontWeight = 400
    skillsBlock.textContent = '\u2705'
    skillsBlock.style.padding = '0.2rem 0rem'
    skillsBlock.style.fontSize = '12px'
    authorSkills.appendChild(skillsBlock)
    skillsBlock.appendChild(skillsBlockContent)
  }

  let authorQualification = document.createElement('div')
  authorQualification.textContent = 'Qualifications'
  authorQualification.style.fontWeight = 600
  authorSkillsSection.appendChild(authorQualification)

  for(let i = 0; i < asabenehChallenges2022.author.qualifications.length; i++) {
    let qualBlock = document.createElement('div')
    let qualBlockContent = document.createElement('span')
     qualBlockContent.textContent = asabenehChallenges2022.author.qualifications[i]
     qualBlockContent.style.paddingLeft = '0.2rem'
     qualBlockContent.style.fontWeight = 400
    qualBlock.innerHTML= '&#128214'
    qualBlock.style.padding = '0.2rem 0rem'
    qualBlock.style.fontSize = '12px'
    authorQualification.appendChild(qualBlock)
    qualBlock.appendChild(qualBlockContent)
  }

  let keywordSection = document.createElement('div')
  keywordSection.style.margin = '0rem 12rem'
  keywordSection.style.paddingTop = '0.5rem'
  wrapper.appendChild(keywordSection)

	let keywordBlock = document.createElement('div')
  let keywordTitle = document.createElement('div')
  keywordBlock.appendChild(keywordTitle)
  keywordSection.appendChild(keywordBlock)
  keywordTitle.textContent = 'Keywords'
  keywordBlock.style.fontWeight = 800 
  
  let keywordColor = ['#5e316e', '#35942c', '#a5ba3c', '#993c51', '#fa0c44', '#27c29e', '#b1db6e', '#f2fa14', '#fa14ad', '#b577a1', '#f2d65a', '#2a9c08', '#8f8f56', '#053f7d', '#057d05', '#11d9d2', '#4b6b6a', '#fa2375', '#666465', '#5a855d', '#992343', '#05470b', '#b3bdbc', '#8a789e', '#7a4943', '#369e16', '#b3633e', '#29806d', '#6e6a59', '#ebcc36', '#7cb8e6', '#75ba0d', '#542248', '#46dba0', '#071cdb']

  let keywordTextBlock = document.createElement('div')
  keywordBlock.appendChild(keywordTextBlock)
  keywordTextBlock.style.padding = '0.3rem 2rem'
  keywordTextBlock.style.display = 'flex'
  keywordTextBlock.style.flexWrap = 'wrap'

  for(let i = 0; i < asabenehChallenges2022.keywords.length; i++) {
    let keywordText = document.createElement('span')
    keywordTextBlock.appendChild(keywordText)
    keywordText.textContent = '#' + asabenehChallenges2022.keywords[i];
    keywordText.style.fontSize = '10px'
    keywordText.style.padding = '0.3rem'
    keywordText.style.margin = '0.4rem'
    keywordText.style.borderRadius = '15px'
    keywordText.style.background = keywordColor[i]
  }
  