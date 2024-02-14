import { describe, expect, it, test } from "vitest";
import cn from "./cn";

describe("cn", () => {
  it("should return a single class when one class is passed", () => {
    const input = "text-red-500";
    const result = cn(input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500");
  });

  it("should return merged classes when multiple classes are passed", () => {
    const input = ["text-red-500", "bg-blue-200"];
    const result = cn(...input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500 bg-blue-200");
  });

  it("should merge classes when a second argument is passed", () => {
    const input = ["text-red-500 bg-blue-200", "font-bold bg-green-500"];
    const result = cn(...input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500 font-bold bg-green-500");
  });

  it("should ignore falsy values", () => {
    const input = ["text-red-500", null, undefined, false, "bg-blue-200"];
    const result = cn(...input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500 bg-blue-200");
  });

  it("should handle array of classes", () => {
    const input = ["text-red-500", "bg-blue-200", "font-bold"];
    const result = cn(...input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500 bg-blue-200 font-bold");
  });

  it("should handle nested arrays of classes", () => {
    const input = ["text-red-500", ["bg-blue-200", "font-bold"]];
    const result = cn(...input);
    console.log("input:", input);
    console.log("result:", result);
    expect(result).toEqual("text-red-500 bg-blue-200 font-bold");
  });
});
