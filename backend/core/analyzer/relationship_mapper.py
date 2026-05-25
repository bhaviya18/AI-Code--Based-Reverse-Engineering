import os


def build_relationship_map(

    dependency_map

):

    relationship_output = []

    for source_file, imports in dependency_map.items():

        source_name = os.path.basename(
            source_file
        )

        targets = []

        for item in imports:

            if (

                item.startswith("./")
                or
                item.startswith("../")

            ):

                clean_name = (
                    item.split("/")[-1]
                )

                if clean_name:

                    targets.append(
                        clean_name
                    )

        relationship_output.append({

            "source": source_name,

            "targets": targets
        })

    return relationship_output