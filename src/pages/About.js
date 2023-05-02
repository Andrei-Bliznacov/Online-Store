
import styled from 'styled-components';
import React from 'react';

const ComponentButton = styled.button `
background-color:red;
font-size: 25px;
color:blue;
border-radius:10px;
`
const ButtonAdd = styled(ComponentButton)`
background-color:orange;
`
const SectionAbout = styled.div`
border:4px solid green;
h1{
  color: blue;

}
`
function About() {
  return (
    <SectionAbout>
      <h1>Hello</h1>
      <ComponentButton> Send </ComponentButton>
      <ButtonAdd>Add</ButtonAdd>
    </SectionAbout>
  )
}

export default About