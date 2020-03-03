  
import health from "../app";

test.each([
  [
    { name: "маг", health: 90 }, "healthy",
  ],
  [
    { name: "маг", health: 30 }, "wounded",
  ],
  [
    { name: "маг", health: 10 }, "critical",
  ],
  [
    {}, null,
  ],
])(
  ("%s.name have %i hp"),
  (hero, expected) => {
    const result = health(hero);

    expect(result).toBe(expected);
  },
);