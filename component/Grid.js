import React from 'react';

const Grid = React.memo((props)=>{

    const renderCelebrityData = () => {
        const data = props.celebrityData.map((celebrity, index)=>{
            return (<tr key = {index}>
                        <td>{celebrity.celebrity_name}</td>
                        <td>
                            <img src = {celebrity.banner}></img>
                        </td>
                    </tr>
                )
        });
        return data;
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Celebrity Name</th>
                    <th>Celebrity Picture</th>
                </tr>
            </thead>
            <tbody>{props.celebrityData.length > 0 ? renderCelebrityData(props):''}</tbody>
        </table>
    )
}
)

export default Grid;