import React from "react";
import MenuVacancies from "../component/MenuVacancies";
import { useJobs } from '../init/useJobs';
import JobItem from '../component/JobItem';
import { Content, JobList } from "../style/style";
import MainLayout from "../layout/main";
import { Pagination } from "@mui/material";
import { getJobs } from "../api/quries";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
    

export default function Vacancies() {
    const { list,search,total, handleChangeActivity, handleChangeLevel,handleChangeSkills,handleChangeSalary,handleChangeCurrency,handleChangePage} = useJobs();
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      handleChangePage(value)
    };
    
     
    console.log(Math.ceil(total))
    return (

        <MainLayout>
            <Content>
                <JobList>
                    <h2>Vacancies</h2>
                    {list.map((job) => (
                        <JobItem
                            key={job.id}
                            title={job.title}
                            salary={job.salary}
                            company={job.company}
                            level={job.level}
                            avatar={job.avatar}
                            rating={job.rating}
                            created_at={job.created_at}
                            is_salary={job.is_salary}
                            skills={job.skills}
                            currency={job.currency}
                            activity={job.activity}
                        />
                    ))}
                </JobList>
                <MenuVacancies handleChangeActivity={handleChangeActivity} selectedLevel={search.level} handleChangeLevel={handleChangeLevel} selectedSkills={search.skills} handleChangeSkills={handleChangeSkills}selectedSalary={search.salary} handleChangeSalary={handleChangeSalary} handleChangeCurrency={handleChangeCurrency} selectedCurrency={search.currency}/>
            </Content>
            <Pagination count={total/25} page={page} onChange={handleChange} />
        </MainLayout>

    );
}
