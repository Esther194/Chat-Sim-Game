import pandas as pd
import os

from flask import Flask, render_template, jsonify
app = Flask(__name__)
@app.route("/")
def test():
    return render_template("index.html")
@app.route("/get_data", methods=["GET"])
def get_data():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, "plot.xlsx")
    plot = pd.read_excel(file_path)
    p0=list(plot.iloc[0:5, 0])
    p02=list(plot.iloc[6:9, 0])
    p04=list(plot.iloc[10:17, 0])
    s0=list(plot.iloc[0:5, 1]) 
    s02=list(plot.iloc[6:9, 1])
    s04=list(plot.iloc[10:17, 1])
    data = {
        "p0": p0,
        "p05": ["123456", "987654"],
        "s0": s0,
        "s05": ["left", "left"]
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=False)


