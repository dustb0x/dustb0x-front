// Config
import React from 'react'
import styles from '@/styles/Home.module.css'
import { NEXT_APIS } from '@/config/constants/apis'
import { useMoralis } from 'react-moralis'

// Components
import HeaderSection from './components/HeaderSection'
import NftListSection from './components/NftListSection'
import PageMeta from '@/components/Layout/PageMeta'
import TopNavbar from '@/components/Layout/TopNavbar'

const AppView: React.FC = () => {
  const { authenticate, logout, isAuthenticated, account, chainId } = useMoralis()

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [nfts, setNfts] = React.useState([])

  React.useEffect(() => {
    setIsLoading(true)
    if (isAuthenticated && account && chainId) {
      const params = {
        address: account,
        chain: chainId
      }
      const query = new URLSearchParams(params)
      fetch(`${NEXT_APIS.v1.nfts}?${query}`)
        .then((data) => {
          data.json()
            .then((data) => {
              setNfts(data)
              console.log(data)
              setIsLoading(false)
            })
        })
    } else {
      setNfts([])
      setIsLoading(false)
    }
  }, [isAuthenticated, account, chainId, setNfts])

  return (
    <>
      <PageMeta />
      <TopNavbar
        isAuthenticated={isAuthenticated}
        authenticate={authenticate}
        logout={logout}
      />
      <div className={styles.container}>
        <HeaderSection
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <NftListSection
          isAuthenticated={isAuthenticated}
          account={account}
          nfts={nfts}
        />
        <footer className={styles.footer}>
          &copy; 2022 Dustb0x
        </footer>
      </div>
    </>
  )
}

export default AppView
