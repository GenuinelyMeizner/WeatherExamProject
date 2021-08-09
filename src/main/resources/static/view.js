updateObservationList()

/**
 * Fetches a list of all observations and displays them dynamically on index.html
 */

async function updateObservationList() {
    const url = "/api/get-all-observations";
    const response = await fetch(url);
    const data = await response.json();

    const tableBody = document.getElementById("table-body");

    data.forEach(observation => {

        const tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);

        const observationId = document.createElement("td");
        observationId.textContent = observation.observationId;
        tableRow.appendChild(observationId);

        const stationId = document.createElement("td");
        stationId.textContent = observation.station.stationId;
        tableRow.appendChild(stationId);

        const stationCode = document.createElement("td");
        stationCode.textContent = observation.station.stationCode;
        stationCode.setAttribute("id", "stationCode");
        tableRow.appendChild(stationCode);

        const observationDateTime = document.createElement("td");
        observationDateTime.textContent = observation.observationDateTime;
        tableRow.appendChild(observationDateTime);

        const registrationDateTime = document.createElement("td");
        registrationDateTime.textContent = observation.registrationDateTime;
        tableRow.appendChild(registrationDateTime);

        const temperature = document.createElement("td");
        temperature.textContent = observation.temperature;
        tableRow.appendChild(temperature);

        const heatwave = document.createElement("td");
        tableRow.appendChild(heatwave);

        const heatwaveCheckbox = document.createElement("input");
        heatwaveCheckbox.setAttribute("class", "form-check input m-auto");
        heatwaveCheckbox.setAttribute("type", "checkbox");
        if(observation.temperature >= 25) {
            heatwaveCheckbox.checked = true;
        }
        heatwaveCheckbox.disabled = true;
        heatwave.appendChild(heatwaveCheckbox);

        const updateObservationContainer = document.createElement("td");
        updateObservationContainer.setAttribute("class", "text-center");
        tableRow.appendChild(updateObservationContainer);

        const updateButton = document.createElement("button");
        updateButton.setAttribute("type", "button");
        updateButton.setAttribute("class", "btn btn-info m-auto");
        updateButton.setAttribute("data-bs-toggle", "modal");
        updateButton.setAttribute("data-bs-target", "#updateObservationModal")
        updateButton.textContent = "Update";
        updateObservationContainer.appendChild(updateButton);

        const deleteObservationContainer = document.createElement("td");
        deleteObservationContainer.setAttribute("class", "text-center");
        tableRow.appendChild(deleteObservationContainer);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("class", "btn btn-danger m-auto");
        deleteButton.setAttribute("onclick", "//TO DO//");
        deleteButton.textContent = "Delete";
        deleteObservationContainer.appendChild(deleteButton);
    });
}

/**
 * Allows the user to create a new observation through the Create Observation modal
 */

function createObservation() {

    const observationObject = {
        "observationDateTime": document.getElementById("inputObservationDateTime").value,
        "registrationDateTime": document.getElementById("inputRegistrationDateTime").value,
        "temperature": document.getElementById("inputTemperature").value,
        "station": {
            "stationCode": document.getElementById("inputStationCode").value
        }
    }

    const observationBody = JSON.stringify(observationObject);
    const insertObservationURL = "/api/create-observation";

    const requestObject = {
        headers:{
            'Content-Type':'application/json',
        },
        method:'POST',
        body: observationBody
    }

    fetch(insertObservationURL, requestObject)
        .then(response => response.json())
}

/**
 * Allows the user to update an observation through the Update Observation modal
 */

function updateObservation() {
    const updateStationCode = document.getElementById("stationCode").value;

    console.log(updateStationCode);
}

