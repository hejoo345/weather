import React from 'react';

const WeekItem = ({weather}) => {
    return(
            <li>{weather.dt}</li>
    )};

export default WeekItem;