const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}


export default {
    getHomeList: async () => {
        return[
            {
                slug: 'orinals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api-key=${API_KEY}`)     
            },
            {
                slug: 'trending',
                title: 'Recomendamos para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api-key=${API_KEY}`)     
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []     
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []     
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []     
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []     
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []     
            },

        ]
    }
}