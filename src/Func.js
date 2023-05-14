import React from 'react';

function Funс(props) {
    return (
        <div>
            <p>Моя функционаляная компонента!</p>
            {props.visible && <p> Функция Видна!!!</p>}
        </div>

    )
}
export default Funс;