import uuid

from pathlib import Path

from git import Repo

from backend.core.config.settings import (
    UPLOAD_DIR
)


def clone_github_repository(repo_url):

    project_id = (
        f"github_{uuid.uuid4().hex[:8]}"
    )

    clone_directory = (
        UPLOAD_DIR / project_id
    )

    Repo.clone_from(

        repo_url,

        clone_directory
    )

    actual_project_root = (
        find_real_project_root(
            clone_directory
        )
    )

    return {

        "project_id": project_id,

        "extract_path":
        str(actual_project_root)
    }


def find_real_project_root(

    clone_directory

):

    entries = list(
        Path(clone_directory).iterdir()
    )

    folders = [

        entry for entry in entries

        if entry.is_dir()
    ]

    important_files = [

        "package.json",

        "requirements.txt",

        "pyproject.toml",

        "pom.xml",

        "build.gradle",

        "Cargo.toml",

        "go.mod"
    ]

    for folder in folders:

        for important_file in important_files:

            if (
                folder / important_file
            ).exists():

                return folder

    return clone_directory