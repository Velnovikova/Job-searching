import MenuVacancies from "../component/MenuVacancies";
import { useJobs } from '../init/useJobs';
import JobItem from '../component/JobItem';
import { Content, JobList } from "../style/style";
import MainLayout from "../layout/main";

export default function Vacancies() {
    const { list } = useJobs();
    return (

        <MainLayout>
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
                <MenuVacancies />
            </Content>
        </MainLayout>

    );
}
