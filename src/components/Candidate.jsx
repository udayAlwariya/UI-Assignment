import Card from "./ui/Card";

export default function Candidate() {
  const data = [
    {
      id: 1,
      title: "Student Entity",
    },
    {
      id: 2,
      title: "Information",
    },
    {
      id: 3,
      title: "Accounting",
    },
    {
      id: 4,
      title: "On Board",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mr-[14px]">
      {data.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} name={"candidate"} />
      ))}
    </div>
  );
}
