import { useState, useEffect } from "react"

const UseFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [islogin, setIsLogin] = useState(true)


    // ne s'excute qu'au premier render
    useEffect(() => {

        // arreter le chargement des donner si changer de page
        const abortFetch = new AbortController();


        // add timelife 
        setTimeout(() => {
            fetch(url, { signal: abortFetch.signal })
                .then((response) => {
                    if (!response.ok) {
                        throw Error('Fail to laod');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data)
                    setIsLogin(false)
                })
                .catch(error => {
                    if (error.name === "AbortError") {
                        console.log('Aborting fetch data');
                    }
                    console.log(error.message);
                    setError(error.message);
                    setIsLogin(false)
                })
        },)

        // return () => abortFetch.abort();
    }, [url]);
    // [url] means do this from every rendered

    return ({ error, data, islogin });
}

export default UseFetch;