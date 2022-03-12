import { InputGroup, FormControl } from "react-bootstrap"

const Input = ({...props}) => {
    return (
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">{props.label}</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </InputGroup>
    )
}

export default Input