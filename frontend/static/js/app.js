let latestAnalysis = null;


window.onload = async function () {

    await loadSavedReports();
};


async function loadSavedReports() {

    try {

        const response =
            await fetch("/reports");

        const data =
            await response.json();

        const reportList =
            document.getElementById(
                "reportList"
            );

        reportList.innerHTML = "";

        (data.reports || []).forEach(report => {

            const div =
                document.createElement("div");

            div.className =
                "report-item";

            div.innerText = report;

            div.onclick = async () => {

                const response =
                    await fetch(
                        `/reports/${report}`
                    );

                const reportData =
                    await response.json();

                latestAnalysis =
                    reportData;

                renderResults(
                    reportData
                );
            };

            reportList.appendChild(div);
        });

    } catch (error) {

        console.log(error);
    }
}


async function uploadProject() {

    const fileInput =
        document.getElementById(
            "fileInput"
        );

    if (!fileInput.files.length) {

        alert("Select ZIP file.");

        return;
    }

    const formData = new FormData();

    formData.append(

        "file",

        fileInput.files[0]
    );

    analyzeRequest(

        "/upload",

        {

            method: "POST",

            body: formData
        }
    );
}


async function analyzeGitHub() {

    const githubUrl =
        document.getElementById(
            "githubUrl"
        ).value;

    if (!githubUrl) {

        alert(
            "Enter GitHub URL."
        );

        return;
    }

    analyzeRequest(

        "/analyze-github",

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

                repo_url: githubUrl
            })
        }
    );
}


async function analyzeRequest(

    url,
    options

) {

    const loading =
        document.getElementById(
            "loading"
        );

    const results =
        document.getElementById(
            "results"
        );

    loading.classList.remove(
        "hidden"
    );

    results.classList.add(
        "hidden"
    );

    try {

        const response =
            await fetch(
                url,
                options
            );

        const data =
            await response.json();

        latestAnalysis = data;

        renderResults(data);

        await loadSavedReports();

        loading.classList.add(
            "hidden"
        );

        results.classList.remove(
            "hidden"
        );

    } catch (error) {

        loading.innerText =
            "Analysis failed.";
    }
}


function renderResults(data) {

    renderProjectInfo(data);

    renderSimpleList(

        "frameworks",

        data.frameworks
    );

    renderSimpleList(

        "entryPoints",

        data.entry_points
    );

    renderArchitecture(
        data.architecture
    );

    renderWorkflow(
        data.workflow_reconstruction
    );

    renderRelationships(
        data.relationship_map
    );

    document.getElementById(
        "aiExplanation"
    ).innerText = cleanText(

        data.ai_explanation
    );
}


function renderProjectInfo(data) {

    document.getElementById(
        "projectInfo"
    ).innerHTML = `

        <p>
            <strong>Project Type:</strong>
            ${data.project_type || "Unknown"}
        </p>

        <p>
            <strong>Primary Language:</strong>
            ${data.primary_language || "Unknown"}
        </p>

        <p>
            <strong>Project ID:</strong>
            ${data.project_id || "Unknown"}
        </p>
    `;
}


function renderSimpleList(

    elementId,
    items

) {

    const element =
        document.getElementById(
            elementId
        );

    if (!items || items.length === 0) {

        element.innerHTML =
            "<p>None detected.</p>";

        return;
    }

    element.innerHTML = `

        <ul>

            ${items.map(

                item =>
                `<li>${item}</li>`

            ).join("")}

        </ul>
    `;
}


function renderArchitecture(items) {

    const element =
        document.getElementById(
            "architecture"
        );

    if (!items || items.length === 0) {

        element.innerHTML =
            "<p>No architecture detected.</p>";

        return;
    }

    let html = "<ul>";

    items.forEach(item => {

        html += `

            <li>

                <strong>${item.path}</strong>

                → ${item.role}

            </li>
        `;
    });

    html += "</ul>";

    element.innerHTML = html;
}


function renderWorkflow(items) {

    const element =
        document.getElementById(
            "workflowData"
        );

    if (!items || items.length === 0) {

        element.innerHTML =
            "<p>No workflow detected.</p>";

        return;
    }

    let html = "";

    items.forEach(item => {

        if (
            !item.steps ||
            item.steps.length === 0
        ) {
            return;
        }

        html += `

            <div class="report-box">

                <h3>${item.file}</h3>

                <ul>

                    ${item.steps.map(

                        step =>
                        `<li>${step}</li>`

                    ).join("")}

                </ul>

            </div>
        `;
    });

    element.innerHTML = html;
}


function renderRelationships(items) {

    const element =
        document.getElementById(
            "relationshipData"
        );

    if (!items || items.length === 0) {

        element.innerHTML =
            "<p>No relationships detected.</p>";

        return;
    }

    let html = "";

    items.forEach(item => {

        if (
            !item.targets ||
            item.targets.length === 0
        ) {
            return;
        }

        html += `

            <div class="report-box">

                <h3>${item.source}</h3>

                <ul>

                    ${item.targets.map(

                        target =>
                        `<li>${target}</li>`

                    ).join("")}

                </ul>

            </div>
        `;
    });

    element.innerHTML = html;
}


function cleanText(text) {

    if (!text) {

        return "No AI explanation available.";
    }

    return text

        .replace(/\*\*/g, "")

        .replace(/`/g, "")

        .replace(/\\/g, "/")

        .replace(/#/g, "")

        .replace(/\r/g, "")

        .trim();
}


function downloadJSON() {

    if (!latestAnalysis) {

        alert(
            "No analysis available."
        );

        return;
    }

    const blob = new Blob(

        [

            JSON.stringify(

                latestAnalysis,

                null,

                2
            )
        ],

        {

            type:
            "application/json"
        }
    );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href = url;

    a.download =
        "analysis_report.json";

    a.click();

    URL.revokeObjectURL(url);
}