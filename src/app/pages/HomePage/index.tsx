import * as React from 'react'
import { requests } from '../../data'
import { Header } from '../../components/'
import { MovieRow } from '../../components/'

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
            <MovieRow />
            <h1>BANANINHA</h1>
        </div>
    )
}

export default HomePage
