def generate_project_summary(

    project_type,
    frameworks,
    languages,
    entry_points,
    architecture

):

    summary = []

    summary.append(
        f"Project Type: {project_type}"
    )

    summary.append(
        f"Frameworks: {', '.join(frameworks)}"
    )

    summary.append(
        f"Languages: {', '.join(languages.keys())}"
    )

    if entry_points:

        summary.append(
            f"Main Entry Point: {entry_points[0]}"
        )

    if architecture:

        summary.append(
            "Detected Architecture:"
        )

        for item in architecture:

            summary.append(
                f"- {item['path']} → {item['role']}"
            )

    return "\n".join(summary)