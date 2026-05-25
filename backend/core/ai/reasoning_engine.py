from google import genai

from backend.core.config.settings import GEMINI_API_KEY

from backend.core.ai.prompt_builder import (
    build_architecture_prompt
)


client = genai.Client(
    api_key=GEMINI_API_KEY
)


MODELS = [

    "gemini-2.5-flash",

    "gemini-2.0-flash",

    "gemini-1.5-flash"
]


def generate_ai_explanation(

    project_type,
    frameworks,
    entry_points,
    architecture,
    execution_flow

):

    prompt = build_architecture_prompt(
        project_type,
        frameworks,
        entry_points,
        architecture,
        execution_flow
    )

    for model_name in MODELS:

        try:

            response = client.models.generate_content(

                model=model_name,

                contents=prompt
            )

            return response.text

        except Exception:

            continue

    return (
        "AI explanation temporarily unavailable. "
        "Deterministic project analysis still succeeded."
    )