import json

from pathlib import Path


def detect_frameworks(root_path):

    root = Path(root_path)

    frameworks = set()

    important_files = []

    package_json = None

    requirements_txt = None

    for file in root.rglob("*"):

        if not file.is_file():
            continue

        if file.name == "package.json":
            package_json = file

        if file.name == "requirements.txt":
            requirements_txt = file

        if file.name in [
            "package.json",
            "requirements.txt",
            "README.md",
            "Dockerfile"
        ]:
            important_files.append(str(file.relative_to(root)))

    # Detect Node frameworks
    if package_json:

        try:

            data = json.loads(
                package_json.read_text(
                    encoding="utf-8",
                    errors="ignore"
                )
            )

            dependencies = {}

            dependencies.update(data.get("dependencies", {}))

            dependencies.update(data.get("devDependencies", {}))

            dependency_names = set(dependencies.keys())

            if "react" in dependency_names:
                frameworks.add("React")

            if "next" in dependency_names:
                frameworks.add("Next.js")

            if "express" in dependency_names:
                frameworks.add("Express")

            if "vite" in dependency_names:
                frameworks.add("Vite")

            if "vue" in dependency_names:
                frameworks.add("Vue")

        except Exception:
            pass

    # Detect Python frameworks
    if requirements_txt:

        try:

            content = requirements_txt.read_text(
                encoding="utf-8",
                errors="ignore"
            ).lower()

            if "fastapi" in content:
                frameworks.add("FastAPI")

            if "flask" in content:
                frameworks.add("Flask")

            if "django" in content:
                frameworks.add("Django")

        except Exception:
            pass

    return {
        "frameworks": sorted(list(frameworks)),
        "important_files": important_files
    }