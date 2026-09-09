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
  map: string;
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
    map: 'https://maps.google.com/?q=Panchratan,+Annapoorna+Chowk,+Nagra+Toli,+Ranchi,+Jharkhand+-+834001',
  },
  {
    id: "Patna-branch",
    name: "Patna Branch Office",
    type: "Branch Office",
    address: "Divya Anand, Plot Number- 213, Kautilya Nagar Vidhayak Colony, Behind Boys Veterinary Hostel,PO BV College, Raza Bazar",
    city: "Patna",
    state: "Bihar",
    pin: "800014",
    phone: "+91 9739456288",
    email: "aashyalegal@gmail.com",
    isPlaceholder: false,
    map: 'https://maps.app.goo.gl/YbTc3uDGx8YDc5tT9'
  },
  {
    id: "Delhi-branch",
    name: "Delhi-Branch Office",
    type: "Branch Office",
    address: "D-280 Nawada Housing Complex Kakrola Mode, New Delhi",
    city: "Delhi",
    state: "",
    pin: "110059",
    phone: "+91 9739456288",
    email: "aashyalegal@gmail.com",
    isPlaceholder: false,
    map: 'https://maps.app.goo.gl/ZSy86mkN7wQUFXjR9'
  },
  {
    id: "Kerala-branch",
    name: "Kerala-Branch Office",
    type: "Branch Office",
    address: "Kunnoth, kiliyanthara (P.O),Iritty, ",
    city: "Kannur",
    state: "Kerala",
    pin: "670706",
    phone: "+91 9739456288",
    email: "aashyalegal@gmail.com",
    isPlaceholder: false,
    map: 'https://maps.app.goo.gl/4jHFoAFd8i1wuvuF7'
  },
];
