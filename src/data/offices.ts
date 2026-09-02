export type Office = {
  id: string;
  name: string;
  type: "Headquarters" | "Branch Office" | "Associated Advocate";
  address: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
  email: string;
  isPlaceholder?: boolean;
};

export const offices: Office[] = [
  {
    id: "ranchi-hq",
    name: "Ranchi Headquarters",
    type: "Headquarters",
    address: "Panchratan, Annapoorna Chowk, Nagra Toli",
    city: "Ranchi",
    state: "Jharkhand",
    pin: "834001",
    phone: "+91 9739456288",
    email: "aashyalegal@gmail.com",
    isPlaceholder: false,
  }
];
