import styled from '@emotion/styled';
const Content=styled.div`
display:flex;
`
 const MenuForm = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:auto;
  width:25%;
  padding:0 2%;
`;
const Salary = styled.div`
display:flex;
`;
const LinkList=styled.ul`
display:flex`
const LinkItem = styled.p`
margin-right:50px;
`
const JobList=styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-between;`
const Searching=styled.div`
display:flex;
margin-left:auto;
`
export{
    MenuForm,
    Salary,
    LinkList,
    LinkItem,
    JobList,
    Content,
    Searching
}
