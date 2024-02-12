import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';

const Employeeperformance = () => {
  // Sample employee data
  const [employee, setEmployee] = useState([
    // { id: 1, name: 'John Doe', performance: 85 },
    // { id: 2, name: 'Jane Smith', performance: 92 },
    // { id: 3, name: 'Alice Johnson', performance: 78 },
    // Add more employees as needed
  ]);

  return (
    <div>
    
      <Typography><h1>MY PERFORMANCE</h1></Typography>
      <Typography>EMPLOYEE INFORMATION</Typography>
   
     
<TableContainer>
<Table>
  <TableHead>
  <TableRow>
      
      
          <tr>
           <TableCell> <th>EMPLOYEE NAME</th>  </TableCell>
           <TableCell> <th>EMPLOYEE ID</th></TableCell>
           <TableCell><th>DATE OF CURRENT REVIEW</th></TableCell>
            {/* <th>EMPLOYEE NAME</th>
            <th>EMPLOYEE ID</th>
            <th>DATE OF CURRENT REVIEW</th> */}
          </tr>
          
          <tr>
         
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell><th>POSITION</th></TableCell>
            <TableCell><th>DEPARTMENT</th></TableCell>
            <TableCell><th>DATE OF LAST REVIEW</th></TableCell>
           
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell><th>REVIEW NAME</th></TableCell>
            <TableCell><th>REVIEW TITLE</th></TableCell>
            <TableCell><th>DATE SUBMITED</th></TableCell>
            
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
      
          </TableRow>
          <Typography><b>CHARACTERISTICS</b></Typography>
          </TableHead>
      </Table>
      </TableContainer>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

           <TableCell><th>QUALITY</th></TableCell>
           <TableCell><th>UNSATISFACTORY</th></TableCell>
           <TableCell><th>SATISFACTORY</th></TableCell>
           <TableCell><th>GOOD</th></TableCell>
           <TableCell><th>EXCELENT</th></TableCell>


              </TableRow>
              <TableRow>
          <TableCell> Works to Full Potential</TableCell>
        
         </TableRow>
           <TableRow>
          <TableCell>Quality of Work</TableCell> 
           </TableRow>
           <TableRow>
            <TableCell>Depentancy</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Communication</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Independent Work</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Group Work</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Productivity</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Creativity</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Honesty</TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Integrity</TableCell>
              </TableRow> 
            </TableHead>
          </Table>
        </TableContainer>
        

      
          
          {employee.map(employee => (
            <tr key={employee.id}>
               <td>{employee.name}</td>
              <td>{employee.id}</td>
             
              <td>{employee.currentreview}</td>
            </tr>

           
            
          ))}
          
    
    </div>
  );
};
export default Employeeperformance;
