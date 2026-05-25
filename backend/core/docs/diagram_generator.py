def generate_mermaid_diagram(

    execution_flow,
    dependency_map

):

    lines = []

    lines.append("graph TD")

    # Execution flow
    for file, data in execution_flow.items():

        imports = data.get(
            "imports",
            []
        )

        source = clean_node_name(file)

        for imported in imports:

            target = clean_node_name(
                imported
            )

            lines.append(
                f"{source} --> {target}"
            )

    # Dependency map
    for file, imports in dependency_map.items():

        source = clean_node_name(file)

        for imported in imports:

            target = clean_node_name(
                imported
            )

            lines.append(
                f"{source} --> {target}"
            )

    return "\n".join(
        sorted(set(lines))
    )


def clean_node_name(name):

    return (
        name.replace("\\", "_")
        .replace("/", "_")
        .replace(".", "_")
        .replace("-", "_")
    )