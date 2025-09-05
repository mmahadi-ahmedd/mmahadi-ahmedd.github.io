import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(4, 170, 78), rgb(67, 73, 183)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mahadi",
    lastName: "Ahmed",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a MERN Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Bangladesh'
        },
        {
            emoji: "💼",
            text: "Passionate Developer"
        },
        {
            emoji: "📧",
            text: "ahmedmahadi2003@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/mahadi.ahmed.731",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/mahadi__ahmed/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/mmahadi-ahmedd",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mahadi-ahmed",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey there! I’m Mahadi — a Computer Science engineering student and a passionate developer. I love solving problems with code, building things that actually matter, and exploring the future of technology. When I’m not debugging at 2 AM, you’ll probably find me learning new stacks or brainstorming the next big idea. Passion drives me, code defines me — and I’m just getting started! You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github','ExpressJS',  'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'C', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'video-editing',
            emoji: '🎞'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://botaniq-d3923.web.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have   it.                    // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://job-bee-c907e.web.app/",
            image: mock2
        }
    ]
}