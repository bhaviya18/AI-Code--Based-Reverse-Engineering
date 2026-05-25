def build_architecture_prompt(

    project_type,
    frameworks,
    entry_points,
    architecture,
    execution_flow

):

    return f"""
You are a software architecture assistant.

Analyze the project using ONLY the provided data.

PROJECT TYPE:
{project_type}

FRAMEWORKS:
{frameworks}

ENTRY POINTS:
{entry_points}

ARCHITECTURE:
{architecture}

EXECUTION FLOW:
{execution_flow}

Return response STRICTLY in this format:

PROJECT OVERVIEW:
- short explanation

EXECUTION FLOW:
- how app starts
- important startup files

ARCHITECTURE:
- folder responsibilities

TECH STACK:
- frameworks and languages

NEW DEVELOPER GUIDE:
- where to start reading
- important files
- understanding order

Keep response:
- concise
- structured
- practical
- beginner friendly

Maximum 300 words.
"""