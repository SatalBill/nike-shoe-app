import {decorate, observable, action, computed} from "mobx";

import MaxImage1 from "../../../assets/max-blackwhite.png";
import MaxImage2 from "../../../assets/max-bluepink.png";
import MaxImage3 from "../../../assets/max-orange.png";
import MaxImage4 from "../../../assets/max-purple.png";
import MaxImage5 from "../../../assets/max-red.png";
import MaxImage6 from "../../../assets/max-rose.png";
import MaxImage7 from "../../../assets/rib63.png";

import nikeCollection from "../../../assets/nike-collection.jpg";
import adidasCollection from "../../../assets/adidas-collection.jpg";
import converseCollection from "../../../assets/converse-collection.jpg";
import vansCollection from "../../../assets/vans-collection.jpg";

class ProductStore {
  detail_mark = null;

  size_shoes_selected = 0;

  color_shoes_selected = 0;

  mark_selected = 0;

  total_value_cart = 0;

  product = {};

  cart = [];

  favorited = [];

  mark = [
    {
      title: "Nike",
      collection: nikeCollection,
      key: "0",
      products: [
        {
          name: "Nike Air Max St1",
          key: "0",
          price: 345,
          image: MaxImage1,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St2",
          key: "1",
          price: 565,
          image: MaxImage2,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St3",
          key: "2",
          price: 860,
          image: MaxImage3,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St4",
          key: "3",
          price: 370,
          image: MaxImage4,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St5",
          key: "4",
          price: 299,
          image: MaxImage5,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St6",
          key: "5",
          price: 907,
          image: MaxImage6,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Nike Air Max St7",
          key: "6",
          price: 1000,
          image: MaxImage7,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "Adidas",
      collection: adidasCollection,
      key: "10",
      products: [
        {
          name: "Nike",
          key: "0",
          price: 345,
          image: MaxImage1,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "Converse",
      collection: converseCollection,
      key: "20",
      products: [
        {
          name: "Nike",
          key: "0",
          price: 345,
          image: MaxImage1,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "Vans",
      collection: vansCollection,
      key: "30",
      products: [
        {
          name: "Nike",
          key: "0",
          price: 345,
          image: MaxImage1,
          sizes: [
            {id: 0, number: "7"},
            {id: 1, number: "8"},
            {id: 2, number: "9"},
            {id: 3, number: "10"},
            {id: 4, number: "11"},
            {id: 5, number: "11.5"},
          ],
          colors_shoes: [
            {id: 0, color: "#000"},
            {id: 1, color: "#919191"},
            {id: 2, color: "#dbd9b4"},
            {id: 3, color: "#8c7474"},
          ],
          favorited: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  ];

  handleChangeColor(value) {
    this.color_shoes_selected = value;
  }

  handleChangeSize(value) {
    this.size_shoes_selected = value;
  }

  handleChangeMark = (index) => {
    this.mark_selected = index;
  };

  addToCart(index) {
    this.cart.push(this.mark[this.mark_selected].products[index]);
  }

  productDetail(index) {
    this.product = this.mark[this.mark_selected].products[index];
  }

  setProductFavorited(index = null) {
    if (index === null) {
      this.product.favorited = true;
      this.favorited.push(this.product);
      this.mark[this.mark_selected].products[this.product.key].favorited = true;
      return;
    }
    this.mark[this.mark_selected].products[index].favorited = true;
    this.favorited.push(this.mark[this.mark_selected].products[index]);
  }

  calculeteTotalValue() {
    this.total_value_cart = 0;
    this.cart.forEach((item) => {
      this.total_value_cart += item.price;
    });

    return parseFloat(this.total_value_cart).toFixed(2);
  }
}

decorate(ProductStore, {
  detail_mark: observable,
  size_shoes_selected: observable,
  color_shoes_selected: observable,
  mark_selected: observable,
  total_value_cart: observable,
  product: observable,
  cart: observable,
  favorited: observable,
  mark: observable,
  handleChangeColor: action.bound,
  handleChangeSize: action.bound,
  handleChangeMark: action.bound,
  addToCart: action.bound,
  productDetail: action.bound,
  setProductFavorited: action.bound,
  setProductFavorited: action.bound,
  calculeteTotalValue: action.bound,
});

export default new ProductStore();
