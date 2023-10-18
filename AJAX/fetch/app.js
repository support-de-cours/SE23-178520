"use strict";

// API Endpoint
const url = 'https://api.spacexdata.com/v3/missions';

// HTML Nodes
const button = document.querySelector('[rel=js-btn-missions]');
const target = document.querySelector('[rel=js-missions]');

// Listen a click on the button
button.onclick = getMissions;


/**
 *  Recupere de la data sur URI et retourne les données en JSON
 */
async function httpGet(uri)
{
    try {
        const response = await fetch(uri);
        const data = await response.json();
        return data;
    }
    catch(e) {
        console.log(e.message);
        return [];
    }
}

// Get missions (url)
async function getMissions()
{
    // console.log("vas chercher les missions... et ne me derange pas tant que tu n'as pas de résultat");
    
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => console.log(error))
    // ;

    const missions = await httpGet(url);


    // Show Missions 
    // console.log( missions);
    Array.from(missions, mission => {

        const node_link = document.createElement('a');
        node_link.textContent = `Info sur la mission #${mission.mission_id}`
        node_link.href = mission.website;
        node_link.target = '_blank';

        const node_name = document.createElement('div');
        node_name.textContent = mission.mission_name;
        node_name.append(node_link);

        target.append(node_name);
        // console.log(mission);
    })
}

// Show mission (on load)
// document.onload = getMissions;
// (() => getMissions())();
getMissions();