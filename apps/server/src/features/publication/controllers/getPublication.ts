import { Request, Response } from 'express'

export function getPublication(
    request: Request<{ id: string }>,
    response: Response,
) {
    const id = request.params.id
    // TODO: get publication by "id" in publication models
    response.send({
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
    })
}
