
// let commentId = 0;

let companyNames = [
    {id:1, company:'Facebook',comment:''},
    {id:2, company:'Twitter',comment:''},
    {id:3, company: 'Instagram',comment:''},
    {id:4, company:'Pinterest',comment:''} ,
    {id:5, company:'SalesForce',comment:''},
    {id:6, company:'Youtube',comment:''},
    {id:7, company:'Youtube',comment:''},
]
let id= 8;


let comments = [
    {company: '', comment: ''}
]

module.exports = {
    read: (req, res) => {
        res.status(200).json(companyNames);
    },




    create: (req, res) => {
    const { company,comment} = req.body;
    let newComment = {
     id: id,
     company:company,
     comment: comment,
    }
    //console.log(newComment);
    companyNames.push(newComment);
    id++;
    res.status(200).json(companyNames)

    } ,
    delete:(req,res)=>{
        const{id}=req.params
        const companyIndex = companyNames.findIndex(company => company.id === +id);
        console.log('companyIndex-----', companyIndex);
        companyNames.splice(companyIndex, 1);
        res.status(200).json(companyNames);
    
    },
    edit: (req, res) => {
        const { id } = req.params;
        const { company, comment } = req.body;
        //console.log('commment--------', comment);
        //console.log('Edit Body---------', req.body.city);
        const companyIndex = companyNames.findIndex(company => company.id === +id);
       // console.log('companyIndex--------', companyIndex)
        const updatedCompany = { 
            id: companyNames[companyIndex].id,
            company: company,
            comment: comment
        }
        //console.log('Updated City--------', updatedCity);
        companyNames[companyIndex] = updatedCompany;
        res.status(200).json(companyNames[companyIndex]);
    }




    }

