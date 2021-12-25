import styled from 'styled-components';

import React from 'react'

const Home = () => {
  return (
		<Container>
			<h2>hello</h2>
			<h2>hello</h2>
			<h2>hello</h2>
			<h2>hello</h2>
			<h2>hello</h2>
			<h2>hello</h2>
		</Container>
	);
}

const Container = styled.div`
  position: relative;
  background: url('/images/home-background.png');
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw * 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export default Home;
