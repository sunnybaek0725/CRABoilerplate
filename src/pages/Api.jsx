import {useEffect, useState} from "react";
import {exampleApi} from '../api/adaptor.api';

function Api() {
    const [isReady, setIsReady] = useState(false);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        exampleApi({}, (error, response) => {
            console.log('exampleApi Response: ', response);
            setIsReady(true);
            setApiData(response);
        })
    }, []);

    return (
        <div>
            Api.jsx
            {
                isReady ? (
                    apiData?.map((item, index) => (
                        <div key={index}>
                            <p>ID: {item.id}</p>
                            <p>Name: {item.name}</p>
                            <p>Year: {item.year}</p>
                            <p>Color: {item.color}</p>
                            <p>Pantone Value: {item.pantone_value}</p>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
}
export default Api;
