import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Button1 = ({text, variant, toggleAddTaskForm}) => {
    return (
        <Button onClick={()=>{toggleAddTaskForm()}} variant={variant}>{text}</Button>
    )
}
Button1.defaultProps = {
    variant: 'dark'
}
Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button1
