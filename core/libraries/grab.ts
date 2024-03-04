class Grab {
  private readonly something: unknown;

  constructor(something: unknown) {
    this.something = something;
  }

  error() {
    if (this.something instanceof Error) return this.something;
    throw new Error("An unknown error occurred.");
  }
}

export default Grab;
