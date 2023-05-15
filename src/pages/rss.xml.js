import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(){
    return rss({
        title: 'Astro Learner | Blog',
        description: 'Learning Astro',
        site: 'https://rs-astro-tut.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: '<language>en-us</language>',
    });
}