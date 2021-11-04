import * as React from 'react'
import { requests } from '../../data'
import { Header } from '../../components/'
import { CategoryRow, FeaturedMovie } from '../../components/'
import { Loading } from '../../components/mol.loading'

const HomePage = () => {
    const [movieList, setMovieList] = React.useState<[] | any>([])
    const [featureData, setFeatureData] = React.useState<null | any>(null)
    const [isBlackHeader, setIsBlackHeader] = React.useState<boolean>(false)

    React.useEffect(() => {
        const getAllData = async () => {
            const result = await requests.getAll()
            const originals = result.find((item) => item.slug === "originals")
            const movieIndex = Math.floor(Math.random() * (originals?.items?.length))
            const choosedMovie = originals?.items[movieIndex]
            const choosedInfo = await requests.getMovieInfo(choosedMovie.id, 'tv')
            setFeatureData(choosedInfo)
            setMovieList(result)
        }
        getAllData()
    }, [])

    React.useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setIsBlackHeader(true)
            } else {
                setIsBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <div>
            <Header isBlack={isBlackHeader} />
            {featureData ?
                <FeaturedMovie movie={featureData} />
                : <Loading />
            }
            <section style={{ marginTop: '-100px' }}>
                {movieList?.map((item: any, index: React.Key) => {
                    return (
                        <CategoryRow key={index} title={item.title} item={item} />
                    )
                })}
            </section>
        </div>
    )
}

export default HomePage
