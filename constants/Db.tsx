interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

const products: IProduct[] = [
  {
    id: "1",
    name: "Laptop ASUS TUF Gaming A15 FA506NCR-HN047W",
    price: 500,
    image:
      "https://anphat.com.vn/media/product/50031_laptop_asus_tuf_gaming_a15_fa506ncr_hn047w___2_.jpg",
  },
  {
    id: "2",
    name: "Macbook Air 2020 13 i3 1.1GHz/8GB/256GB",
    price: 300,
    image: "https://bachlongstore.vn/vnt_upload/product/02_2024/45671.png",
  },
  {
    id: "3",
    name: "Laptop ASUS Vivobook 14 OLED A1405VA-KM257W",
    price: 150,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_16__5_19.png",
  },
  {
    id: "4",
    name: "Laptop Lenovo LOQ 15IAX9 83GS001QVN",
    price: 80,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_45__3_13.png",
  },
  {
    id: "5",
    name: "Laptop ASUS TUF Gaming A15 FA506NCR-HN047W",
    price: 80,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_32__2_27.png",
  },
];

const categories = [
  {
    id: 1,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/f9/bf/f9bf13ff9843115d6edacf7ba01af389.png",
  },
  {
    id: 2,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/b2/11/b2118350c0f60b9ecb1e8ef65cb2de96.png",
  },
  {
    id: 3,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/9f/72/9f72697b78e17090628020cca9cce5e6.png",
  },
  {
    id: 4,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/c9/ea/c9eac61be9530e9c6c4404ba573086c4.png",
  },
  {
    id: 5,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/0b/90/0b907e4551b7ad8857426905ae627cad.png",
  },
  {
    id: 5,
    image:
      "https://cdnv2.tgdd.vn/mwg-static/common/Category/6a/6f/6a6f7e4792cdbc7946e58e539d1f05f1.png",
  },
];

export { IProduct, products, categories };
