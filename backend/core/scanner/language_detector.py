from pathlib import Path


LANGUAGE_MAPPING = {
    ".py": "Python",
    ".js": "JavaScript",
    ".ts": "TypeScript",
    ".java": "Java",
    ".cpp": "C++",
    ".c": "C",
    ".cs": "C#",
    ".go": "Go",
    ".php": "PHP",
    ".rb": "Ruby",
    ".rs": "Rust",
    ".html": "HTML",
    ".css": "CSS"
}


def detect_languages(root_path):

    root = Path(root_path)

    detected = {}

    for file in root.rglob("*"):

        if file.is_file():

            extension = file.suffix.lower()

            if extension in LANGUAGE_MAPPING:

                language = LANGUAGE_MAPPING[extension]

                detected[language] = detected.get(language, 0) + 1

    return detected