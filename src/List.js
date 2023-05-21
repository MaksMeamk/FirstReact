
import React, { useEffect, useState } from "react";

const List = () => {
    const [arr, setarr] = useState([3, 55]);

    const clikk = () => {
        const numb = Math.round(Math.random() * 10)
        setarr([...arr, numb])
    }
    // componentDidMount and ComponentWillUnmount
    useEffect(() => {
        console.log('Список Отображён');
        return (() => { console.log('компонент был удалён') })
    }, [])
    // ComponentDidUpdate 
    useEffect(() => {
        console.log('компонент был обновлён');

    })
    useEffect(() => {
        console.log('Элемент StateArr был обновлён')
    }, [arr])

    // 


    return (
        <>
            <ul>
                {arr.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
            <button onClick={() => clikk()}>add number</button>
        </>
    )
}

export default List;

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { arr: [3, 55] };
//     }
//     componentDidMount() {
//         console.log('Компонент был отабражён');
//     }
//     componentDidUpdate(prevProps, precState) {
//         console.log("Компонент был обновлён")
//         console.log({ prevProps, precState, nextProps: this.props, nextState: this.state })
//     }
//     componentWillUnmount() {
//         console.log('Компонет был удалён')
//     }

//     clikk = () => {
//         const numb = Math.round(Math.random() * 10)
//         this.setState((state) => ({ arr: [...state.arr, numb] }))
//     }

//     render() {
//         return (
//             <>
//                 <ul>
//                     {this.state.arr.map((item, index) =>
//                         <li key={index}>{item}</li>
//                     )}
//                 </ul>
//                 <button onClick={() => this.clikk()}>add number</button>

//             </>
//         )
//     }
// }

// export default List;
