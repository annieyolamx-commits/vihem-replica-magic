import CategoryListing from "./CategoryListing";
const Page = () => (
  <CategoryListing
    title="Động cơ – Bơm công nghiệp"
    crumb="Động cơ – Bơm"
    groups={[
      { slug: "dong-co-dien", name: "Động cơ điện" },
      { slug: "bom-cong-nghiep", name: "Bơm công nghiệp" },
      { slug: "hop-giam-toc", name: "Hộp giảm tốc" },
    ]}
  />
);
export default Page;