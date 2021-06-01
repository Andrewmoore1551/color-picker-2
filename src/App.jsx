import React, { Component } from 'react'
export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
  }
  changeHSL = (event, hslPicker) => {
    switch (hslPicker) {
      case 1:
        this.setState({ hue: event.target.value })
        break
      case 2:
        this.setState({ saturation: event.target.value })
        break
      case 3:
        this.setState({ lightness: event.target.value })
        break
    }
  }

  randomize = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const { hue, saturation, lightness } = this.state

    return (
      <div>
        <header>
          <h1>Color Picker</h1>
        </header>
        <main>
          <figure>
            <div
              className="box"
              style={{
                backgroundColor: `hsl(${hue},
                 ${saturation}%,
                 ${lightness}%`,
              }}
            ></div>
            <figcaption>
              <ul>
                <li>
                  <h3>Hue</h3>
                  <input
                    type="range"
                    className="slider"
                    min="0"
                    max="360"
                    value={hue}
                    onInput={event => this.changeHSL(event, 1)}
                    style={{
                      backgroundColor: `hsl(${hue},
                       100%,
                       50%)`,
                    }}
                  />
                  <input
                    type="text"
                    className="textBox"
                    value={hue}
                    onInput={event => this.changeHSL(event, 1)}
                  />
                  <p>&#176;</p>
                </li>
                <li>
                  <h3>Saturation</h3>
                  <input
                    type="range"
                    className="slider"
                    min="0"
                    max="100"
                    value={saturation}
                    onInput={event => this.changeHSL(event, 2)}
                    style={{
                      backgroundColor: `hsl(${hue},
                       ${saturation}%,
                       50%)`,
                    }}
                  />
                  <input
                    type="text"
                    className="textBox"
                    value={saturation}
                    onInput={event => this.changeHSL(event, 2)}
                  />
                  <p>&#37;</p>
                </li>
                <li>
                  <h3>Lightness</h3>
                  <input
                    type="range"
                    className="slider"
                    min="0"
                    max="100"
                    value={lightness}
                    onInput={event => this.changeHSL(event, 3)}
                    style={{
                      backgroundColor: `hsl(${hue},
                       0%,
                       ${lightness}%)`,
                    }}
                  />
                  <input
                    type="text"
                    className="textBox"
                    value={lightness}
                    onInput={event => this.changeHSL(event, 3)}
                  />
                  <p>&#37;</p>
                </li>
                <li></li>
              </ul>
            </figcaption>
          </figure>
        </main>
        <footer>
          <button onClick={this.randomize}> Color Randomizer</button>
        </footer>
      </div>
    )
  }
}
