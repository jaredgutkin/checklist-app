import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';
import  ReactDOM  from 'react-dom';
import TestFetch from './TestFetch';


function Series1() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [name, setName] = useState([])

  useEffect(() => {
    names()
  }, [])

  const names = async () => {
    const response = await fetch('https://surprise-5-api.vercel.app/api/minibrand/seriesNo/1');

    setName(await response.json())
}


  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <Container className="app pt-5">
      <Row >
      <Col className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {name.map((data) => (
            <div key={data.itemNo}>
              <input value={data.itemName} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(data.itemName)}>{data.itemNo} {data.itemName}</span>
            </div>
          ))}
        </div>
      </Col>

      <Col className=''>
      <Stack gap={3}>
      <div className="bg-light border">Items checked are: </div>
      <div className="bg-light border"> {checkedItems} </div>
        </Stack>
      </Col>
      </Row>
    </Container>
  );
}

export default Series1