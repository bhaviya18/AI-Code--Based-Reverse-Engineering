def analyze_folder_responsibilities(

    project_tree
):

    architecture = []

    def walk_tree(

        tree,
        current_path=""

    ):

        for name, value in tree.items():

            if isinstance(value, dict):

                path = (
                    f"{current_path}/{name}"
                )

                role = detect_role(
                    name
                )

                if role:

                    architecture.append({

                        "path": path,

                        "role": role
                    })

                walk_tree(
                    value,
                    path
                )

    walk_tree(project_tree)

    return architecture


def detect_role(folder_name):

    name = folder_name.lower()

    mapping = {

        "src":
        "Main source code",

        "app":
        "Application core",

        "core":
        "Core business logic",

        "api":
        "API layer",

        "routes":
        "Route handlers",

        "controllers":
        "Request controllers",

        "services":
        "Business services",

        "models":
        "Database/data models",

        "schemas":
        "Validation schemas",

        "middleware":
        "Middleware logic",

        "utils":
        "Utility/helper functions",

        "helpers":
        "Reusable helper functions",

        "components":
        "Reusable UI components",

        "pages":
        "Application pages/views",

        "assets":
        "Static assets",

        "public":
        "Public static files",

        "templates":
        "HTML templates",

        "static":
        "Static frontend resources",

        "config":
        "Configuration management",

        "database":
        "Database layer",

        "docs":
        "Documentation",

        "tests":
        "Testing suite",

        "auth":
        "Authentication system",

        "security":
        "Security-related logic",

        "logs":
        "Logging system",

        "scripts":
        "Automation scripts",

        "plugins":
        "Plugin/extensions system"
    }

    return mapping.get(name)