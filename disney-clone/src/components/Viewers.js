import React from 'react';
import styled from 'styled-components';


const Viewers = (props) => {
  return (
		<Container>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
		</Container>
	);
}

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
`

export default Viewers;
