from pathlib import Path


IGNORED_FOLDERS = {
    "__pycache__",
    ".git",
    "node_modules",
    "venv"
}


def build_project_tree(root_path):

    root = Path(root_path)

    tree = {}

    for item in root.rglob("*"):

        relative_path = item.relative_to(root)

        if any(part in IGNORED_FOLDERS for part in relative_path.parts):
            continue

        current = tree

        parts = relative_path.parts

        for part in parts[:-1]:

            current = current.setdefault(part, {})

        final_part = parts[-1]

        if item.is_dir():

            current.setdefault(final_part, {})

        else:

            current[final_part] = {
                "type": "file",
                "size": item.stat().st_size
            }

    return tree 