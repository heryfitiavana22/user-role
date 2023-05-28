import { Request, Response } from 'express'

export function getPublications(request: Request, response: Response) {
    // TODO: get all publications in publication models
    response.send([
        {
            id: 1,
            personImg: 'profile/herydj.jpg',
            personName: 'herydj',
            date: 'a minute ago',
            publicationImg: 'publications/event.jpg',
            title: 'aooonnna',
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquam molestias corrupti dolores reprehenderit nisi?',
            isLiked: true,
            likeCounter: 100,
            commentsCounter: 10,
            location: {
                latitude: -18.916591,
                longitude: 47.566842,
            },
        },
        {
            id: 2,
            personImg: 'profile/dj.png',
            personName: 'dj',
            date: 'a minute ago',
            publicationImg: 'publications/capture.png',
            title: '',
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum aliquam molestias corrupti dolores reprehenderit nisi?',
            isLiked: false,
            likeCounter: 100,
            commentsCounter: 10,
            location: {
                latitude: -18.916591,
                longitude: 47.566842,
            },
        },
    ])
}
