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