import Card from "./ui/Card";

export default function Information() {
  const data = [
    { id: 1, title: "Office" },
    { id: 2, title: "" },
    { id: 3, title: "" },
    { id: 4, title: "Documents" },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mr-[14px]">
      {data.map((item, index) => (
        <Card key={index} id={item.id} title={item.title} name={"information"} />
      ))}
    </div>
  );
}
