import React from 'https://esm.sh/react';
import '../../style/graphs.css';

interface Props {
	queryData: [];
}

const QuerySnapshot = (props: Props) => {
	const { queryData } = props;

	 return (
		<div className="query-speed-container">
  <table>
   <thead>
     <tr>
       <th>API NAME</th>
       <th>LATENCY</th>
       <th>DATASIZE</th>
       <th>REQUESTED FIELDS</th>
       <th>SUCCESSFUL QUERY</th>

     </tr>
   </thead>
  <tbody>
    <tr>
      <td>{queryData[2].api}</td>
      <td>{queryData[2].latency}</td>
      <td>{queryData[2].dataSize}</td>
      <td>{queryData[2].requestedFields[2]}</td>
      <td>true</td>
    </tr>
  </tbody>
   </table>
	 	</div>
	);
};


export default QuerySnapshot;

