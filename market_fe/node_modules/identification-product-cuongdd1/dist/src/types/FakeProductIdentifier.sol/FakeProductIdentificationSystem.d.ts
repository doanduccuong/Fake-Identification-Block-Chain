import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface FakeProductIdentificationSystemInterface extends Interface {
    getFunction(nameOrSignature: "addProduct" | "buyProduct" | "getProductDetails" | "owner" | "products" | "sellProduct" | "verifyProduct"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ProductEvent" | "ProductVerified"): EventFragment;
    encodeFunctionData(functionFragment: "addProduct", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "buyProduct", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProductDetails", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "products", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sellProduct", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyProduct", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProductDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sellProduct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyProduct", data: BytesLike): Result;
}
export declare namespace ProductEventEvent {
    type InputTuple = [
        productId: BigNumberish,
        actor: AddressLike,
        action: string,
        additionalInfo: string,
        productEventAction: BigNumberish
    ];
    type OutputTuple = [
        productId: bigint,
        actor: string,
        action: string,
        additionalInfo: string,
        productEventAction: bigint
    ];
    interface OutputObject {
        productId: bigint;
        actor: string;
        action: string;
        additionalInfo: string;
        productEventAction: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProductVerifiedEvent {
    type InputTuple = [productId: BigNumberish, verifier: AddressLike];
    type OutputTuple = [productId: bigint, verifier: string];
    interface OutputObject {
        productId: bigint;
        verifier: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface FakeProductIdentificationSystem extends BaseContract {
    connect(runner?: ContractRunner | null): FakeProductIdentificationSystem;
    waitForDeployment(): Promise<this>;
    interface: FakeProductIdentificationSystemInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addProduct: TypedContractMethod<[
        _name: string,
        _productId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    buyProduct: TypedContractMethod<[
        _productId: BigNumberish
    ], [
        void
    ], "payable">;
    getProductDetails: TypedContractMethod<[
        _productId: BigNumberish
    ], [
        [string, string, boolean]
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    products: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            boolean
        ] & {
            name: string;
            productId: bigint;
            manufacturer: string;
            isVerified: boolean;
        }
    ], "view">;
    sellProduct: TypedContractMethod<[
        _productId: BigNumberish,
        _buyer: AddressLike,
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    verifyProduct: TypedContractMethod<[
        _productId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addProduct"): TypedContractMethod<[
        _name: string,
        _productId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "buyProduct"): TypedContractMethod<[_productId: BigNumberish], [void], "payable">;
    getFunction(nameOrSignature: "getProductDetails"): TypedContractMethod<[
        _productId: BigNumberish
    ], [
        [string, string, boolean]
    ], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "products"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            bigint,
            string,
            boolean
        ] & {
            name: string;
            productId: bigint;
            manufacturer: string;
            isVerified: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "sellProduct"): TypedContractMethod<[
        _productId: BigNumberish,
        _buyer: AddressLike,
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "verifyProduct"): TypedContractMethod<[_productId: BigNumberish], [void], "nonpayable">;
    getEvent(key: "ProductEvent"): TypedContractEvent<ProductEventEvent.InputTuple, ProductEventEvent.OutputTuple, ProductEventEvent.OutputObject>;
    getEvent(key: "ProductVerified"): TypedContractEvent<ProductVerifiedEvent.InputTuple, ProductVerifiedEvent.OutputTuple, ProductVerifiedEvent.OutputObject>;
    filters: {
        "ProductEvent(uint256,address,string,string,uint8)": TypedContractEvent<ProductEventEvent.InputTuple, ProductEventEvent.OutputTuple, ProductEventEvent.OutputObject>;
        ProductEvent: TypedContractEvent<ProductEventEvent.InputTuple, ProductEventEvent.OutputTuple, ProductEventEvent.OutputObject>;
        "ProductVerified(uint256,address)": TypedContractEvent<ProductVerifiedEvent.InputTuple, ProductVerifiedEvent.OutputTuple, ProductVerifiedEvent.OutputObject>;
        ProductVerified: TypedContractEvent<ProductVerifiedEvent.InputTuple, ProductVerifiedEvent.OutputTuple, ProductVerifiedEvent.OutputObject>;
    };
}
