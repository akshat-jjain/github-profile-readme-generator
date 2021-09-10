const baseUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@5.12.0/icons/';
const title = (input_check('title-prefix') && input_check('title')) ? `<h1 align="center">${$id('title-prefix').value} ${$id('title').value}</h1>` : "";

const subtitle = (input_check('subtitle')) ? `<h3 align="center">${$id('subtitle').value}</h3>` : "";

const banner_image = (input_check('banner-image')) ? `<div align="center"><img width="100%" height = "250px" src="${$id('banner-image').value}" alt="cover" /></div>` : "";
const about_image = (input_check('about-image')) ? `<img width="55%" align="right" alt="Github" src="${$id('about-image').value}" />` : "";

const currently_work = (input_check('currently-work-prefix') && input_check('currently-work')) ? `<li>${$id('currently-work-prefix').value} <strong>${$id('currently-work').value}</strong></li>` : "";
const looking_to = (input_check('looking-to-prefix') && input_check('looking-to')) ? `<li>${$id('looking-to-prefix').value} <strong>${$id('looking-to').value}</strong></li>` : "";
const looking_for = (input_check('looking-for-prefix') && input_check('looking-for')) ? `<li>${$id('looking-for-prefix').value} <strong>${$id('looking-for').value}</strong></li>` : "";

const currently_learning = (input_check('currently-learning-prefix') && input_check('currently-learning')) ? `<li>${$id('currently-learning-prefix').value} <strong>${$id('currently-learning').value}</strong></li>` : "";
const ask_me = (input_check('ask-me-prefix') && input_check('ask-me')) ? `<li>${$id('ask-me-prefix').value} <strong>${$id('ask-me').value}</strong></li>` : "";
const reach_me = (input_check('reach-me-prefix') && input_check('reach-me')) ? `<li>${$id('reach-me-prefix').value} <strong>${$id('reach-me').value}</strong></li>` : "";
const my_project = (input_check('my-project-prefix') && input_check('my-project')) ? `<li>${$id('my-project-prefix').value} <a href="${$id('my-project').value}" >${$id('my-project').value}</a></li>` : "";
const blog = (input_check('blog-prefix') && input_check('blog')) ? `<li>${$id('blog-prefix').value} <a href="${$id('blog').value}" >${$id('blog').value}</a></li>` : "";
const my_experience = (input_check('my-experience-prefix') && input_check('my-experience')) ? `<li>${$id('my-experience-prefix').value} <a href="${$id('my-experience').value}" >${$id('my-experience').value}</a></li>` : "";
const fun_fact = (input_check('fun-fact-prefix') && input_check('fun-fact')) ? `<li>${$id('fun-fact-prefix').value} <strong>${$id('fun-fact').value}</strong></li>` : "";

const github = $id('github-username').value;
const wakatime = $id('wakatime-username').value;
const twitter = (input_check('twitter-username')) ? `<a href="https://twitter.com/${$id('twitter-username').value}" target="blank"><img align="center" src="${baseUrl}twitter.svg" alt="${$id('twitter-username').value}" height="30" width="40" /></a>` : "";
const dev = (input_check('dev-username')) ? `<a href="https://dev.to/${$id('dev-username').value}" target="blank"><img align="center" src="${baseUrl}devdotto.svg" alt="${$id('dev-username').value}" height="30" width="40" /></a>` : "";
const codepen = (input_check('codepen-username')) ? `<a href="https://codepen.io/${$id('codepen-username').value}" target="blank"><img align="center" src="${baseUrl}codepen.svg" alt="${$id('codepen-username').value}" height="30" width="40" /></a>` : "";
const codesandbox = (input_check('codesandbox-username')) ? `<a href="https://codesandbox.com/${$id('codesandbox-username').value}" target="blank"><img align="center" src="${baseUrl}codesandbox.svg" alt="${$id('codesandbox-username').value}" height="30" width="40" /></a>` : "";
const stackoverflow = (input_check('stackoverflow-username')) ? `<a href="https://stackoverflow.com/users/${$id('stackoverflow-username').value}" target="blank"><img align="center" src="${baseUrl}stack-overflow.svg" alt="${$id('stackoverflow-username').value}" height="30" width="40" /></a>` : "";
const linkedin = (input_check('linkedin-username')) ? `<a href="https://linkedin.com/in/${$id('linkedin-username').value}" target="blank"><img align="center" src="${baseUrl}linked-in-alt.svg" alt="${$id('linkedin-username').value}" height="30" width="40" /></a>` : "";
const kaggle = (input_check('kaggle-username')) ? `<a href="https://kaggle.com/${$id('kaggle-username').value}" target="blank"><img align="center" src="${baseUrl}kaggle.svg" alt="${$id('kaggle-username').value}" height="30" width="40" /></a>` : "";
const facebook = (input_check('facebook-username')) ? `<a href="https://fb.com/${$id('facebook-username').value}" target="blank"><img align="center" src="${baseUrl}facebook.svg" alt="${$id('facebook-username').value}" height="30" width="40" /></a>` : "";
const instagram = (input_check('instagram-username')) ? `<a href="https://instagram.com/${$id('instagram-username').value}" target="blank"><img align="center" src="${baseUrl}instagram.svg" alt="${$id('instagram-username').value}" height="30" width="40" /></a>` : "";
const dribbble = (input_check('dribbble-username')) ? `<a href="https://dribbble.com/${$id('dribbble-username').value}" target="blank"><img align="center" src="${baseUrl}dribbble.svg" alt="${$id('dribbble-username').value}" height="30" width="40" /></a>` : "";
const behance = (input_check('behance-username')) ? `<a href="https://behance.net/${$id('behance-username').value}" target="blank"><img align="center" src="${baseUrl}behance.svg" alt="${$id('behance-username').value}" height="30" width="40" /></a>` : "";
const medium = (input_check('medium-username')) ? `<a href="https://medium.com/@${$id('medium-username').value}" target="blank"><img align="center" src="${baseUrl}medium.svg" alt="${$id('medium-username').value}" height="30" width="40" /></a>` : "";
const youtube = (input_check('youtube-username')) ? `<a href="https://youtube.com/${$id('youtube-username').value}" target="blank"><img align="center" src="${baseUrl}youtube.svg" alt="${$id('youtube-username').value}" height="30" width="40" /></a>` : "";
const codechef = (input_check('codechef-username')) ? `<a href="https://codechef.com/users/${$id('codechef-username').value}" target="blank"><img align="center" src="${baseUrl}codechef.svg" alt="${$id('codechef-username').value}" height="30" width="40" /></a>` : "";
const hackerrank = (input_check('hackerrank-username')) ? `<a href="https://hackerrank.com/${$id('hackerrank-username').value}" target="blank"><img align="center" src="${baseUrl}hackerrank.svg" alt="${$id('hackerrank-username').value}" height="30" width="40" /></a>` : "";
const codeforces = (input_check('codeforces-username')) ? `<a href="https://codeforces.com/profile/${$id('codeforces-username').value}" target="blank"><img align="center" src="${baseUrl}codeforces.svg" alt="${$id('codeforces-username').value}" height="30" width="40" /></a>` : "";
const leetcode = (input_check('leetcode-username')) ? `<a href="https://leetcode.com/${$id('leetcode-username').value}" target="blank"><img align="center" src="${baseUrl}leet-code.svg" alt="${$id('leetcode-username').value}" height="30" width="40" /></a>` : "";
const topcoder = (input_check('topcoder-username')) ? `<a href="https://topcoder.com/members/${$id('topcoder-username').value}" target="blank"><img align="center" src="${baseUrl}topcoder.svg" alt="${$id('topcoder-username').value}" height="30" width="40" /></a>` : "";
const hackerearth = (input_check('hackerearth-username')) ? `<a href="https://hackerearth.com/@${$id('hackerearth-username').value}" target="blank"><img align="center" src="${baseUrl}hackerearth.svg" alt="@${$id('hackerearth-username').value}" height="30" width="40" /></a>` : "";
const geeksforgeeks = (input_check('geeksforgeeks-username')) ? `<a href="https://auth.geeksforgeeks.com/user/${$id('geeksforgeeks-username').value}" target="blank"><img align="center" src="${baseUrl}geeks-for-geeks.svg" alt="${$id('geeksforgeeks-username').value}" height="30" width="40" /></a>` : "";
const discord = (input_check('discord-username')) ? `<a href="https://discord.gg/${$id('discord-username').value}" target="blank"><img align="center" src="${baseUrl}discord.svg" alt="${$id('discord-username').value}" height="30" width="40" /></a>` : "";;
const rss = (input_check('rss-username')) ? `<a href="${$id('rss-username').value}" target="blank"><img align="center" src="${baseUrl}rss.svg" alt="${$id('rss-username').value}" height="30" width="40" /></a>` : "";
const support = (input_check('support')) ? `<h2 >Support:</h2>
    <p><a href="https://www.buymeacoffee.com/${$id('support').value}"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${$id('support').value}" /></a></p><br><br>` : "";

const visitors_count = ($id('visitors-count').checked && input_check('github-username')) ? `<p align="left"><img src="https://komarev.com/ghpvc/?username=${github}&label=Profile%20views&color=0f3de6&style=flat-square" alt="${github}" /></p>` : "";
const github_trophy = ($id('github-trophy').checked && input_check('github-username')) ? `<p align="left"><a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${github}" alt="${github}" /></a></p>` : "";
const github_metrices = ($id('github-metrices').checked && input_check('github-username')) ? `<p><img align="left" src="https://metrics.lecoq.io/${github}" alt="${github}" /></p>` : "";
const activity_graph = ($id('activity-graph').checked && input_check('github-username')) ? `<p><img align="center" src="https://activity-graph.herokuapp.com/graph?username=${github}" alt="${github}" width="100%" /></p>` : "";
const github_stats = ($id('github-stats').checked && input_check('github-username')) ? `<p><img align="center" src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&locale=en" alt="${github}" /></p>` : "";
const top_skills = ($id('top-skills').checked && input_check('github-username')) ? `<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${github}&show_icons=true&locale=en&layout=compact" alt="${github}" /></p>` : "";
const github_streak = ($id('github-streak').checked && input_check('github-username')) ? `<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=dark" alt="${github}" /></p>` : "";
const wakatime_stats = ($id('wakatime-stats').checked && input_check('wakatime-username')) ? `<h2> Stuff I worked on last week  <img src = "https://media1.giphy.com/media/JZ40cnfnN11KycrvMF/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = 70px> </h2>
<p><img align="center" src="https://github-readme-stats.vercel.app/api/wakatime?username=${wakatime}&layout=compact"/></p>` : "";
const twitter_badge = ($id('twitter-badge').checked && input_check('twitter-username')) ? `<p align="left"> <a href="https://twitter.com/${$id('twitter-username').value}" target="blank"><img src="https://img.shields.io/twitter/follow/${$id('twitter-username').value}?logo=twitter&style=for-the-badge" alt="${$id('twitter-username').value}" /></a></p>` : "";
const stackoverflow_stats = ($id('stackoverflow-stats').checked && input_check('stackoverflow-username')) ? `<h2 > My Stackoverflow Stats </h2>
<p><img align="left" src="https://stackoverflow-card.vercel.app/?userID=${$id('stackoverflow-username').value}" alt="${$id('stackoverflow-username').value}" /></p>` : "";
// const dev_blog = ($id('dev-blog').checked && input_check('dev-username')) ? `` : "";
// const medium_blog = ($id('medium-blog').checked && input_check('medium-username')) ? `` : "";
// const personal_blog = ($id('personal-blog').checked && input_check('rss-username')) ? `` : "";

const $id = (id) => {
    return document.getElementById(id);
}
const $name = (name) => {
    return document.getElementsByName(name);
}
const input_check = (id) => {
    return $id(id).value !== '';
}
const $check = () => {
    return (input_check('title') && input_check('subtitle') && input_check('github-username')) ? true : false;
}
