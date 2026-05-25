import re

from pathlib import Path


IMPORT_PATTERNS = [

    r'import\s+.*?\s+from\s+[\'"](.+?)[\'"]',

    r'import\s+[\'"](.+?)[\'"]',

    r'from\s+([a-zA-Z0-9_\.]+)\s+import'
]


VALID_EXTENSIONS = {
    ".py",
    ".js",
    ".jsx",
    ".ts",
    ".tsx"
}


def extract_imports(content):

    imports = set()

    for pattern in IMPORT_PATTERNS:

        matches = re.findall(pattern, content)

        imports.update(matches)

    return sorted(list(imports))


def map_dependencies(root_path):

    root = Path(root_path)

    dependency_map = {}

    for file in root.rglob("*"):

        if not file.is_file():
            continue

        if file.suffix not in VALID_EXTENSIONS:
            continue

        try:

            content = file.read_text(
                encoding="utf-8",
                errors="ignore"
            )

            imports = extract_imports(content)

            dependency_map[
                str(file.relative_to(root))
            ] = imports

        except Exception:

            dependency_map[
                str(file.relative_to(root))
            ] = []

    return dependency_map