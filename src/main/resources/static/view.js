updateObservationList()
updateStationList()

function removeElements() {
    const removalService = document.querySelectorAll("#remove")
    removalService.forEach(element => {
        element.remove();
    })
}

/**
 * Fetches a list of all stations and dynamically creates options for the station dropdown menu
 * @returns {Promise<void>}
 */

async function updateStationList() {
    const url = "api/get-all-stations"
    const response = await fetch(url);
    const data = await response.json();

    const inputStationIdDropDown = document.getElementById("inputStationId")
    const stationSelectorDropDown = document.getElementById("stationSelector")

    data.forEach(station => {
        const stationOption = document.createElement("option");
        stationOption.setAttribute("value", station.stationId);
        stationOption.textContent = station.stationCode + "-" + station.stationId;
        inputStationIdDropDown.appendChild(stationOption);
    })

    data.forEach(station => {
        const stationOption = document.createElement("option");
        stationOption.setAttribute("value", station.stationId);
        stationOption.textContent = station.stationCode + "-" + station.stationId;
        stationSelectorDropDown.appendChild(stationOption);
    })
}

/**
 * Fetches a list of all observations and displays them dynamically on index.html
 */

async function updateObservationList() {
    const url = "/api/get-all-observations";
    const response = await fetch(url);
    const data = await response.json();

    const tableBody = document.getElementById("table-body");
    const averageTemperature = document.getElementById("averageTemperature");

    const selector = document.getElementById("stationSelector").value;

    let sum = 0;
    let iteration = 0;

    removeElements();

    data.forEach(observation => {
        if(selector == 0) {
            const tableRow = document.createElement("tr");
            tableRow.setAttribute("id", "remove");
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
            updateButton.setAttribute("data-bs-target", "#updateObservationModal");
            updateButton.textContent = "Update";

            /**
             * Transfers all object values unto input fields in the Update Observation modal,
             * thus making the values accessible globally, as long as the user is within the Update Observation modal window
             */

            updateButton.onclick = function() {
                let targetObservationId = document.getElementById("updateObservationId");
                targetObservationId.setAttribute("value", observation.observationId);
                let targetStationId = document.getElementById("updateStationId");
                targetStationId.setAttribute("value", observation.station.stationId);
                let targetStationCode = document.getElementById("updateStationCode");
                targetStationCode.setAttribute("value", observation.station.stationCode);
                let targetObservationDateTime = document.getElementById("updateObservationDateTime");
                targetObservationDateTime.removeAttribute("value");
                targetObservationDateTime.setAttribute("value", observation.observationDateTime);
                let targetRegistrationDateTime = document.getElementById("updateRegistrationDateTime");
                targetRegistrationDateTime.removeAttribute("value");
                targetRegistrationDateTime.setAttribute("value", observation.registrationDateTime);
                let targetUpdateTemperature = document.getElementById("updateTemperature");
                targetUpdateTemperature.setAttribute("value", observation.temperature);
            }

            updateObservationContainer.appendChild(updateButton);

            const deleteObservationContainer = document.createElement("td");
            deleteObservationContainer.setAttribute("class", "text-center");
            tableRow.appendChild(deleteObservationContainer);

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            deleteButton.setAttribute("class", "btn btn-danger m-auto");
            deleteButton.setAttribute("data-bs-toggle", "modal");
            deleteButton.setAttribute("data-bs-target", "#deleteObservationModal");
            deleteButton.textContent = "Delete";

            deleteButton.onclick = function() {
                let targetDeleteObservationId = document.getElementById("deleteObservationId");
                targetDeleteObservationId.setAttribute("value", observation.observationId);
            }
            deleteObservationContainer.appendChild(deleteButton);

            /**
             * Sums temperature of all selected observations and divides it by the number of iterations,
             * thereby getting the average temperature
             */

            sum += observation.temperature;
            iteration++;
            console.log(sum)
            console.log(iteration)
            console.log(sum /= iteration)

            averageTemperature.textContent = (sum /= iteration).toString();
        }
        else if(selector == observation.station.stationId) {
            const tableRow = document.createElement("tr");
            tableRow.setAttribute("id", "remove");
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
            updateButton.setAttribute("data-bs-target", "#updateObservationModal");
            updateButton.textContent = "Update";

            /**
             * Transfers all object values unto input fields in the Update Observation modal,
             * thus making the values accessible globally, as long as the user is within the Update Observation modal window
             */

            updateButton.onclick = function() {
                let targetObservationId = document.getElementById("updateObservationId");
                targetObservationId.setAttribute("value", observation.observationId);
                let targetStationId = document.getElementById("updateStationId");
                targetStationId.setAttribute("value", observation.station.stationId);
                let targetStationCode = document.getElementById("updateStationCode");
                targetStationCode.setAttribute("value", observation.station.stationCode);
                let targetObservationDateTime = document.getElementById("updateObservationDateTime");
                targetObservationDateTime.removeAttribute("value");
                targetObservationDateTime.setAttribute("value", observation.observationDateTime);
                let targetRegistrationDateTime = document.getElementById("updateRegistrationDateTime");
                targetRegistrationDateTime.removeAttribute("value");
                targetRegistrationDateTime.setAttribute("value", observation.registrationDateTime);
                let targetUpdateTemperature = document.getElementById("updateTemperature");
                targetUpdateTemperature.setAttribute("value", observation.temperature);
            }

            updateObservationContainer.appendChild(updateButton);

            const deleteObservationContainer = document.createElement("td");
            deleteObservationContainer.setAttribute("class", "text-center");
            tableRow.appendChild(deleteObservationContainer);

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            deleteButton.setAttribute("class", "btn btn-danger m-auto");
            deleteButton.setAttribute("data-bs-toggle", "modal");
            deleteButton.setAttribute("data-bs-target", "#deleteObservationModal");
            deleteButton.textContent = "Delete";

            deleteButton.onclick = function() {
                let targetDeleteObservationId = document.getElementById("deleteObservationId");
                targetDeleteObservationId.setAttribute("value", observation.observationId);
            }
            deleteObservationContainer.appendChild(deleteButton);

            /**
             * Sums temperature of all selected observations and divides it by the number of iterations,
             * thereby getting the average temperature
             */
            sum += observation.temperature;
            iteration++;
            console.log(sum)
            console.log(iteration)
            console.log(sum /= iteration)

            averageTemperature.textContent = (sum /= iteration).toString();
        }
    });
}

/**
 * Allows the user to create a new observation through the Create Observation modal
 */

function createObservation() {

    const createObservationObject = {
        "observationDateTime": document.getElementById("inputObservationDateTime").value,
        "registrationDateTime": document.getElementById("inputRegistrationDateTime").value,
        "temperature": document.getElementById("inputTemperature").value,
        "station": {
            "stationId": document.getElementById("inputStationId").value
        }
    }

    const createObservationBody = JSON.stringify(createObservationObject);
    const insertObservationURL = "/api/create-observation";

    const createRequestObject = {
        headers:{
            'Content-Type':'application/json',
        },
        method:'POST',
        body: createObservationBody
    }

    fetch(insertObservationURL, createRequestObject)
        .then(() => {location.reload()})
}

/**
 * Allows the user to update an observation through the Update Observation modal
 */

function updateObservation() {

    const updateObservationObject = {
        "observationId": document.getElementById("updateObservationId").value,
        "observationDateTime": document.getElementById("updateObservationDateTime").value,
        "registrationDateTime": document.getElementById("updateRegistrationDateTime").value,
        "temperature": document.getElementById("updateTemperature").value,
        "station": {
            "stationId": document.getElementById("updateStationId").value,
            "stationCode": document.getElementById("updateStationCode").value
        }
    }

    const updateObservationBody = JSON.stringify(updateObservationObject);
    const updateObservationURL = "/api/update-observation/" + document.getElementById("updateObservationId").value;

    const updateRequestObject = {
        headers:{
            'Content-Type':'application/json',
        },
        method:'PUT',
        body: updateObservationBody
    }

    fetch(updateObservationURL, updateRequestObject)
        .then(() => {location.reload()})
}

/**
 * Allows the user to delete an observation through the Delete Observation modal
 */

function deleteObservation() {
    const deleteObservationURL = "/api/delete-observation/" + document.getElementById("deleteObservationId").value;

    const deleteRequestObject = {
        method:'DELETE'
    }

    fetch(deleteObservationURL, deleteRequestObject)
        .then(() => {location.reload()})
}