import * as React from 'react'
import { requests } from '../../data'
import { CategoryRow, FeaturedMovie, Header, Loading, Footer } from '../../components'
import { IMovieInfo, IMovieList } from '../../data'
import { FeatureType } from '../../data/request'

const HomePage = () => {
    const [movieList, setMovieList] = React.useState<IMovieList[] | []>([])
    const [featureData, setFeatureData] = React.useState<IMovieInfo | null>(null)
    const [isBlackHeader, setIsBlackHeader] = React.useState<boolean>(false)

    React.useEffect(() => {
        const getAllData = async (): Promise<void> => {
            const result = await requests.getAll()
            const originals = result.find((item) => item.slug === "originals")!
            const movieIndex = Math.floor(Math.random() * (originals?.items?.length))
            const choosedMovie = originals?.items[movieIndex]
            const choosedInfo = await requests.getMovieInfo(choosedMovie.id, FeatureType.tv)
            setFeatureData(choosedInfo)
            setMovieList(result)
            console.log(movieList)
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
                {movieList?.map((item: IMovieList, index: React.Key) => {
                    return (
                        <CategoryRow key={index} title={item.title} item={item} />
                    )
                })}
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
