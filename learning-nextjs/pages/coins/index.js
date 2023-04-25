import Axios from 'axios'

const CoinList = ({ coinData }) => {
  console.log(coinData)
  
  return (
    <div>
      {
        coinData.coins.map(object => {
          return (
            <div>
              <h1>{object.name}</h1>
              <img src={object.icon}/>
              <h3>{object.price}</h3>
            </div>
          )
        })
      }
    </div>
  )
}



// static site generation (SSG)
export const getStaticProps = async ({ params }) => {
  const ApiData = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

  return {
    props: {
      coinData: ApiData.data
    }
  }
}

export default CoinList