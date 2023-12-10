
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");

const menu = document.getElementById('menu')
const menu_about = document.getElementById('menu_item_about');
const menu_skills = document.getElementById('menu_item_skills');
const menu_projects = document.getElementById('menu_item_projects');
const menu_dash_inner = document.getElementsByClassName('menu_dash_inner');

const skills_arrows = document.getElementsByClassName('arrow');
const skill_database_set = document.getElementsByClassName('skill_database');
const skill_backend_set = document.getElementsByClassName('skill_backend');
const skill_frontend_set = document.getElementsByClassName('skill_frontend');
const skill_deploy_set = document.getElementsByClassName('skill_deploy');

menu_about.onclick = () => {
    window.scrollTo({behavior: "smooth", left: 0, top: about.offsetTop - menu.offsetHeight})
}

menu_skills.onclick = () => {
    window.scrollTo({behavior: "smooth", left: 0, top: skills.offsetTop - menu.offsetHeight})
}

menu_projects.onclick = () => {
    window.scrollTo({behavior: "smooth", left: 0, top: projects.offsetTop - menu.offsetHeight})
}

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

let position = "about";
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
            if (entry.target.id === 'about') {
                if (position === 'skills') {
                    menu_dash_inner[0].classList.remove('menu_dash_animation')
                }
                menu_about.classList.add('menu_item_active')
                menu_skills.classList.remove('menu_item_active')
                menu_projects.classList.remove('menu_item_active')
                position = 'about';
            }
            else if (entry.target.id === 'skills') {
                if (position === 'about') {
                    menu_dash_inner[0].classList.add('menu_dash_animation')
                }
                else if (position === 'projects') {
                    menu_dash_inner[1].classList.remove('menu_dash_animation')
                }
                menu_about.classList.remove('menu_item_active')
                menu_skills.classList.add('menu_item_active')
                menu_projects.classList.remove('menu_item_active')
                position = 'skills'

                setTimeout(() => Array.from(skill_database_set).forEach(element => element.classList.add('skill_active')), 0)
                setTimeout(() =>  skills_arrows[0].classList.add('arrow_hidden_animation'), 700);
                setTimeout(() =>  skills_arrows[1].classList.add('arrow_1_animation'), 700);
                setTimeout(() =>  skills_arrows[2].classList.add('arrow_2_animation'), 700);

                setTimeout(() => Array.from(skill_backend_set).forEach(element => element.classList.add('skill_active')), 1400)
                setTimeout(() =>  skills_arrows[3].classList.add('arrow_hidden_animation'), 1400);
                setTimeout(() =>  skills_arrows[4].classList.add('arrow_1_animation'), 1400);
                setTimeout(() =>  skills_arrows[5].classList.add('arrow_2_animation'), 1400);

                setTimeout(() => Array.from(skill_frontend_set).forEach(element => element.classList.add('skill_active')), 2100)
                setTimeout(() =>  skills_arrows[6].classList.add('arrow_hidden_animation'), 2100);
                setTimeout(() =>  skills_arrows[7].classList.add('arrow_1_animation'), 2100);
                setTimeout(() =>  skills_arrows[8].classList.add('arrow_2_animation'), 2100);

                setTimeout(() => Array.from(skill_deploy_set).forEach(element => element.classList.add('skill_active')), 2800)
                // setTimeout(() =>  skills_arrows[9].classList.add('arrow_hidden_animation'), 2800);
                // setTimeout(() =>  skills_arrows[10].classList.add('arrow_1_animation'), 2800);
                // setTimeout(() =>  skills_arrows[11].classList.add('arrow_2_animation'), 2800);

            }
            else if (entry.target.id === 'projects') {
                if (position === 'skills') {
                    menu_dash_inner[1].classList.add('menu_dash_animation')
                }
                menu_about.classList.remove('menu_item_active')
                menu_skills.classList.remove('menu_item_active')
                menu_projects.classList.add('menu_item_active')
                position = 'projects'
            }
        }
    })
};

let observer = new IntersectionObserver(callback, options);
observer.observe(about);
observer.observe(skills);
observer.observe(projects);

