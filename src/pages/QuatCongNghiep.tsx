import CategoryListing from "./CategoryListing";
const Page = () => (
  <CategoryListing
    title="Quạt công nghiệp"
    crumb="Quạt công nghiệp"
    groups={[
      { slug: "quat-hon-luu", name: "Quạt hỗn lưu" },
      { slug: "quat-ly-tam", name: "Quạt ly tâm" },
      { slug: "quat-huong-truc", name: "Quạt hướng trục" },
    ]}
  />
);
export default Page;