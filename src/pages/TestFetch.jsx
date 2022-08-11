import { useEffect, useState } from 'react';

function buildRows(mbsgr) {
    return mbsgr.map((currMbsgr, index) => {
      return (
        <tr key={`${index+currMbsgr.number+currMbsgr.itemName}`}>
          <td className="text-center">
  
            <br />
            {currMbsgr.itemName}
          </td>
  
        </tr>
      );
    });
  }

export default function TestFetch() {
    const [mbsgr, setMbsgr] = useState([]);

    useEffect(() => {
      fetch('https://surprise-5-api.vercel.app/api/minibrand/seriesno/gr')
        .then(response => response.json())
        .then(data => setMbsgr(data))
    }, []);
  return (
    <>
    {buildRows(mbsgr)}
    </>
  )
}

