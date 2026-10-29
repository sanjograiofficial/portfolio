import SkillCircle from "./SkillCircle";
import skillList from "./skills";

const List = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 my-4 p-4">
        {skillList.map((el) => (
          <li key={el.id}>
            <SkillCircle name={el.skill} level={el.proficiency} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
