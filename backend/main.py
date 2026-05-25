from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from backend.api.routes import router

app = FastAPI(
    title="AI Codebase Reverse Engineering System"
)

app.include_router(router)

app.mount(
    "/static",
    StaticFiles(directory="frontend/static"),
    name="static"
)


@app.get("/")
async def serve_frontend():
    return FileResponse("frontend/index.html")