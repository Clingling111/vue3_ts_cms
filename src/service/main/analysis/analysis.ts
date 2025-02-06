import myRequest from '@/service'

export const getAmountListData = () => {
  return myRequest.get({
    url: '/goods/amount/list'
  })
}

export const getGoodsCategoryCount = () => {
  return myRequest.get({
    url: '/goods/category/count'
  })
}

export const getGoodsCategorySaleCount = () => {
  return myRequest.get({
    url: '/goods/category/sale'
  })
}

export const getGoodsCategoryFavorCount = () => {
  return myRequest.get({
    url: '/goods/category/favor'
  })
}

export const getGoodsAddressSale = () => {
  return myRequest.get({
    url: '/goods/address/sale'
  })
}
