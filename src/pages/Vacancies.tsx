import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import { useJobs } from '../init/useJobs';
import JobItem from '../component/JobItem';
import { Content, JobList } from "../style/style";

export default function Vacancies() {
    const { list } = useJobs();
    return (
        <main>
            <Header />
            <Content>
                <div>
                    <h2>Vacancies</h2>
                    <JobList>
                    {list.map((job) => (
                        <JobItem
                            key={job.id}
                            title={job.title}
                            salary={job.salary}
                            company={job.company}
                        />
                    ))}
                    </JobList>
                </div>
                <Menu />
        </Content>
        </main>
    );
}
