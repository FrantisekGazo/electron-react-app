import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'green' : 'white'};
  color: ${props => props.primary ? 'white' : 'green'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  
  &:hover {
      background: ${props => props.primary ? 'white' : 'green'};
      color: ${props => props.primary ? 'green' : 'white'};
  }
`

export default Button