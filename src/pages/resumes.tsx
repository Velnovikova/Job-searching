import Header from "../component/Header";
import react from "react";
import { Content, JobList, ResumesList } from "../style/style";
import MainLayout from "../layout/main";
import MenuResumes from "../component/MenuResumes";
import { useResumes } from "../init/useResumes";
import ResumeItem from "../component/ResumeItem";
export default function Resumes() {
  const { list,search,handleChangeLevel,handleChangeSkills } = useResumes()
  return (
    <MainLayout>
      <Content>
        <ResumesList>
          <h2>Resumes</h2>
          {list.map((resume) => (
            <ResumeItem
              key={resume.id}
              name={resume.name}
              experience={resume.experience}
              level={resume.level}
              skills={resume.tags}
            />
          ))}
        </ResumesList>
        <MenuResumes selectedLevel={search.level} selectedSkills={search.tags} handleChangeLevel={handleChangeLevel} handleChangeSkills={handleChangeSkills}/>
      </Content>
    </MainLayout>
  );
}
