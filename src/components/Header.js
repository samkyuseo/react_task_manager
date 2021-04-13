import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Button1 from './Button1'

const Header = ({title, toggleAddTaskForm, showAddTask}) => {
    return (
        <header>
            <Row>
                <Col sm={12} md='auto'>
                    <h3>{title} <Button1 text={showAddTask ? 'Close' : 'Add' } variant={!showAddTask ? 'dark' : 'danger' } toggleAddTaskForm={toggleAddTaskForm}></Button1></h3>
                </Col>
            </Row>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
