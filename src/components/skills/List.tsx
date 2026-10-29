import SkillCircle from "./SkillCircle";
import skillList from "./skills";

const List = () => {
  return (
    <div>
      <ul className="flex gap-10 my-4 p-4">
        {skillList.map((el) => {
          return (
            <li key={el.id} className="">
              <SkillCircle name={el.skill} level={el.proficiency} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
