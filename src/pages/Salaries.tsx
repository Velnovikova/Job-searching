import React from 'react'
import SalaryChart from '../component/SalaryChart';
import Header from '../component/Header';
import MenuVacancies from '../component/MenuVacancies';
import MainLayout from '../layout/main';
import { Content } from '../style/style';
import { useGraphs } from '../init/useGraphs';
import { ActivityChart } from '../component/ActivityChart';
export default function Salaries() {
  const {salary_medium_per_month,activity_count}=useGraphs()
  return (
    <MainLayout>
      <Content>
        <div style={{width:'50%'}}><SalaryChart  salaries={salary_medium_per_month}/></div>
        <div style={{width:'22%',marginLeft:'auto',marginRight:'10%',alignContent:'center'}}>
          <p style={{margin:0,textAlign:'center'}}>Rating of vacancies</p>
          <ActivityChart activities={activity_count}/>
          </div>
    </Content>
    </MainLayout>
  );
}