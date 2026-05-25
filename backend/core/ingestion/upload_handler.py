import zipfile
import shutil

from pathlib import Path

from backend.core.utils.helpers import generate_project_id
from backend.core.config.settings import UPLOAD_DIR


def process_uploaded_zip(uploaded_file):

    project_id = generate_project_id()

    project_folder = UPLOAD_DIR / project_id

    project_folder.mkdir(parents=True, exist_ok=True)

    zip_path = project_folder / uploaded_file.filename

    with open(zip_path, "wb") as buffer:
        shutil.copyfileobj(uploaded_file.file, buffer)

    extract_path = project_folder / "source"

    extract_path.mkdir(exist_ok=True)

    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(extract_path)

    return {
        "project_id": project_id,
        "zip_path": str(zip_path),
        "extract_path": str(extract_path)
    }