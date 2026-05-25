import os
import json


REPORT_DIR = "backend/storage/reports"


os.makedirs(

    REPORT_DIR,

    exist_ok=True
)


def save_report(

    project_id,
    report_data
):

    file_path = os.path.join(

        REPORT_DIR,

        f"{project_id}.json"
    )

    with open(

        file_path,

        "w",

        encoding="utf-8"

    ) as file:

        json.dump(

            report_data,

            file,

            indent=4
        )


def load_report(

    project_id
):

    file_path = os.path.join(

        REPORT_DIR,

        f"{project_id}.json"
    )

    if not os.path.exists(
        file_path
    ):

        return None

    with open(

        file_path,

        "r",

        encoding="utf-8"

    ) as file:

        return json.load(file)


def list_reports():

    reports = []

    if not os.path.exists(
        REPORT_DIR
    ):

        return reports

    for file_name in os.listdir(
        REPORT_DIR
    ):

        if file_name.endswith(
            ".json"
        ):

            reports.append(

                file_name.replace(
                    ".json",
                    ""
                )
            )

    reports.sort(
        reverse=True
    )

    return reports