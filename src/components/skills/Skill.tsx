import List from "./List";

const Skill = () => {
  return (
    <div className="h-screen w-full flex flex-col p-4 items-center bg-gray-500/50">
      <h1 className="text-7xl font-bold">My skills: </h1>
      <div className="skills h-full flex items-center">
        <List />
      </div>
    </div>
  );
};

export default Skill;
