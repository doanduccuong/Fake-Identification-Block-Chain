/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ProductInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addProduct"
      | "addSeller"
      | "manufacturerSellProduct"
      | "productItems"
      | "productMap"
      | "productsForSale"
      | "productsManufactured"
      | "productsSold"
      | "productsWithConsumer"
      | "productsWithSeller"
      | "queryProductsList"
      | "querySellersList"
      | "sellerSellProduct"
      | "sellers"
      | "sellersWithManufacturer"
      | "verifyProduct"
      | "viewProductItems"
      | "viewSellers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [BytesLike, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addSeller",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "manufacturerSellProduct",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productItems",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "productMap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productsForSale",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productsManufactured",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productsSold",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "productsWithConsumer",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "productsWithSeller",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queryProductsList",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "querySellersList",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sellerSellProduct",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sellers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellersWithManufacturer",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProduct",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "viewProductItems",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "viewSellers",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addSeller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "manufacturerSellProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "productMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "productsForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productsManufactured",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productsSold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productsWithConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productsWithSeller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryProductsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "querySellersList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellerSellProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellersWithManufacturer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewProductItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewSellers",
    data: BytesLike
  ): Result;
}

export interface Product extends BaseContract {
  connect(runner?: ContractRunner | null): Product;
  waitForDeployment(): Promise<this>;

  interface: ProductInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addProduct: TypedContractMethod<
    [
      _manufactuerID: BytesLike,
      _productName: BytesLike,
      _productSN: BytesLike,
      _productBrand: BytesLike,
      _productPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  addSeller: TypedContractMethod<
    [
      _manufacturerId: BytesLike,
      _sellerName: BytesLike,
      _sellerBrand: BytesLike,
      _sellerCode: BytesLike,
      _sellerNum: BigNumberish,
      _sellerManager: BytesLike,
      _sellerAddress: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  manufacturerSellProduct: TypedContractMethod<
    [_productSN: BytesLike, _sellerCode: BytesLike],
    [void],
    "nonpayable"
  >;

  productItems: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, string] & {
        productId: bigint;
        productSN: string;
        productName: string;
        productBrand: string;
        productPrice: bigint;
        productStatus: string;
      }
    ],
    "view"
  >;

  productMap: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  productsForSale: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  productsManufactured: TypedContractMethod<
    [arg0: BytesLike],
    [string],
    "view"
  >;

  productsSold: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  productsWithConsumer: TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  productsWithSeller: TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  queryProductsList: TypedContractMethod<
    [_sellerCode: BytesLike],
    [[bigint[], string[], string[], string[], bigint[], string[]]],
    "view"
  >;

  querySellersList: TypedContractMethod<
    [_manufacturerCode: BytesLike],
    [[bigint[], string[], string[], string[], bigint[], string[], string[]]],
    "view"
  >;

  sellerSellProduct: TypedContractMethod<
    [_productSN: BytesLike, _consumerCode: BytesLike],
    [void],
    "nonpayable"
  >;

  sellers: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, string, string] & {
        sellerId: bigint;
        sellerName: string;
        sellerBrand: string;
        sellerCode: string;
        sellerNum: bigint;
        sellerManager: string;
        sellerAddress: string;
      }
    ],
    "view"
  >;

  sellersWithManufacturer: TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  verifyProduct: TypedContractMethod<
    [_productSN: BytesLike, _consumerCode: BytesLike],
    [boolean],
    "view"
  >;

  viewProductItems: TypedContractMethod<
    [],
    [[bigint[], string[], string[], string[], bigint[], string[]]],
    "view"
  >;

  viewSellers: TypedContractMethod<
    [],
    [[bigint[], string[], string[], string[], bigint[], string[], string[]]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addProduct"
  ): TypedContractMethod<
    [
      _manufactuerID: BytesLike,
      _productName: BytesLike,
      _productSN: BytesLike,
      _productBrand: BytesLike,
      _productPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addSeller"
  ): TypedContractMethod<
    [
      _manufacturerId: BytesLike,
      _sellerName: BytesLike,
      _sellerBrand: BytesLike,
      _sellerCode: BytesLike,
      _sellerNum: BigNumberish,
      _sellerManager: BytesLike,
      _sellerAddress: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "manufacturerSellProduct"
  ): TypedContractMethod<
    [_productSN: BytesLike, _sellerCode: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "productItems"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, string] & {
        productId: bigint;
        productSN: string;
        productName: string;
        productBrand: string;
        productPrice: bigint;
        productStatus: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "productMap"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "productsForSale"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "productsManufactured"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "productsSold"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "productsWithConsumer"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "productsWithSeller"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "queryProductsList"
  ): TypedContractMethod<
    [_sellerCode: BytesLike],
    [[bigint[], string[], string[], string[], bigint[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "querySellersList"
  ): TypedContractMethod<
    [_manufacturerCode: BytesLike],
    [[bigint[], string[], string[], string[], bigint[], string[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "sellerSellProduct"
  ): TypedContractMethod<
    [_productSN: BytesLike, _consumerCode: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sellers"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, string, string] & {
        sellerId: bigint;
        sellerName: string;
        sellerBrand: string;
        sellerCode: string;
        sellerNum: bigint;
        sellerManager: string;
        sellerAddress: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "sellersWithManufacturer"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyProduct"
  ): TypedContractMethod<
    [_productSN: BytesLike, _consumerCode: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "viewProductItems"
  ): TypedContractMethod<
    [],
    [[bigint[], string[], string[], string[], bigint[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "viewSellers"
  ): TypedContractMethod<
    [],
    [[bigint[], string[], string[], string[], bigint[], string[], string[]]],
    "view"
  >;

  filters: {};
}
