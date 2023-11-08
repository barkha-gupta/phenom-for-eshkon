export interface dataType {
    id : number,
    title: string,
    short_des: string,
    imageUrl: string,
    long_des: string,
    route_link: string
}

export const roles : dataType[] = [
    {
        id : 1,
        title: 'Hiring Managers',
        short_des: 'Build high performance teams that scale — with insights.',
        imageUrl: '/images/aa1.jpg',
        long_des: 'You need top talent to join your team – fast. But bottlenecks are slowing things down.',
        route_link: 'hiring-managers'
    },
    {
        id : 2,
        title: 'HRIS',
        short_des: 'Modernize and integrate your HR tech stack — with a unified approach.',
        imageUrl: '/images/aa2.jpg',
        long_des: "You're juggling a great deal of diverse and disconnected HR technology solutions.",
        route_link: 'hris'
    },
    {
        id : 3,
        title: 'Talent Marketers',
        short_des: 'Win the hearts and minds of candidates — with relevance.',
        imageUrl: '/images/aa3.jpg',
        long_des: "Time is of the essence for your next best hire — but how do you customize campaigns quickly?",
        route_link: 'talent-marketers'
    },
    {
        id : 4,
        title: 'Recruiters',
        short_des: 'Discover, engage and hire phenomenal people — with speed and velocity.',
        imageUrl: '/images/aa4.jpg',
        long_des: "You need to focus on strategic initiatives, not repetitive, mundane tasks.",
        route_link: 'recruiters'
    },
]

export interface accordionDataType {
    id : number,
    heading: string,
    des: string,
    imgUrl: string
}
export const accordionData = [
    {
        id: 1,
        heading: 'Fill Open Roles Faster',
        des : 'Accelerate hiring with AI recommended candidates, automation for candidate screening and scheduling, and communication tools for real-time hiring team alignment.',
        imgUrl: '/images/p2.png'
    },
    {
        id: 2,
        heading: 'Automate Hiring Tasks',
        des : `Hiring may be a top priority, but it's not your primary job. Automate time-intensive tasks so you can stay focused on your team.`,
        imgUrl: '/images/p3.png'
    },
    {
        id: 3,
        heading: 'Hire for Skills and Develop Your Team',
        des : 'Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.',
        imgUrl: '/images/p1.png'
    },
    {
        id: 4,
        heading: 'Collaborate with Hiring Team',
        des: 'Align on job descriptions, ideal candidate characteristics, must-have skills, and more to make stronger hiring decisions.',
        imgUrl: '/images/p4.png'
    },

]