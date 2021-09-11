let skill_dis = "";
const generate = () => {
    const baseUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@5.12.0/icons/';
    const title = (input_check('title-prefix') && input_check('title')) ? `<h1 align="center">${$id('title-prefix').value} ${$id('title').value}</h1>` : "";

    const subtitle = (input_check('subtitle')) ? `<h3 align="center">${$id('subtitle').value}</h3>` : "";

    const banner_image = (input_check('banner-image')) ? `<div align="center">
    <img width="100%" height = "250px" src="${$id('banner-image').value}" alt="cover" />
</div>` : "";
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
    const stackoverflow = (input_check('stackoverflow-username')) ? `<a href="https://stackoverflow.com/users/${$id('stackoverflow-username').value}" target="blank"><img align="center" src="${baseUrl}stackoverflow.svg" alt="${$id('stackoverflow-username').value}" height="30" width="40" /></a>` : "";
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
    const joke_card = ($id('joke-card').checked) ? `<h2> Some Programming Humor for you <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width = '32px'></h2>
    <p><img src="https://readme-jokes.vercel.app/api?theme=default" alt="Jokes Card" ></p>` : "";

    const blog_post = (($id('dev-blog').checked && input_check('dev-username')) || ($id('medium-blog').checked && input_check('medium-username')) || ($id('personal-blog').checked && input_check('rss-username'))) ? `<h3> Blogs posts </h3>
    <!-- BLOG-POST-LIST:START -->
    <!-- BLOG-POST-LIST:END -->` : "";

    const blog_post_code = `name: Latest blog post workflow
    on:
      schedule:
        # Runs every hour
        - cron: "0 * * * *"
    jobs:
      update-readme-with-blog:
        name: Update this repo's README with latest blog posts
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: gautamkrishnar/blog-post-workflow@master
            with:
              comment_tag_name: "BLOG-POST-LIST"
              commit_message: "Updated readme with the latest blog data"
              feed_list: "https://dev.to/feed/${$id('dev-username').value}, https://medium.com/feed/${$id('medium-username').value},${$id('rss-username').value}" `;
    const gitLink = `https://github.com/${github}/${github}/new/main?filename=.github/workflows/blog-post-new.yml&value=${blog_post_code}&message=Create%20blog-post-new.yml&description=Created%20for%20adding%20Latest%20blog%20on%20profile%20readme%20file`;
    skill_dis = "";
    for (let index = 0; index < categorizedSkills.length; index++) {
        for (let i = 0; i < categorizedSkills[index].skills.length; i++) {
            check_skill(categorizedSkills[index].skills[i]);
        }
    }

    $id('output').innerHTML = `${banner_image}
${title}
${subtitle}${visitors_count}${github_trophy}${twitter_badge}
    <h2> About Me <img src = "https://media0.giphy.com/media/KDDpcKigbfFpnejZs6/giphy.gif?cid=ecf05e47oy6f4zjs8g1qoiystc56cu7r9tb8a1fe76e05oty&rid=giphy.gif" width = 100px></h2>
    ${about_image}
    <ul>${currently_work}${currently_learning}${looking_to}${looking_for}${my_project}${blog}${ask_me}${reach_me}${my_experience}${fun_fact}
    </ul>
    ${blog_post}
    <h2> Connect with me <img src='https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/handshake.gif' width="100px"> </h2>
    <p align="left">
    ${codepen}${dev}${twitter}${linkedin}${stackoverflow}${codesandbox}${kaggle}${facebook}${instagram}${dribbble}${behance}${medium}${youtube}${codechef}${hackerrank}${codeforces}${leetcode}${hackerearth}${geeksforgeeks}${topcoder}${discord}${rss}
    </p>
    
    <h2> Skills <img src = "https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = 32px> </h2>
    <p align="left">${skill_dis}</p>
    ${support}
    <h2> My GitHub Stats <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='32px'> </h2>
    ${top_skills}${github_metrices}${github_stats}${github_streak}${activity_graph}${wakatime_stats}${stackoverflow_stats}${joke_card}
    `;
    let md = ($id('output').innerHTML).replaceAll('<li>','- ').replaceAll('</li>','').replaceAll('<strong>',' **').replaceAll('</strong>','** ').replaceAll('<ul>','').replaceAll('</ul>','');
    $id('code-block').value = md;
    $id('upload-code').value = blog_post_code;
}
const $id = (id) => {
    return document.getElementById(id);
}
const $name = (name) => {
    return document.getElementsByName(name);
}
$id('edit-area').addEventListener('keyup', generate);
const input_check = (id) => {
    return $id(id).value !== '';
}
const $check = () => {
    return (input_check('title') && input_check('subtitle') && input_check('github-username')) ? true : false;
}
// setInterval(function () { ($check()) ? $id('generate-btn').removeAttribute('disabled') : $id('generate-btn').setAttribute('disabled', 'true') }, 500);
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
const showTab = (evt, tabName) => {
    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $id(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
const showCode = (evt, tabName) => {
    var i, content, tablinks;
    content = document.getElementsByClassName("output-content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("output-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $id(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
$id('github-username').addEventListener('input', add_ons('github'));
$id('wakatime-username').addEventListener('input', add_ons('wakatime'));
$id('stackoverflow-username').addEventListener('input', add_ons('stackoverflow'));
$id('twitter-username').addEventListener('input', add_ons('twitter'));
$id('dev-username').addEventListener('input', add_ons('dev'));
$id('medium-username').addEventListener('input', add_ons('medium'));
$id('rss-username').addEventListener('input', add_ons('rss'));
$id('personal-data').click();
$id('preview').click();
$id('copy-code').addEventListener("click", function () {
    $id('code-block').select();
    document.execCommand("copy");
});
$id('download-code').addEventListener("click", function () {
    var ele = document.createElement("a");
    ele.setAttribute('href', 'data:text/markdown;charset=utf-8, ' + encodeURIComponent($id('code-block').value));
    ele.setAttribute("download", "README.md");
    ele.click();
    ele.remove();
});
const check_skill = (skillId) => {
    skill_dis += ($id(skillId).checked) ? `<a href="${skillWebsites[skillId]}" target="_blank"> <img src="${icons[skillId]}" alt="${skillId}" width="40" height="40"/> </a> ` : "";
}
const skills_list = () => {
    $id('skills-add').innerHTML = ``;
    let val = "";
    console.log(categorizedSkills);
    for (let index = 0; index < categorizedSkills.length; index++) {
        val = `<div class="sub-block"><h3>${categorizedSkills[index].title}</h3><hr>`;
        for (let i = 0; i < categorizedSkills[index].skills.length; i++) {
            val += `<input type="checkbox" name="${categorizedSkills[index].skills[i]}" id="${categorizedSkills[index].skills[i]}" class="skill-checkbox" onchange="generate()">
            <label for="${categorizedSkills[index].skills[i]}" class="skill-label">
            <img src="${icons[categorizedSkills[index].skills[i]]}" alt="${categorizedSkills[index].skills[i]}" width="40px" height="30px" />
            </label>`;
        }
        $id('skills-add').innerHTML += `${val}</div>`;
    }
}
skills_list();
generate();
