export interface ProductProps {
    _id: string;
    title: string;
    desc: string;
    img: string;
    prices: [number];
    extraOptions: [{ _id: string; text: string; price: number }];
}
