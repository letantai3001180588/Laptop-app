interface IProduct {
  id: string
  name: string
  price: number
  image: string
  banner: string[]
  post: string[]
  discount: number
  star: number
}
interface IChat {
  content: string
  role: string
}

const categories = [
  {
    id: 1,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/f9/bf/f9bf13ff9843115d6edacf7ba01af389.png",
    txt: "macbook",
  },
  {
    id: 2,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/b2/11/b2118350c0f60b9ecb1e8ef65cb2de96.png",
    txt: "hp",
  },
  {
    id: 3,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/9f/72/9f72697b78e17090628020cca9cce5e6.png",
    txt: "asus",
  },
  {
    id: 4,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/c9/ea/c9eac61be9530e9c6c4404ba573086c4.png",
    txt: "dell",
  },
  {
    id: 5,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/0b/90/0b907e4551b7ad8857426905ae627cad.png",
    txt: "lenovo",
  },
  {
    id: 5,
    image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/6a/6f/6a6f7e4792cdbc7946e58e539d1f05f1.png",
    txt: "acer",
  },
]

export {IChat, IProduct, categories}
