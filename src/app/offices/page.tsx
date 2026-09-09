import { offices } from "@/data/offices";
import OfficesView from "@/components/offices/offices-view";

export const metadata = {
  title: "Our Offices | Aashya Legal",
  description: "Aashya Legal serves clients across India through its central offices, associated advocates, and professional network.",
};

export default function OfficesPage() {
  return <OfficesView offices={offices} />;
}

