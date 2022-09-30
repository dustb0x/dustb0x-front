import type { NextApiRequest, NextApiResponse } from 'next'
import { CHAIN_ID } from '@/config/constants/chains'
import Moralis  from 'moralis'
import axios from 'axios'

const getNftMetadataApi = `${process.env.dustb0xApiUri}/nft/metadata`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await Moralis.start({
      apiKey: process.env.moralisApiKey,
    })
  
    const address = typeof req.query.address === 'string' ? req.query.address : ''
    const chain = typeof req.query.chainId === 'string' ? req.query.chainId : ''

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    })
  
    const nftList = []
    for (const nft of response.toJSON()) {
      nftList.push(nft)
    }
  
    const getMetadata = async (
      tokenUri: string | undefined
    ): Promise<any> => {
      const metadata = {
        name: '',
        description: '',
        image: './no_image.png',
        attributes: []
      }
  
      if (tokenUri) {
        const params = { params: { tokenUri } }
        const data = await axios.get(getNftMetadataApi, params)
  
        if (data.data) {
          if (data.data.image.indexOf('ipfs://') !== -1) {
            const str = data.data.image.split('ipfs://')
            metadata.image = `https://ipfs.io/ipfs/${str[1]}`
          } else {
            metadata.image = data.data.image ? data.data.image : './no_image.png'
          }

          // Update metadata.
          metadata.name = data.data.name ? data.data.name : ''
          metadata.description = data.data.description ? data.data.description : ''
          metadata.attributes = data.data.attributes ? data.data.attributes : {}
        }
      }
  
      return metadata
    }
  
    // Get metadata.
    let count = 1
    const responseNftList = []
    for (const nft of nftList) {
      const metadata = await getMetadata(nft.tokenUri)
  
      // Set metadata.
      responseNftList.push({
        id: count,
        chain: nft.chain,
        contractType: nft.contractType,
        tokenAddress: nft.tokenAddress,
        tokenId: nft.tokenId,
        tokenUri: nft.tokenUri,
        metadata,
        name: nft.name,
        symbol: nft.symbol,
        amount: nft.amount,
        blockNumberMinted: nft.blockNumberMinted,
        blockNumber: nft.blockNumber,
        ownerOf: nft.ownerOf,
        tokenHash: nft.tokenHash
      })
      count++
    }
  
    console.log('nftList: ', nftList)
  
    res.status(200).json(responseNftList)
  } catch(e) {
    res.status(500)
  }
}
