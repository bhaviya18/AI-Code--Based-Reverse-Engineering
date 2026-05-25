from pathlib import Path
import re


IMPORT_PATTERNS = [

    r'import\s+.*?\s+from\s+[\'"](.+?)[\'"]',

    r'import\s+[\'"](.+?)[\'"]'
]


VALID_EXTENSIONS = {
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".py"
}


def extract_imports(content):

    imports = []

    for pattern in IMPORT_PATTERNS:

        matches = re.findall(pattern, content)

        imports.extend(matches)

    return imports


def build_execution_flow(root_path, entry_points):

    root = Path(root_path)

    flow = {}

    for entry in entry_points:

        entry_file = root / entry

        if not entry_file.exists():
            continue

        try:

            content = entry_file.read_text(
                encoding="utf-8",
                errors="ignore"
            )

            imports = extract_imports(content)

            flow[entry] = {
                "imports": imports
            }

        except Exception:

            flow[entry] = {
                "imports": []
            }

    return flow