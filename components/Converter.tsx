import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ConverterProps {}

interface ConverterState {
  input: number | string;
  submit: number | string;
}

class Converter extends React.Component<ConverterProps, ConverterState> {
  constructor(props: ConverterProps) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  conv = (num: number): string => {
    type RomanNumeral = [string, number];
    const tableRoman: RomanNumeral[] = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    for (let i = 0; i < tableRoman.length; i++) {
      if (num >= tableRoman[i][1]) {
        return tableRoman[i][0] + this.conv(num - tableRoman[i][1]);
      }
    }
    return "";
  };

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputNumber = +this.state.input;
    const result = this.conv(inputNumber);
    this.setState({
      submit: result,
    });
  }

  render() {
    return (
      <body className="">
        <div className="text-center grid gap-3">
          <div className="bg-black text-white text-3xl font-bold p-3 rounded-lg">
            Roman Numeral Converter
          </div>
          <div className="text-3xl font-semibold">
            Hi! Let&apos;s make some conversions
          </div>
        </div>
        <div className="grid justify-center gap-5 py-8 text-xl">
          <form onSubmit={this.handleSubmit} className="flex justify-center">
            <input
              className="bg-white placeholder:text-slate-500 w-80 p-3 rounded-l-lg"
              type="number"
              placeholder="Enter a number from 1 to 9999"
              max={9999}
              min={1}
              value={this.state.input}
              onChange={this.handleChange}
              required
            />
            <button
              className="bg-black text-white text-xl p-3 rounded-r-lg"
              type="submit"
            >
              Convert
            </button>
          </form>
          <input
            className="bg-slate-200 placeholder:text-slate-500 block p-3 rounded-lg "
            type="text"
            placeholder="Roman Numerals"
            value={this.state.submit}
            disabled
          />
        </div>
      </body>
    );
  }
}

export default Converter;
