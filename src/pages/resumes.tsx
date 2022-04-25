import React from "react";
import { useState } from "react";
import { Content, JobList, ResumesList } from "../style/style";
import { Pagination } from "@mui/material";
import MainLayout from "../layout/main";
import MenuResumes from "../component/MenuResumes";
import { useResumes } from "../init/useResumes";
import ResumeItem from "../component/ResumeItem";

export default function Resumes() {
  
  const { list, search, total, handleChangeLevel, handleChangeSkills,handleChangeExperience, handleChangePage } = useResumes();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handleChangePage(value)
  };
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
              avatar={resume.avatar}
            />
          ))}
        </ResumesList>
        <MenuResumes selectedLevel={search.level} selectedSkills={search.tags} selectedExperience={search.experience} handleChangeLevel={handleChangeLevel} handleChangeSkills={handleChangeSkills} handleChangeExperience={handleChangeExperience} />
      </Content>
      <Pagination count={total / 25} page={search.page} onChange={handleChange} />
    </MainLayout>
  );
}
