/**
 * @description: 获取图片列表
 * @param {object} params
 * @return {promise}
 */
export const getAllBallList = (): Promise<{ code: number; data: Balls[] }> => {
  return Promise.resolve({
    code: 200,
    data: [
      {
        id: 1,
        name: '1688网球场',
        address: '浙江省温州市瑞安市滨江大道1228号',
        lng: 120.650133,
        lat: 27.756337,
        openingHours: '周一至周日 08:00-22:00',
        price: '100/小时',
        imgurl: 'https://img.alicdn.com/imgextra/i3/2207408715234/O1CN01J8X3gC1JZJ6Z9X8v3_!!2207408715234.jpg',
      },
      {
        id: 2,
        name: '钱塘阳光假日酒店-网球场',
        address: '温州市瑞安市阳光路8号裙楼东首4层屋顶',
        lng: 120.655439,
        lat: 27.786378,
        openingHours: '周一至周日 08:00-22:00',
        price: '100/小时',
        imgurl: 'https://img.alicdn.com/imgextra/i3/2207408715234/O1CN01J8X3gC1JZJ6Z9X8v3_!!2207408715234.jpg',
      },
    ],
  })
}

export const getDetailbyId = (): Promise<any> => {
  return Promise.resolve({

  })
}

export interface Balls {
  id: number
  name: string
  address: string
  lng: number
  lat: number
  openingHours: string
  price: string
  imgurl: string
}
