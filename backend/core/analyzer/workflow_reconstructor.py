import os


IMPORTANT_FILES = [

    "main.py",
    "app.py",
    "main.jsx",
    "main.js",
    "App.jsx",
    "App.js"
]


def reconstruct_workflow(

    dependency_map

):

    workflow_output = []

    for file_path, imports in dependency_map.items():

        file_name = os.path.basename(
            file_path
        )

        if file_name not in IMPORTANT_FILES:
            continue

        steps = []

        if file_name in [

            "main.jsx",
            "main.js"

        ]:

            steps.append(
                "Initializes frontend application"
            )

        if file_name in [

            "main.py",
            "app.py"

        ]:

            steps.append(
                "Starts backend application"
            )

        if "react" in imports:

            steps.append(
                "Uses React framework"
            )

        if "react-router-dom" in imports:

            steps.append(
                "Handles routing/navigation"
            )

        if any(

            "firebase" in item.lower()

            for item in imports

        ):

            steps.append(
                "Connects Firebase services"
            )

        component_usage = []

        for item in imports:

            if "./components/" in item:

                component_name = (
                    item.split("/")[-1]
                )

                component_usage.append(
                    component_name
                )

        if component_usage:

            steps.append(

                "Uses components: "
                + ", ".join(component_usage)
            )

        if "./App.jsx" in imports:

            steps.append(
                "Loads App.jsx root component"
            )

        if "./App.js" in imports:

            steps.append(
                "Loads App.js root component"
            )

        if not steps:

            steps.append(
                "Handles application workflow"
            )

        workflow_output.append({

            "file": file_name,

            "steps": steps
        })

    return workflow_output