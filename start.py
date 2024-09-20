import asyncio

from meow import app

if __name__ == '__main__':
    asyncio.run(app.run_task(
        host="0.0.0.0",
        port=8000
    ))