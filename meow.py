from quart import (
    Quart,
    request,
    render_template,
    redirect
)

app = Quart(__name__)

@app.route('/')
async def home():
    return await render_template('index.html')

@app.route('/telegram')
async def telegram():
    return redirect('https://t.me/uhcode')

@app.route('/github')
async def github():
    return redirect('https://github.com/uhcode')