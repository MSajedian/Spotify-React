import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons'

class TestFontAwesome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
            <FontAwesomeIcon icon={faHome} size="xs" />
        </div>
        );
    }
}

export default TestFontAwesome;