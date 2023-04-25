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
// can only use one of SSG or SSR, need to comment one out

// export const getStaticProps = async () => {
//   const ApiData = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

//   return {
//     props: {
//       coinData: ApiData.data
//     },
//     // this allows you to refresh the page at the interval you define, in seconds
//     revalidate: 10,
//   }
// }



// server-side rendering (SSR)
export const getServerSideProps = async () => {
  const ApiData = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

  return {
    props: {
      coinData: ApiData.data,
    },
  }
}



export default CoinList