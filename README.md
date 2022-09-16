# Influencer Landing Page
A simple landing page for people to list their socials, and generate insight on what people are clicking on the most. This can be useful for finding out which platforms are getter more traction than others.

## First Time Setup
Update the site file so that react knows what to create on the website.

```
const site = {
    name: 'John Doe',
    description: 'A blog about cats and kitkats',
    
    ga: '', // * gaTracking Id
    pfp: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    links: [
        {
            name: 'twitter',
            url: 'https://twitter.com/kitkatcait',
            color: 'bg-blue-500 hover:bg-blue-600',
        },
        {
            name: 'twitch',
            url: 'https://twitch.tv/kitkatcait',
            color: 'bg-purple-500 hover:bg-purple-600',
        },
        {
            name: 'youtube',
            url: 'https://youtube.com/kitkatcait',
            color: 'bg-red-500 hover:bg-red-600',
        },
        {
            name: 'discord',
            url: 'https://discord.gg/kitkatcait',
            color: 'bg-purple-800 hover:bg-purple-900',
        },
        {
            name: 'snapchat',
            url: 'https://snapchat.com/add/kitkatcait',
            color: 'bg-yellow-500 hover:bg-yellow-600',
        }
    ]
```