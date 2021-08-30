const generate = () => {
    const title_prefix = $id('title-prefix').value;
    const title = $id('title').value;

    const subtitle = $id('subtitle').value;

    const currently_work_prefix = $id('currently-work-prefix').value;
    const currently_work = $id('currently-work').value;
    const looking_to_prefix = $id('looking-to-prefix').value;
    const looking_to = $id('looking-to').value;
    const looking_for_prefix = $id('looking-for-prefix').value;
    const looking_for = $id('looking-for').value;

    const currently_learning_prefix = $id('currently-learning-prefix').value;
    const currently_learning = $id('currently-learning').value;
    const ask_me_prefix = $id('ask-me-prefix').value;
    const ask_me = $id('ask-me').value;
    const reach_me_prefix = $id('reach-me-prefix').value;
    const reach_me = $id('reach-me').value;
    const my_project_prefix = $id('my-project-prefix').value;
    const my_project = $id('my-project').value;
    const blog_prefix = $id('blog-prefix').value;
    const blog = $id('blog').value;
    const my_experience_prefix = $id('my-experience-prefix').value;
    const my_experience = $id('my-experience').value;
    const fun_fact_prefix = $id('fun-fact-prefix').value;
    const fun_fact = $id('fun-fact').value;

    const github = $id('github-username').value;
    const wakatime = $id('wakatime-username').value;
    const twitter = $id('twitter-username').value;
    const dev = $id('dev-username').value;
    const codepen = $id('codepen-username').value;
    const codesandbox = $id('codesandbox-username').value;
    const stackoverflow = $id('stackoverflow-username').value;
    const linkedin = $id('linkedin-username').value;
    const kaggle = $id('kaggle-username').value;
    const facebook = $id('facebook-username').value;
    const instagram = $id('instagram-username').value;
    const dribbble = $id('dribbble-username').value;
    const behance = $id('behance-username').value;
    const medium = $id('medium-username').value;
    const youtube = $id('youtube-username').value;
    const codechef = $id('codechef-username').value;
    const hackerrank = $id('hackerrank-username').value;
    const codeforces = $id('codeforces-username').value;
    const leetcode = $id('leetcode-username').value;
    const topcoder = $id('topcoder-username').value;
    const hackerearth = $id('hackerearth-username').value;
    const geeksforgeeks = $id('geeksforgeeks-username').value;
    const discord = $id('discord-username').value;
    const rss = $id('rss-username').value;
    const support = $id('support').value;


    $id('output').innerHTML = `<div align="center">
    <img width="100%" height = "250px" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="cover" />
    </div>
    <h1 align="center">${title_prefix} ${title}</h1>
    <h3 align="center">${subtitle}</h3>
    
    <p align="left"> <img src="https://komarev.com/ghpvc/?username=${github}&label=Profile%20views&color=0f3de6&style=flat-square" alt="${github}" /> </p>
    
    <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${github}" alt="${github}" /></a> </p>
    
    <p align="left"> <a href="https://twitter.com/${twitter}" target="blank"><img src="https://img.shields.io/twitter/follow/${twitter}?logo=twitter&style=for-the-badge" alt="${twitter}" /></a> </p>
    <h2> About Me <img src = "https://media0.giphy.com/media/KDDpcKigbfFpnejZs6/giphy.gif?cid=ecf05e47oy6f4zjs8g1qoiystc56cu7r9tb8a1fe76e05oty&rid=giphy.gif" width = 100px></h2>
    <img width="55%" align="right" alt="Github" src="https://raw.githubusercontent.com/onimur/.github/master/.resources/git-header.svg" />
    <ul>
    <li> ${currently_work_prefix} <strong>${currently_work}</strong></li>
    <li> ${currently_learning_prefix} <strong>${currently_learning}</strong></li>
    <li> ${looking_to_prefix} <strong>${looking_to}</strong></li>
    <li> ${looking_for_prefix} <strong>${looking_for}</strong></li>
    <li> ${my_project_prefix} <a href="${my_project}" >${my_project}</a></li>
    <li> ${blog_prefix} <a href="${blog}" >${blog}</a></li>
    <li> ${ask_me_prefix} <strong>${ask_me}</strong></li>
    <li> ${reach_me_prefix} <strong>${reach_me}</strong></li>
    <li> ${my_experience_prefix} <a href="${my_experience}" >${my_experience}</a></li>
    <li> ${fun_fact_prefix} <strong>${fun_fact}</strong></li>
    </ul>
    <h3> Blogs posts </h3>
    <!-- BLOG-POST-LIST:START -->
    <!-- BLOG-POST-LIST:END -->
    
    <h2> Connect with me <img src='https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/handshake.gif' width="100px"> </h2>
    <p align="left">
    <a href="https://codepen.io/${codepen}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="${codepen}" height="30" width="40" /></a>
    <a href="https://dev.to/${dev}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="${dev}" height="30" width="40" /></a>
    <a href="https://twitter.com/${twitter}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${twitter}" height="30" width="40" /></a>
    <a href="https://linkedin.com/in/${linkedin}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="${linkedin}" height="30" width="40" /></a>
    <a href="https://stackoverflow.com/users/${stackoverflow}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="${stackoverflow}" height="30" width="40" /></a>
    <a href="https://codesandbox.com/${codesandbox}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" alt="${codesandbox}" height="30" width="40" /></a>
    <a href="https://kaggle.com/${kaggle}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="${kaggle}" height="30" width="40" /></a>
    <a href="https://fb.com/${facebook}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="${facebook}" height="30" width="40" /></a>
    <a href="https://instagram.com/${instagram}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="${instagram}" height="30" width="40" /></a>
    <a href="https://dribbble.com/${dribbble}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg" alt="${dribbble}" height="30" width="40" /></a>
    <a href="https://www.behance.net/${behance}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg" alt="${behance}" height="30" width="40" /></a>
    <a href="https://medium.com/@${medium}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@${medium}" height="30" width="40" /></a>
    <a href="https://www.youtube.com/c/${youtube}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="${youtube}" height="30" width="40" /></a>
    <a href="https://www.codechef.com/users/${codechef}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" alt="${codechef}" height="30" width="40" /></a>
    <a href="https://www.hackerrank.com/${hackerrank}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="${hackerrank}" height="30" width="40" /></a>
    <a href="https://codeforces.com/profile/${codeforces}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg" alt="${codeforces}" height="30" width="40" /></a>
    <a href="https://www.leetcode.com/${leetcode}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="${leetcode}" height="30" width="40" /></a>
    <a href="https://www.hackerearth.com/@${hackerearth}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerearth.svg" alt="@${hackerearth}" height="30" width="40" /></a>
    <a href="https://auth.geeksforgeeks.org/user/${geeksforgeeks}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="${geeksforgeeks}" height="30" width="40" /></a>
    <a href="https://www.topcoder.com/members/${topcoder}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/topcoder.svg" alt="${topcoder}" height="30" width="40" /></a>
    <a href="${rss}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg" alt="${rss}" height="30" width="40" /></a>
    </p>
    
    <h2> Skills <img src = "https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = 32px> </h2>
    <p align="left"> <a href="https://developer.android.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> <a href="https://aws.amazon.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://cloud.google.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://kotlinlang.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/> </a> <a href="https://kubernetes.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://opencv.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>
    
    <h2 >Support:</h2>
    <p><a href="https://www.buymeacoffee.com/${support}"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${support}" /></a></p><br><br>
    <h2> My GitHub Stats <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='32px'> </h2>
    <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${github}&show_icons=true&locale=en&layout=compact" alt="${github}" /></p>
    <p><img align="left" src="https://metrics.lecoq.io/${github}" alt="${github}" /></p>
    <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&locale=en" alt="${github}" /></p>
    <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=dark" alt="${github}" /></p>
    <p><img align="center" src="https://activity-graph.herokuapp.com/graph?username=${github}" alt="${github}" /></p>

    <h2> Stuff I worked on last week  <img src = "https://media1.giphy.com/media/JZ40cnfnN11KycrvMF/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = 70px> </h2>
    <p><img align="center" src="https://github-readme-stats.vercel.app/api/wakatime?username=${wakatime}"/></p>
    <h2> Some Programming Humor for you <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width = '32px'></h2>
    <p><img src="https://readme-jokes.vercel.app/api?theme=default" alt="Jokes Card"></p>
    <h2 > My Stackoverflow Stats </h2>
    <p><img align="left" src="https://stackoverflow-card.vercel.app/?userID=${stackoverflow}" alt="${stackoverflow}" /></p>
    `;
}
const $id = (id) => {
    return document.getElementById(id);
}
const $name = (name) => {
    return document.getElementsByName(name);
}
$id('generate-btn').addEventListener('click', generate);
const input_check = (id) => {
    return $id(id).value !== '';
}
const $check = () => {
    return (input_check('title') && input_check('subtitle') && input_check('github-username')) ? true : false;
}
setInterval(function () { ($check()) ? $id('generate-btn').removeAttribute('disabled') : $id('generate-btn').setAttribute('disabled', 'true') }, 500);
const add_ons = (name) => {
    let array = document.querySelectorAll(`[data-name=${name}]`);
    for (let index = 0; index < array.length; index++) {
        if (input_check(`${name}-username`)) {
            array[index].classList.remove('none');
        } else {
            array[index].classList.add('none');
        }

    }
}
$id('github-username').addEventListener('input', add_ons('github'));
$id('wakatime-username').addEventListener('input', add_ons('wakatime'));
$id('stackoverflow-username').addEventListener('input', add_ons('stackoverflow'));
$id('twitter-username').addEventListener('input', add_ons('twitter'));
$id('dev-username').addEventListener('input', add_ons('dev'));
$id('medium-username').addEventListener('input', add_ons('medium'));
$id('rss-username').addEventListener('input', add_ons('rss'));