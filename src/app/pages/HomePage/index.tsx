import * as React from 'react'
import { requests } from '../../data'
import { Header } from '../../components/mol.header'

const HomePage: React.FC = () => {

    const BANANINHA = async () => {
        console.log(await requests.getAll())
    }

    React.useEffect(() => {
        BANANINHA()
    }, [])

    return (
        <div>
            <Header />
            <h1>BANANINHA</h1>
        </div>
    )
}

export default HomePage