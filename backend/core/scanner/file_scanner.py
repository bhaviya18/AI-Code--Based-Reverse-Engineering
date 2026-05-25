from pathlib import Path


IGNORED_FOLDERS = {
    "__pycache__",
    ".git",
    "node_modules",
    "venv"
}


def scan_project_structure(root_path):

    root = Path(root_path)

    tree = {}

    for item in root.rglob("*"):

        relative_path = item.relative_to(root)

        if any(part in IGNORED_FOLDERS for part in relative_path.parts):
            continue

        tree[str(relative_path)] = {
            "type": "directory" if item.is_dir() else "file",
            "size": item.stat().st_size if item.is_file() else None
        }

    return tree