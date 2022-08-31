import Landing from "../pages/landing";
import { IAppPath } from "../interface/app.path";
import AboutUs from "../pages/about-us";
import ContractUs from "../pages/contract-us";
import OfficialStore from "../pages/official-store";
import LetOneSelfOn from "../pages/collection";

import AllProduct from "../pages/all-product";
import Product from "../pages/product";
import ProductDetail from "../pages/product-detail";

export const BASE_PATH = "";

export const PATH = {
  LANDING: "LANDING",
  ABOUT_US: "ABOUT_US",
  CONTRACT_US: "CONTRACT_US",
  OFFICIAL_STORE: "OFFICIAL_STORE",
  SETONESELFON: "SETONESELFON",
  PRODUCT: "PRODUCT",
  ALL_PRODUCT: "ALL_PRODUCT",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
};

export const APP_PATH: { [key: string]: IAppPath } = {
  [PATH.LANDING]: {
    element: Landing,
    path: "/",
  },
  [PATH.ABOUT_US]: {
    element: AboutUs,
    path: "/about-us",
  },
  [PATH.OFFICIAL_STORE]: {
    element: OfficialStore,
    path: "/official-store",
  },
  [PATH.CONTRACT_US]: {
    element: ContractUs,
    path: "/contract-us",
  },
  [PATH.SETONESELFON]: {
    element: LetOneSelfOn,
    path: "/let-one-self-on",
  },
  [PATH.PRODUCT]: {
    element: Product,
    path: "/product",
  },
  [PATH.ALL_PRODUCT]: {
    element: ProductDetail,
    path: "/product/:id",
  },
  [PATH.PRODUCT_DETAIL]: {
    element: AllProduct,
    path: "/all-product",
  },
};

export const IMAGE_PATH = {
  LOGO: `${BASE_PATH}/assets/logos/logo.png`,
  EMPTYBOX: `${BASE_PATH}/images/empty-box.png`,
  BACKGROUND: `${BASE_PATH}/images/background-main.png`,
};
