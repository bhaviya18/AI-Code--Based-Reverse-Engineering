def classify_project(

    frameworks,
    languages,
    entry_points

):

    project_type = "Unknown"

    # Framework-based detection
    if "React" in frameworks:

        project_type = "Frontend Web Application"

    elif "Next.js" in frameworks:

        project_type = "Fullstack Web Application"

    elif "FastAPI" in frameworks:

        project_type = "Python API Backend"

    elif "Flask" in frameworks:

        project_type = "Python Flask Application"

    elif "Django" in frameworks:

        project_type = "Django Web Application"

    elif "Express" in frameworks:

        project_type = "Node.js Backend"

    # Generic language-based detection
    elif "Java" in languages:

        if entry_points:

            project_type = "Java Application"

        else:

            project_type = "Java Codebase"

    elif "Python" in languages:

        project_type = "Python Project"

    elif "JavaScript" in languages:

        project_type = "JavaScript Project"

    return {

        "project_type": project_type,

        "primary_language": max(
            languages,
            key=languages.get
        ) if languages else "Unknown"
    }