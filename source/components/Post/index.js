import React, { Component } from 'react';

import moment from 'moment';

//import avatar from '../../theme/assets/homer.png';

import Styles from './styles.m.css';
import PropTypes from "prop-types";

export class Post extends Component {
    static propTypes = {
        avatar:               PropTypes.string.isRequired,
        currentUserFirstName: PropTypes.string.isRequired,
        currentUserLastName:  PropTypes.string.isRequired,
    };

    render () {
        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;
        const currentTime = moment().format('MMMM D h:mm:ss a');
        const userName = `${currentUserFirstName} ${currentUserLastName}`;

        return (
            <section className = { Styles.post } >
                <img alt = 'homer' src = { avatar } />
                <a>{userName}</a>
                <time>{ currentTime }</time>
                <p>произвольный комментарий</p>
            </section>
        );
    }
}