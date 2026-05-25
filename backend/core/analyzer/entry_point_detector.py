from pathlib import Path


TRUE_ENTRY_POINTS = [
    "main.py",
    "app.py",
    "server.py",
    "manage.py",
    "main.jsx",
    "main.js"
]


def is_java_main_class(content):

    return (
        "public static void main" in content
    )


def detect_entry_points(root_path):

    root = Path(root_path)

    detected = []

    for file in root.rglob("*"):

        if not file.is_file():
            continue

        # Standard known entry files
        if file.name in TRUE_ENTRY_POINTS:

            detected.append(
                str(file.relative_to(root))
            )

            continue

        # Java main detection
        if file.suffix == ".java":

            try:

                content = file.read_text(
                    encoding="utf-8",
                    errors="ignore"
                )

                if is_java_main_class(content):

                    detected.append(
                        str(file.relative_to(root))
                    )

            except Exception:
                pass

    return sorted(list(set(detected)))