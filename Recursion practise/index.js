const company = {
    accounts: [{ name : "john", salary : 1600 },
                { name : "mary", salary : 1400 }],

    development:{ rd:[{name:"Andrew", salary:3000},
                       { name: "smith", salary:2700}],

                    imp:[{name: "smith", salary: 2700}]
        
                }
}

function CalculateSalary(parameter){
    if (Array.isArray(parameter)){
        return parameter.reduce((total=0, person) => total + person.salary,0);
    }
       else{
           for(const dept of depts){
               let total_salary=0;
               for(const dept of depts){
                   total_salary+=CalculateSalary(dept)
               }
                   return total_salary; 
                }  
            }
        }
CalculateSalary(company);