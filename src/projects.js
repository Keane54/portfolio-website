export const projects = [
    {
        title: 'BookaBuilderUK Ticket System',
        desc: `We needed to implement a ticket system at BookaBuilder to
        categorise and track customer queries and complaints, as well as internal
        issues. I led development on the ticket system and built both the front-end components 
        and back-end API to handle submissions.`,
        technologies: ['JavaScript', 'PHP', 'HTML', 'CSS'],
        img: '/supportform.webp',
        links: {
            website: {
                widget: '/external.svg',
                url: 'https://support.bookabuilderuk.com/'
            }
        }
    },
    {
        title: 'This portfolio page!',
        desc: `As I needed a place to list all my projects, and without much opportunity
        to use my favourite technologies like React/NextJS at my place of work, 
        I built this portfolio page using NextJS and MaterialUI.`,
        technologies: ['NextJS', 'MaterialUI', 'Emotion/Styled Components'],
        img: '/portfoliocode.webp',
        links: {
            github: {
                widget: '/githubmark.svg',
                url: 'https://github.com/Keane54/portfolio-website'
            }
        }
    },
    {
        title: 'Kineko One-Pager',
        desc: `The Kineko team needed a page for users to view all
        the features & benefits of their product, so working
        with them I designed a page to showcase their platform in a
        fully responsive format.`,
        technologies: ['HTML', 'CSS'],
        img: '/kineko.webp',
        links: {
            github: {
                widget: '/githubmark.svg',
                url: 'https://github.com/Keane54/Kineko-Splashpage',
            },
            website: {
                widget: '/external.svg',
                url: 'https://peaceful-swartz-b5c1a8.netlify.app',
            }
        }
    }
]