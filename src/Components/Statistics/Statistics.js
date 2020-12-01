import React from 'react';
import { StaticticBtn, StaticticList } from './Statistics.styled'
import PropTypes from "prop-types"

const Statistics = ({ good, neutral, bad, setValue }) => {
    let total = good + neutral + bad
    let positiveFeedback = Math.round((good / total) * 100)
    return (
        <section>
            <h2>Please leave feedback</h2>
            <StaticticBtn name="good" onClick={setValue}>Good</StaticticBtn>
            <StaticticBtn name="neutral" onClick={setValue}>Neutral</StaticticBtn>
            <StaticticBtn name="bad" onClick={setValue}>Bad</StaticticBtn>

            <h2>Statistics</h2>

            {total ? <StaticticList>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positiveFeedback ? positiveFeedback : "0"}%</li>
            </StaticticList>
                : <p>No feedback given</p>
            }
        </section>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    setValue: PropTypes.func
}