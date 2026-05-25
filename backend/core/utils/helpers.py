import uuid
from datetime import datetime


def generate_project_id():
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    random_id = str(uuid.uuid4())[:8]

    return f"project_{timestamp}_{random_id}"