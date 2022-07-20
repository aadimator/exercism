export class Matrix {
  constructor(input) {
    this.dataRows = input.split('\n').map(row => row.split(' ').map(value => Number(value)));
    this.dataCols = this.dataRows[0].map((_, i) => this.dataRows.map(row => row[i]));
  }

  get rows() {
    return this.dataRows;
  }

  get columns() {
    return this.dataCols;
  }
}
