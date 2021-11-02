import * as React from 'react'
import { requests } from '../../data'
import { Header } from '../../components/'
import { CategoryRow } from '../../components/'

const HomePage = () => {
    const [movieList, setMovieList] = React.useState<[] | any>([])

    const getAllData = async () => {
        const result = await requests.getAll()
        setMovieList(result)
    }

    React.useEffect(() => {
        getAllData()
        console.log(movieList)
    }, [])

    return (
        <div>
            <Header />
            {movieList?.map((item: any, index: React.Key) => {
                console.log(item)
                return (
                    <CategoryRow key={index} title={item.title} item={item} />
                )
            })}
        </div>
    )
}

export default HomePage
