import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading"/>
            <p>Fetching Data...</p>
        </div>
    )
}

export default Loader
