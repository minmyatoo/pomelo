import Head from "next/head";
import Meta from "../components/Meta";
import axios from "axios";
import React, {useEffect, useState} from "react";

const about = () => {

    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    let [searchInput, setSearchInput] = useState('');
    const getArticle = () => {
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&q=${searchInput}&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo`)
            .then(response => {
                let results;
                console.log('response', response);
                results = response.data.response.docs;
                if (response.data.response.docs.length === 0) {
                    results = [
                        {headline: {main: "No Results"}, byline: {original: ""}}
                    ];
                }
                setAPIData(response.data.response.docs);
            });
    };

    const clearForm = () => {
        setSearchInput('');
        setFilteredResults([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleChange(e.target.value);
            clearForm();
        }
    };

    const handleChange = (term) => {
        let newInput = term;
        if (newInput) {
            searchInput = newInput;
            getArticle();
        }
    };

    const handleOptionChange = (e) => {
        // let type;
        // if (e.target.innerText === "Articles" || e.target.value === "articles") {
        //     specialtyURL = "search/v2/articlesearch.json?sort=newest&q=";
        // }
        clearForm();
    };
    console.log(searchInput);
    console.log('API: ', APIData);
    return (
        <div>
            <Meta title="About"/>
            <section>
                <h2>About</h2>
                <p>
                    This is about
                </p>
            </section>
            <section>
                <div>
                    {searchInput}
                </div>
                <input type="text" placeholder="search" onKeyPress={handleKeyPress}
                />
                <div>
                    <ul>
                        {APIData.map((item) => {
                            return (
                                <li key={item._id}>{item.abstract}</li> || 'Loading'
                            );
                        })}

                    </ul>
                </div>
            </section>

        </div>
    )
}
export default about