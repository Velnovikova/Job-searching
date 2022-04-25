import MenuVacancies from '../component/MenuVacancies';
import MainLayout from '../layout/main';
import { Content } from '../style/style';
import { CompanyChart } from '../component/CompanyChart';
import CompanyRating from '../component/CompanyRating';
import { useState } from 'react';


export default function Invoices() {
  type Company={
    name:string
    rating:number
  }

  const [companies,setCompanies]=useState<Company[]>([
    {name:'Wolff, Ferry and Yost',rating:10},
    {name:'Roob Inc',rating:4},
    {name:'Renner, Howell and Pouros',rating:1},
    {name:'McGlynn-Aufderhar',rating:7},
    {name:'Hilpert, Collins and Homenick',rating:5},
    {name:'Hahn-Ritchie',rating:13},
    {name:'Bruen Group',rating:8},
    {name:'Nitzsche, Rice and Purdy',rating:11},
    {name:'Zulauf and Sons',rating:6},
    {name:'Nitzsche-Nikolaus',rating:3}
  ])

  const labelsNew=companies.map((item)=>{
    return item.name
  })
  const ratingListNew=companies.map((item)=>{
    return item.rating
  })
  
const handleChangeLike=(label:string):void=>{
    setCompanies(companies.map(item => {
      if(item.name == label) {
        return {
          name: item.name,
          rating: item.rating +1
        };
      }
      return item;
    }))
  }
    
  const handleChangeDislike=(label:string):void=>{
    setCompanies(companies.map(item => {
      if(item.name == label) {
        return {
          name: item.name,
          rating: item.rating -1
        };
      }
      return item;
    }))
  }     
     
  
  
  return (
    <MainLayout>
      <h2 style={{textAlign:'center'}}>Rating of companies</h2>
      <Content>
          <div style={{width:'30%'}}>
            <CompanyChart labels={labelsNew} rating={ratingListNew}/>
          </div>
        <CompanyRating labels={labelsNew} handleChangeLike={handleChangeLike} handleChangeDislike={handleChangeDislike}/>
      </Content>
    </MainLayout>
  );
}
