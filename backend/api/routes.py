from fastapi import APIRouter, UploadFile, File

from pydantic import BaseModel

from backend.core.ingestion.upload_handler import (
    process_uploaded_zip
)

from backend.core.ingestion.github_handler import (
    clone_github_repository
)

from backend.core.scanner.file_scanner import (
    scan_project_structure
)

from backend.core.scanner.tree_builder import (
    build_project_tree
)

from backend.core.scanner.language_detector import (
    detect_languages
)

from backend.core.scanner.framework_detector import (
    detect_frameworks
)

from backend.core.analyzer.entry_point_detector import (
    detect_entry_points
)

from backend.core.analyzer.dependency_mapper import (
    map_dependencies
)

from backend.core.analyzer.project_classifier import (
    classify_project
)

from backend.core.analyzer.architecture_reconstructor import (
    analyze_folder_responsibilities
)

from backend.core.analyzer.workflow_reconstructor import (
    reconstruct_workflow
)

from backend.core.analyzer.relationship_mapper import (
    build_relationship_map
)

from backend.core.graph.execution_flow import (
    build_execution_flow
)

from backend.core.docs.summary_generator import (
    generate_project_summary
)

from backend.core.ai.reasoning_engine import (
    generate_ai_explanation
)

from backend.storage.report_manager import (

    save_report,

    load_report,

    list_reports
)


router = APIRouter()


class GitHubRequest(BaseModel):

    repo_url: str


@router.get("/health")
async def health_check():

    return {

        "status": "running"
    }


@router.get("/reports")
async def get_reports():

    return {

        "reports":
        list_reports()
    }


@router.get("/reports/{project_id}")
async def get_report(

    project_id: str
):

    report = load_report(
        project_id
    )

    if not report:

        return {

            "error":
            "Report not found"
        }

    return report


@router.post("/upload")
async def upload_project(
    file: UploadFile = File(...)
):

    upload_result = process_uploaded_zip(
        file
    )

    report = analyze_project(

        upload_result["project_id"],

        upload_result["extract_path"]
    )

    save_report(

        upload_result["project_id"],

        report
    )

    return report


@router.post("/analyze-github")
async def analyze_github_repo(

    request: GitHubRequest
):

    github_result = clone_github_repository(
        request.repo_url
    )

    report = analyze_project(

        github_result["project_id"],

        github_result["extract_path"]
    )

    save_report(

        github_result["project_id"],

        report
    )

    return report


def analyze_project(

    project_id,
    extract_path

):

    raw_structure = scan_project_structure(
        extract_path
    )

    tree = build_project_tree(
        extract_path
    )

    languages = detect_languages(
        extract_path
    )

    framework_data = detect_frameworks(
        extract_path
    )

    entry_points = detect_entry_points(
        extract_path
    )

    dependency_map = map_dependencies(
        extract_path
    )

    workflow_data = reconstruct_workflow(
        dependency_map
    )

    relationship_map = build_relationship_map(
        dependency_map
    )

    classification = classify_project(

        framework_data["frameworks"],

        languages,

        entry_points
    )

    execution_flow = build_execution_flow(

        extract_path,

        entry_points
    )

    architecture = analyze_folder_responsibilities(
        tree
    )

    summary = generate_project_summary(

        classification["project_type"],

        framework_data["frameworks"],

        languages,

        entry_points,

        architecture
    )

    try:

        ai_explanation = generate_ai_explanation(

            classification["project_type"],

            framework_data["frameworks"],

            entry_points,

            architecture,

            execution_flow
        )

    except Exception:

        ai_explanation = (
            "AI explanation unavailable."
        )

    return {

        "message":
        "Project analyzed successfully",

        "project_id":
        project_id,

        "project_type":
        classification["project_type"],

        "primary_language":
        classification["primary_language"],

        "languages":
        languages,

        "frameworks":
        framework_data["frameworks"],

        "important_files":
        framework_data["important_files"],

        "entry_points":
        entry_points,

        "execution_flow":
        execution_flow,

        "workflow_reconstruction":
        workflow_data,

        "relationship_map":
        relationship_map,

        "architecture":
        architecture,

        "summary":
        summary,

        "ai_explanation":
        ai_explanation,

        "dependency_map":
        dependency_map,

        "project_tree":
        tree,

        "raw_structure":
        raw_structure
    }