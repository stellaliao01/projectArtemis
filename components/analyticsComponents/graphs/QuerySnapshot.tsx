import React from 'https://esm.sh/react';
import '../../../style/graphs.css';


interface Props {
	queryData: [];
}

 const QuerySnapshot = (props: Props) => {
	const { queryData } = props;

 	 return (
	<div className="graph">
    <table className="table table-striped">
  <thead>
      <tr style={{width: '50%'}}>
       <th style={{width: '50%'}}>API NAME</th>
        <th style={{width: '50%'}}>LATENCY</th>
        <th style={{width: '50%'}}>DATASIZE</th>
       <th style={{width: '50%'}}>REQUESTED FIELDS</th>
        <th style={{width: '50%', color: 'red'}}>SUCCESSFUL QUERY</th>
      </tr>
    </thead>
   <tbody>
     <tr>
     <td>hi</td>
     <td>im</td>
     <td>here</td>
    <td>foo</td>
  </tr>
   </tbody>
   </table>
</div>
	);
 };
//  <td>{queryData[2].latency}</td>
//make table from scratch to be cssed up
//make query data iterable and reusable


export default QuerySnapshot;

